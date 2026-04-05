
// -------------------------
// нормализация текста
// -------------------------
// -------------------------
// нормализация текста + стемминг для русского
// -------------------------
export const normalize = str => {
  if (!str) return "";

  // приведение к нижнему регистру, удаление HTML, спецсимволов, лишних пробелов
  let text = str
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/ё/g, "е")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/\s+/g, " ")
    .trim();

  // простейший стемминг для русского языка (удаляем окончания)
  const stemWord = word =>
    word.replace(/(ы|и|а|е|у|ой|ей|ий|ой|ах|ях|ов|ев|ами|ями)$/i, '');

  return text
    .split(" ")
    .map(stemWord)
    .join(" ");
};

function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
      else
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
    }
  }
  return matrix[b.length][a.length];
}

function isSimilar(a, b) {
  if (a.length < 4) return false;
  const distance = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  return distance <= Math.max(1, Math.floor(maxLen * 0.1));
}

// -------------------------
// формируем текст для поиска
// -------------------------
function getSearchText(item, lang = "ru") {
  let text = "";

  // Берём заголовок и описание из самого объекта
  if (item.meta?.title) text += item.meta.title + " ";
  if (item.meta?.description) text += item.meta.description + " ";
   if (item.meta?.keywords) text += item.meta.keywords + " ";

  // Берём переводы выбранного языка
  const t = item.translations?.[lang];
  if (t) {
    if (t.meta?.title) text += t.meta.title + " ";
    if (t.meta?.description) text += t.meta.description + " ";
    if (t.meta?.keywords) text += t.meta.keywords + " ";
    if (t.country) text += t.country + " "; // для стран
  }

  // fallback на старое поле searchText
  if (item.searchText) text += item.searchText + " ";

  return normalize(text);
}

// -------------------------
// плоский индекс для поиска
// -------------------------
export function buildSearchIndex(data, lang) {
  const flat = [];
  const usedIds = new Set();

  function push(item, type, urlBuilder) {

    if (!item) return;
    const key = `${type}_${item.id || item.path}`;
    if (usedIds.has(key)) return;   // ← вот это главное
    usedIds.add(key);

    const searchText = getSearchText(item, lang);

    flat.push({
      ...item,
      type,
      searchText,
      searchName: normalize(item.translations?.[lang]?.name || item.name),
      url: urlBuilder ? urlBuilder() : "#",
      rating: item.rating || null
    });
  }

  function pushOld(item, type, urlBuilder, langKey) {
    const searchText = getSearchText(item, langKey);
    flat.push({
      ...item,
      type,
      searchText,
      // берём name/meta напрямую из объекта языка
      searchName: normalize(
        item[langKey]?.name || item[langKey]?.meta?.title || item.name
      ),
      url: urlBuilder ? urlBuilder() : "#",
      rating: item.rating || null
    });
  }

  // страны
  Object.values(data.country || {}).forEach(c =>
    push(c, "country", () => `/${c.path}`)
  );

  // регионы и города
  Object.keys(data).forEach(countryKey => {
    if (["country", "de", "ru", "ua"].includes(countryKey)) return;

    const countryObj = data[countryKey];
    // регион
    Object.keys(countryObj).forEach(regionKey => {
      const region = countryObj[regionKey];
      if (!region) return;

      if (data[countryKey].land) {
        data[countryKey].land.forEach(land => {
          push(land, "region", () => "/" + [countryKey, land.path].filter(Boolean).join("/"))
        });
      }

      // маршруты
      if (data[countryKey].routes) {
        data[countryKey].routes.forEach(routes => {
          push(routes, "routes", () => "/" + [countryKey, "routes", routes.path].filter(Boolean).join("/"))
        });
      }

      // города
      (region.city || []).forEach(city =>
        push(city, "city", () => "/" + [countryKey, regionKey, city.districtPath, city.path].filter(Boolean).join("/"))
      );

      // округа
      (region.districts || []).forEach(district =>
        push(district, "district", () => `/${countryKey}/${regionKey}/${district.path}`)
      );

      // субрегионы
      (region.subRegions || []).forEach(sub =>
        push(sub, "subRegion", () => "/" + [countryKey, regionKey, sub.districtPath].filter(Boolean).join("/"))
      );

      // достопримечательности новые
      (region.attractions || []).forEach(attr =>
        push(attr, "attraction", () => "/" +
          [
            attr.countryPath || countryKey,
            attr.regionsPath || regionKey,
            attr.districtPath,
            attr.cityPath,
            "attractions",
            attr.path
          ].filter(Boolean).join("/")
        )
      );

      // события
      (region.events || []).forEach(e =>
        push(e, "event", () =>
          "/" + [countryKey, regionKey, e.districtPath, e.cityPath, "events", e.path].filter(Boolean).join("/")
        )
      );
    });
  });

  // старые аттракции (de, ru, ua)
  ["de", "ru", "ua"].forEach(langKey => {
    const langData = data[langKey];
    if (!langData) return;
    Object.keys(langData).forEach(countryKey => {
      Object.keys(langData[countryKey] || {}).forEach(regionKey => {
        (langData[countryKey][regionKey]?.attractions || []).forEach(attr =>

          pushOld(attr, "attraction", () =>
            "/" + [countryKey, regionKey, attr.districtPath, attr.cityPath, "attractions", attr.path].filter(Boolean).join("/")
          )
        );
      });
    });
  });


  return flat;
}

const TYPE_SCORE = {
  country: 100,
  region: 90,
  city: 80,
  district: 70,
  subRegion: 60,
  attraction: 50,
  event: 40,
  routes: 40
};

// -------------------------
// поиск
// -------------------------
// -------------------------
// поиск с разбиением запроса на слова
// -------------------------
export function searchStatic(query, flatIndex) {
  if (!query || !flatIndex?.length) return [];

  const queryWords = normalize(query).split(" "); // разбиваем запрос на слова

  const results = flatIndex
    .map(item => {
      if (!item?.searchText) return null;

      const itemWords = item.searchText.split(" ");
      const itemNameWords = item.searchName.split(" ");

      // проверка: каждый корень слова из запроса должен найтись хотя бы в одном слове объекта
      const matches = queryWords.every(qw =>
        itemWords.some(w => w.startsWith(qw)) ||
        itemNameWords.some(w => w.startsWith(qw)) ||
        (qw.length >= 4 && (isSimilar(qw, itemWords.join(" ")) || isSimilar(qw, itemNameWords.join(" "))))
      );

      if (!matches) return null;

      // базовый score по типу
      let score = TYPE_SCORE[item.type] || 0;

      // если аттракция, добавляем рейтинг
      if (item.type === "attraction") {
        const ratingOrder = { top: 3, popular: 2, local: 1 };
        score += ratingOrder[item.rating] || 0;
      }

      return { ...item, score };
    })
    .filter(Boolean);

  // сортировка: аттракции по рейтингу, остальные по score
  results.sort((a, b) => {
    if (a.type === "attraction" && b.type === "attraction") {
      const ratingOrder = { top: 3, popular: 2, local: 1 };
      return (ratingOrder[b.rating] || 0) - (ratingOrder[a.rating] || 0);
    }
    return b.score - a.score;
  });

  return results;
}