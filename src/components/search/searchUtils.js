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

// собираем текст для поиска из name и meta.description
function getSearchText(item, lang = "ru") {
  let text = "";

  if (item.name) text += item.name + " ";
  if (item.meta?.description) text += item.meta.description + " ";

  if (item.translations?.[lang]) {
    const t = item.translations[lang];
    if (t.name) text += t.name + " ";
    if (t.meta?.description) text += t.meta.description + " ";
  }

  return normalize(text);
}

// строим индекс поиска
export function buildStaticSearchIndex(lang) {
  const idx = JSON.parse(JSON.stringify(searchIndex[lang]));

  for (const countryKey in idx) {
    const country = idx[countryKey];

    for (const regionKey in country) {
      if (regionKey === "country") continue;
      const region = country[regionKey];

      // города
      region.city?.forEach(item => {
        item.searchText = getSearchText(item, lang);
      });

      // округа
      region.districts?.forEach(item => {
        item.searchText = getSearchText(item, lang);
      });

      // субрегионы
      region.subRegions?.forEach(item => {
        item.searchText = getSearchText(item, lang);
      });

      // аттракции
      // старые аттракции
      region.attractions?.forEach(item => {
        item.searchText = getSearchText(item, lang);
      });
      // новые аттракции из отдельного объекта
      const newAttr = searchIndex.germany?.nrw?.attractions || [];
      newAttr.forEach(item => {
        // добавляем в region.newAttractions или напрямую формируем searchText
        item.searchText = getSearchText(item, lang);
        region.attractions = [...(region.attractions || []), item]; // объединяем с существующими
      });

      // события
      region.events?.forEach(item => {
        item.searchText = getSearchText(item, lang);
      });
    }
  }

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
          const title =
            attraction.translations?.[lang]?.name ||  // новый формат
            attraction.name ||                        // старый формат
            "Достопримечательность";

          results.push({
            title,
            type: "attraction",
            url: `/${attraction.countryPath}/${attraction.regionsPath}/${attraction.districtPath}/${attraction.cityPath}/attractions/${attraction.path}`
          });
        }
      });

      // мероприятия
      (region.events || []).forEach(event => {
        if (event.searchText?.includes(lowerQuery)) {
          results.push({
            title: event.name || "Событие",
            type: "event",
            url: `/${event.countryPath}/${event.regionsPath}/${event.districtPath}/${event.cityPath}/events/${event.path}`
          });
        }
      });
    }
  }

  return results;
}