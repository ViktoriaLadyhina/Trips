import searchIndex from './index'

// -------------------------
// нормализация текста
// -------------------------
export const normalize = str => str
  .toLowerCase()
  .replace(/<[^>]*>/g, "")
  .replace(/ё/g, "е")
  .replace(/ä/g, "a")
  .replace(/ö/g, "o")
  .replace(/ü/g, "u")
  .replace(/ß/g, "ss")
  .replace(/['’]/g, "")
  .trim();

// -------------------------
// сбор текста для поиска
// -------------------------
function getSearchText(item, lang = "ru") {
  let text = "";

  if (item.name) text += item.name + " ";
  if (item.meta?.description) text += item.meta.description + " ";

  if (item.translations?.[lang]) {
    const t = item.translations[lang];
    if (t.name) text += t.name + " ";
    if (item.title) text += item.title + " ";
    if (t.meta?.description) text += t.meta.description + " ";
  }

  return normalize(text);
}

// -------------------------
// строим индекс поиска
// -------------------------
export function buildStaticSearchIndex(lang) {
  // исходный индекс для регионов и аттракций
  const idx = JSON.parse(JSON.stringify(searchIndex[lang]));

  // отдельный индекс для стран – новый формат
  const countriesIdx = JSON.parse(JSON.stringify(searchIndex.country));
  Object.values(countriesIdx).forEach(country => {
    const t = country.translations?.[lang];
    country.searchText = getSearchText({
      name: t?.country || country.id,
      meta: { description: t?.desc || "" }
    });
  });
  idx.country = countriesIdx;

  // -------------------------
  // создаём searchText для регионов, городов, округов, субрегионов, аттракций и событий
  // -------------------------
  for (const countryKey in idx) {
    if (countryKey === "country") continue;

    const countryRegions = idx[countryKey];

    // создаём searchText для land (если есть)
    countryRegions.land?.forEach(item => {
      item.searchText = getSearchText(item, lang);
    });

    for (const regionKey in countryRegions) {
      if (regionKey === "land") continue; // пропускаем массив land

      const region = countryRegions[regionKey];

      // создаём searchText для самого региона, города, округа, субрегионы
      region.searchText = getSearchText(region, lang);
      region.city?.forEach(item => { item.searchText = getSearchText(item, lang)});
      region.districts?.forEach(item => { item.searchText = getSearchText(item, lang)});
      region.subRegions?.forEach(item => {item.searchText = getSearchText(item, lang)});

      // старые аттракции
      region.attractions?.forEach(item => {item.searchText = getSearchText(item, lang)});

      // новые аттракции для germany/nrw из общего объекта (новый формат)
      if (countryKey === "germany" && regionKey === "nrw") {
        // берём новые аттракции вне языковой папки
        const newAttr = JSON.parse(JSON.stringify(searchIndex.germany.nrw.attractions || []));

        // создаём searchText для новых аттракций
        const prepared = newAttr.map(item => ({
          ...item,
          searchText: getSearchText(item, lang)
        }));

        region.attractions = [...(region.attractions || []), ...prepared];
      }

      // события
      region.events?.forEach(item => {item.searchText = getSearchText(item, lang)});
    }
  }

  return idx;
}

// -------------------------
// поиск по индексу
// -------------------------
export function searchStatic(query, lang, index) {
  if (!query || !index) return [];

  const lowerQuery = normalize(query);
  const results = [];

  // -------------------------
  // поиск по странам
  // -------------------------
  Object.values(index.country || {}).forEach(country => {
    if (country.searchText?.includes(lowerQuery)) {
      results.push({
        title: country.translations?.[lang]?.country || country.id,
        type: "country",
        url: `/${country.path}`
      });
    }
  });

  // -------------------------
  // поиск по регионам и всем объектам внутри
  // -------------------------
  for (const countryKey in index) {
    if (countryKey === "country") continue;

    const countryRegions = index[countryKey];

    // проверка land (старый формат)
    countryRegions.land?.forEach(land => {
      if (land.searchText?.includes(lowerQuery)) {
        results.push({
          title: land.name || land.title || "Land",
          type: "region",
          url: `/${countryKey}/${land.path || land.id}`
        });
      }
    });

    for (const regionKey in countryRegions) {
      if (regionKey === "land") continue; // пропускаем массив land

      const region = countryRegions[regionKey];

      // регион
      if (region.searchText?.includes(lowerQuery)) {
        results.push({
          title: region.translations?.[lang]?.name || region.name || regionKey,
          type: "region",
          url: `/${countryKey}/${regionKey}`
        });
      }

      // города
      (region.city || []).forEach(city => {
        if (city.searchText?.includes(lowerQuery)) {
          const cityUrl = city.districtPath
            ? `/${countryKey}/${regionKey}/${city.districtPath}/${city.path}`
            : `/${countryKey}/${regionKey}/city/${city.path}`;

          results.push({
            title: city.name || city.title,
            type: "city",
            url: cityUrl
          });
        }
      });

      // округа
      (region.districts || []).forEach(district => {
        if (district.searchText?.includes(lowerQuery)) {
          results.push({
            title: district.title || district.name,
            type: "district",
            url: `/${countryKey}/${regionKey}/${district.path}`
          });
        }
      });      
      

      // субрегионы
      (region.subRegions || []).forEach(sub => {
        if (sub.searchText?.includes(lowerQuery)) {
          results.push({
            title: sub.title || sub.name,
            type: "subRegions",
            url: `/${countryKey}/${regionKey}/${sub.districtPath || sub.path}`
          });
        }
      });

      // аттракции
      (region.attractions || []).forEach(attr => {
        if (attr.searchText?.includes(lowerQuery)) {
          results.push({
            title: attr.translations?.[lang]?.name || attr.name || "Достопримечательность",
            type: "attraction",
            url: `/${attr.countryPath || countryKey}/${attr.regionsPath || regionKey}/${attr.districtPath || ""}/${attr.cityPath || ""}/attractions/${attr.path}`
          });
        }
      });

      // события
      (region.events || []).forEach(event => {
        if (event.searchText?.includes(lowerQuery)) {
          results.push({
            title: event.name || "Событие",
            type: "event",
            url: `/${event.countryPath || countryKey}/${event.regionsPath || regionKey}/${event.districtPath || ""}/${event.cityPath || ""}/events/${event.path}`
          });
        }
      });
    }
  }

  return results;
}