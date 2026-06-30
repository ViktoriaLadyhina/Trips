export function adaptItem(item, lang) {
  if (!item) return null;

  const base = {
    id: item.id,

    name: "",
    description: "",
    keywords: "",

    path: item.path,
    rating: item.rating || null,

    countryPath: item.countryPath,
    regionPath: item.regionPath,
    districtPath: item.districtPath,
    cityPath: item.cityPath,
  };

  // 1. NEW FORMAT (translations)
  if (item.translations) {
    const t = item.translations?.[lang] || {};

    return {
      ...base,
      name: t.name || item.name,
      description: t.meta?.description || "",
      keywords: t.meta?.keywords || "",
    };
  }

  // 2. OLD FORMAT (langKey objects)
  if (item[lang]) {
    return {
      ...base,
      name: item[lang]?.name || item.name,
      description: item[lang]?.meta?.description || "",
      keywords: item[lang]?.meta?.keywords || "",
    };
  }
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

// плоский индекс для поиска
export async function buildSearchIndex(searchIndex, lang) {
  const flat = [];
  const used = new Set();

  function push(item, type) {
    const base = adaptItem(item, lang);
    if (!base) return;

    const key = `${type}_${base.id || base.path}`;
    if (used.has(key)) return;
    used.add(key);

    const searchText = getSearchText(item, lang);

    flat.push({
      ...base,
      type,
      searchText
    });
  }

  async function walk(obj) {
    for (const value of Object.values(obj)) {

      // 1. loader-узел
      if (value?.loaders) {
        const items = await value.loaders();

        if (Array.isArray(items)) {
          items.forEach(item =>
            push(item, value.type)
          );
        }

        continue;
      }

      // 2. вложенный объект
      if (value && typeof value === "object") {
        await walk(value);
      }
    }
  }

  await walk(searchIndex);

  return flat;
}

// поиск
export function searchStatic(query, flatIndex) {
  if (!query || !flatIndex?.length) return [];

  const queryWords = normalize(query)
    .split(" ")
    .filter(Boolean);

  const results = [];

  for (const item of flatIndex) {
    if (!item) continue;

    const text = item.searchText || "";
    if (!text) continue;

    const itemWords = text.split(" ");

    // 1. проверка совпадения
    const matches = queryWords.every(qw => {
      if (!qw) return false;

      return itemWords.some(w => w.startsWith(qw));
    });

    if (!matches) continue;

    // 2. базовый скор
    let score = 0;

    // приоритет по типу (ВАЖНО: type должен приходить из searchIndex context)
    const TYPE_SCORE = {
      country: 100,
      region: 90,
      city: 80,
      district: 70,
      attraction: 50,
      event: 40,
      routes: 30
    };

    score += TYPE_SCORE[item.type] || 0;

    // 3. усиление за совпадение в названии
    const name = (item.name || "").toLowerCase();
    const normalizedQuery = normalize(query);

    if (name.includes(normalizedQuery)) {
      score += 20;
    }

    // 4. бонус за точное совпадение слова
    for (const qw of queryWords) {
      if (itemWords.includes(qw)) {
        score += 5;
      }
    }

    results.push({
      ...item,
      score
    });
  }

  return results.sort((a, b) => b.score - a.score);
}