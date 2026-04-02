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
// универсальная сборка текста для поиска
// -------------------------
function getSearchText(item, lang = "ru") {
  let text = "";

  if (item.name) text += item.name + " ";
  if (item.title) text += item.title + " ";
  if (item.meta?.description) text += item.meta.description + " ";

  const t = item.translations?.[lang];
  if (t) {
    if (t.name) text += t.name + " ";
    if (t.title) text += t.title + " ";
    if (t.meta?.description) text += t.meta.description + " ";
  }

  return normalize(text);
}

// -------------------------
// строим индекс поиска
// -------------------------
export function buildStaticSearchIndex(lang) {
  // полная копия searchIndex
  const idx = JSON.parse(JSON.stringify(searchIndex));

  // -------------------------
  // страны и land (новый формат)
  // -------------------------
  Object.values(idx.country || {}).forEach(country => {
    country.searchText = getSearchText(country, lang);
  });

  // land для каждой страны
Object.keys(searchIndex).forEach(countryKey => {
  const lands = searchIndex[countryKey]?.land;
  if (lands) {
    lands.forEach(land => {
      land.searchText = getSearchText(land, lang);
    });
  }

  // -------------------------
  // города, округа, субрегионы, аттракции и события
  // -------------------------
  for (const countryKey in idx[lang]) {
    const countryRegions = idx[lang][countryKey];

    // остальные регионы
    for (const regionKey in countryRegions) {
      if (regionKey === "land") continue;

      const region = countryRegions[regionKey];
      region.searchText = getSearchText(region, lang);

      // города
      (region.city || []).forEach(city => {
        city.searchText = getSearchText(city, lang);
      });

      // округа
      (region.districts || []).forEach(d => {
        d.searchText = getSearchText(d, lang);
      });

      // субрегионы
      (region.subRegions || []).forEach(s => {
        s.searchText = getSearchText(s, lang);
      });

      // -------------------------
      // аттракции - объединяем старые и новые (для germany/nrw)
      // -------------------------
      const oldAttractions = region.attractions || [];
      oldAttractions.forEach(a => { a.searchText = getSearchText(a, lang); });

      let newAttractions = [];
      if (countryKey === "germany" && regionKey === "nrw") {
        const rawNew = searchIndex.germany.nrw.attractions || [];
        const existingPaths = new Set(oldAttractions.map(a => a.path));

        newAttractions = rawNew
          .filter(a => !existingPaths.has(a.path))
          .map(a => ({ ...a, searchText: getSearchText(a, lang) }));
      }

      region.attractions = [...oldAttractions, ...newAttractions];

      // события
      (region.events || []).forEach(e => {
        e.searchText = getSearchText(e, lang);
      });
    }
  }
});

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
for (const countryKey in searchIndex[lang]) {
  const countryRegions = searchIndex[lang][countryKey];
  if (!countryRegions) continue; 

    // проверка land (старый формат)
    countryRegions.land?.forEach(land => {
      if (land.searchText?.includes(lowerQuery)) {
        results.push({
          title: land.translations?.[lang]?.name || land.name || land.title || "Land",
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
console.log("Search results:", results);

  return results;
}