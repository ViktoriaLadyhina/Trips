import { searchStructure } from './structure';

// функция для подгрузки данных по региону и типу
async function loadData(lang, country, region, type) {
  try {
    const moduleName = `${region}${type === "region" ? "" : `-${type}`}.js`;
    const data = await import(`../../datas/${lang}/${country}/${moduleName}`);
    return data.default || data;
  } catch (err) {
    return [];
  }
}

function normalize(str) {
  return str
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") || "";
}

function extractText(obj) {
  if (!obj) return "";
  let result = "";

  if (typeof obj === "string") {
    return obj + " ";
  }

  if (Array.isArray(obj)) {
    obj.forEach(item => {
      result += extractText(item);
    });
    return result;
  }

  if (typeof obj === "object") {
    if (obj.text) result += obj.text + " ";
    if (obj.bold) result += obj.bold + " ";

    Object.values(obj).forEach(value => {
      if (value !== obj.text && value !== obj.bold) {
        result += extractText(value);
      }
    });
  }

  return result;
}

//формируем единый объект для поиска
export async function buildSearchIndex(lang = 'ru') {
  const index = {};

  for (const country in searchStructure) {
    index[country] = {};

    for (const region of searchStructure[country]) {

      const regionData = await loadData(lang, country, region, "region");
      const cities = await loadData(lang, country, region, "city");
      const attractions = await loadData(lang, country, region, "attractions");
      const districts = await loadData(lang, country, region, "districts");
      const subRegions = await loadData(lang, country, region, "subRegions");
      const events = await loadData(lang, country, region, "events");

      // создаём searchText для всех объектов
      [regionData, cities, attractions, districts, subRegions, events].forEach(objOrArr => {
        if (Array.isArray(objOrArr)) {
          objOrArr.forEach(obj => {
            obj.searchText = normalize(extractText(obj));
          });
        } else if (objOrArr) {
          objOrArr.searchText = normalize(extractText(objOrArr));
        }
      });

      index[country][region] = {
        regionData,
        cities,
        attractions,
        districts,
        subRegions,
        events
      };
    }
  }

  return index;
}


export function searchAll(query, lang, index) {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  const results = [];

  for (const countryKey in index) {
    const countryObj = { name: countryKey, path: countryKey, type: "country" };

    // Поиск по стране
    if (countryObj.name.toLowerCase().includes(lowerQuery)) {
      results.push({
        title: countryObj.name,
        type: "country",
        url: `/${countryObj.path}`,
        matches: [countryObj.name]
      });
    }

    for (const regionKey in index[countryKey]) {
      const region = index[countryKey][regionKey];

      // --------------------
      // Поиск по региону
      const regionSearchText = region.regionData?.searchText || "";
      if (regionSearchText.includes(normalize(query))) {
        results.push({
          title: region.regionData?.name || regionKey,
          type: "region",
          url: `/${countryKey}/${regionKey}`,
        });
      }

      // города
      (region.cities || []).forEach(city => {
        if (city.searchText?.includes(normalize(query))) {
          // формируем правильный URL
          const cityUrl = city.districtPath
            ? `/${countryKey}/${regionKey}/${city.districtPath}/${city.path}` // города в округах
            : `/${countryKey}/${regionKey}/city/${city.path}`;               // города областного значения

          results.push({
            title: city.name || city.title,
            type: "city",
            url: cityUrl,
          });
        }
      });

      // округа
      (region.districts || []).forEach(district => {
        if (district.searchText?.includes(normalize(query))) {
          results.push({
            title: district.name || district.title,
            type: "district",
            url: `/${countryKey}/${regionKey}/${district.path}`,
          });
        }
      });

      // сабрегионы
      (region.subRegions || []).forEach(sub => {
        if (sub.searchText?.includes(normalize(query))) {
          results.push({
            title: sub.name || sub.title,
            type: "district",
            url: `/${countryKey}/${regionKey}/${sub.districtPath}`,
          });
        }
      });

      // достопримечательности
      (region.attractions || []).forEach(attraction => {
        if (attraction.searchText?.includes(normalize(query))) {
          results.push({
            title: attraction.name || "Достопримечательность",
            type: "attraction",
            url: `/${countryKey}/${regionKey}/${attraction.districtPath}/${attraction.cityPath}/attractions/${attraction.path}`,
          });
        }
      });

      // мероприятия
      (region.events || []).forEach(attraction => {
        if (attraction.searchText?.includes(normalize(query))) {
          results.push({
            title: attraction.name || "Достопримечательность",
            type: "attraction",
            url: `/${countryKey}/${regionKey}/${attraction.districtPath}/${attraction.cityPath}/events/${attraction.path}`,
          });
        }
      });
    }
  }

  return results;
}