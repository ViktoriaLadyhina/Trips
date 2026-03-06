import searchIndex from './index'

// нормализация текста
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

// Рекурсивное извлечение текста из объекта
function extractText(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj + " ";
  if (Array.isArray(obj)) return obj.map(extractText).join(" ");
  if (typeof obj === "object") return Object.values(obj).map(extractText).join(" ");
  return "";
}

// добавляем searchText для всех объектов
export function buildStaticSearchIndex(lang = "ru") {
  const idx = JSON.parse(JSON.stringify(searchIndex[lang]));

  function addSearchText(node) {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(item => item.searchText = normalize(extractText(item)));
    } else if (typeof node === "object") {
      Object.values(node).forEach(v => addSearchText(v));
      node.searchText = normalize(extractText(node));
    }
  }

  addSearchText(idx);
  return idx;
}

// поиск по конкретному индексу
export function searchStatic(query, lang, index) {
  if (!query || !index) return [];
  const lowerQuery = normalize(query);
  const results = [];

  for (const countryKey in index) {
    const country = index[countryKey];

    // поиск по стране
    if (country.country?.searchText?.includes(lowerQuery)) {
      results.push({
        title: country.country.name || countryKey,
        type: "country",
        url: `/${countryKey}`
      });
    }

    for (const regionKey in country) {
      if (regionKey === "country") continue;
      const region = country[regionKey];

      // регион
      if (region.land?.searchText?.includes(lowerQuery)) {
        results.push({
          title: region.land.name || regionKey,
          type: "region",
          url: `/${countryKey}/${regionKey}`
        });
      }

      // города
      (region.city || []).forEach(city => {
        if (city.searchText?.includes(lowerQuery)) {
          const cityUrl = city.districtPath
            ? `/${countryKey}/${regionKey}/${city.districtPath}/${city.path}` // города в округах
            : `/${countryKey}/${regionKey}/city/${city.path}`;               // города областного значения

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
            title: district.name || district.title,
            type: "district",
            url: `/${countryKey}/${regionKey}/${district.path}`
          });
        }
      });

      // субрегионы
      (region.subRegions || []).forEach(sub => {
        if (sub.searchText?.includes(lowerQuery)) {
          results.push({
            title: sub.name || sub.title,
            type: "district",
            url: `/${countryKey}/${regionKey}/${sub.districtPath}`
          });
        }
      });

      // достопримечательности
      (region.attractions || []).forEach(attraction => {
        if (attraction.searchText?.includes(lowerQuery)) {
          results.push({
            title: attraction.name || "Достопримечательность",
            type: "attraction",
            url: `/${countryKey}/${regionKey}/${attraction.districtPath}/${attraction.cityPath}/attractions/${attraction.path}`
          });
        }
      });

      // мероприятия
      (region.events || []).forEach(event => {
        if (event.searchText?.includes(lowerQuery)) {
          results.push({
            title: event.name || "Событие",
            type: "event",
            url: `/${countryKey}/${regionKey}/${event.districtPath}/${event.cityPath}/events/${event.path}`
          });
        }
      });
    }
  }

  return results;
}