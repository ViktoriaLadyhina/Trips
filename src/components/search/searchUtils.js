// searchUtils.js

// -----------------------
// 1️⃣ Нормализация строки
// -----------------------
export const normalize = str => str
  .toLowerCase()
  .replace(/ё/g, "е")
  .replace(/ä/g, "a")
  .replace(/ö/g, "o")
  .replace(/ü/g, "u")
  .replace(/ß/g, "ss")
  .replace(/['’]/g, "")
  .trim();

// -----------------------
// 2️⃣ Глубокий поиск по объекту/массиву
// -----------------------
export function deepSearch(obj, predicate, path = '') {
  let results = [];

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const currentPath = `${path}[${index}]`;
      results = results.concat(deepSearch(item, predicate, currentPath));
    });
  } else if (obj !== null && typeof obj === 'object') {
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      results = results.concat(deepSearch(obj[key], predicate, currentPath));
    }
  } else {
    if (predicate(obj)) {
      results.push({ path, value: obj });
    }
  }

  return results;
}

// -----------------------
// 3️⃣ Функции для получения информации по path
// -----------------------
export function getCountryInfoByPath(path, allCountries) {
  const match = path.match(/^\[(\d+)\]/);
  if (!match) return null;

  const index = parseInt(match[1], 10);
  const countryObj = allCountries[index];
  if (!countryObj) return null;

  return {
    country: countryObj.country,
    countryPath: countryObj.path
  };
}

export function getRegionInfoByPath(path, regionsSearch) {
  const parts = path.split(".");
  if (parts.length < 2) return null;

  const countryKey = parts[0];
  const regionKey = parts[1];
  const countryObj = regionsSearch[countryKey];
  if (!countryObj) return null;

  const regionObj = countryObj[regionKey];
  if (!regionObj) return null;

  return {
    countryKey,
    region: regionKey,
    regionName: regionObj.name || regionKey,
    regionPath: regionKey
  };
}

export function getDistrictInfoByPath(path, allRegions) {
  if (!path.includes("discriptRegions")) return null;

  const parts = path.split(".");
  const countryKey = parts[0];
  const regionKey = parts[1];

  const countryObj = allRegions[countryKey];
  if (!countryObj) return null;

  const regionObj = countryObj[regionKey];
  if (!regionObj) return null;

  const matchRegion = path.match(/discriptRegions\[(\d+)\]/);
  if (!matchRegion) return null;
  const regionIndex = parseInt(matchRegion[1], 10);
  const discriptRegion = regionObj.discriptRegions[regionIndex];
  if (!discriptRegion) return null;

  const matchItem = path.match(/items\[(\d+)\]/);
  if (!matchItem) return null;
  const itemIndex = parseInt(matchItem[1], 10);
  const item = discriptRegion.items[itemIndex];
  if (!item || !item.hasInfo) return null;

  return {
    countryKey,
    regionKey,
    regionName: regionObj.name,
    districtPath: item.path,
    districtTitle: item.name || item.title,
    districtName: item.name,
    districtFullTitle: item.title,
    value: item.name || item.title
  };
}

export function getCityInfoByPath(path, allCities, value) {
  if (!path.includes("-city")) return null;

  const parts = path.split(".");
  const countryKey = parts[0];

  const regionMatch = parts.find(p => p.includes("-city"));
  if (!regionMatch) return null;

  const matchIndex = regionMatch.match(/-city\[(\d+)\]/);
  if (!matchIndex) return null;
  const cityIndex = parseInt(matchIndex[1], 10);

  const regionKey = regionMatch.replace(/\[\d+\]/, "");
  const regionPath = regionKey.replace("-city", "");

  const countryObj = allCities[countryKey];
  if (!countryObj) return null;

  const regionCities = countryObj[regionKey];
  if (!regionCities) return null;

  const city = regionCities[cityIndex];
  if (!city) return null;

  return {
    countryKey,
    regionKey,
    regionPath,
    district: city.district,
    cityPath: city.path,
    cityTitle: city.name,
    value
  };
}

export function getAttractionsInfoByPath(path, allAttractions, value) {
  if (!path.includes("-attractions")) return null;

  const parts = path.split(".");
  const countryKey = parts[0];

  const regionMatch = parts.find(p => p.includes("-attractions"));
  if (!regionMatch) return null;

  const matchIndex = regionMatch.match(/-attractions\[(\d+)\]/);
  if (!matchIndex) return null;
  const attractionsIndex = parseInt(matchIndex[1], 10);

  const regionKey = regionMatch.replace(/\[\d+\]/, "");
  const regionPath = regionKey.replace("-attractions", "");

  const countryObj = allAttractions[countryKey];
  if (!countryObj) return null;

  const regionAttractions = countryObj[regionKey];
  if (!regionAttractions) return null;

  const attraction = regionAttractions[attractionsIndex];
  if (!attraction) return null;

  return {
    countryKey,
    regionKey,
    regionPath,
    district: attraction.districtPath,
    cityPath: attraction.cityPath,
    attractionPath: attraction.path,
    attractionTitle: attraction.name,
    value
  };
}

// -----------------------
// 4️⃣ Главная функция поиска (handleSearch)
// -----------------------
export const searchAll = (value, lang, allCountries, allRegions, allCities, allAttractions) => {
  const normalizedValue = normalize(value);

  // -----------------------
  // Поиск по странам
  // -----------------------
  const resultsCountriesRaw = deepSearch(allCountries, obj =>
    typeof obj === "string" && normalize(obj).includes(normalizedValue)
  );
  const countryGroups = {};
  resultsCountriesRaw.forEach(r => {
    const countryInfo = getCountryInfoByPath(r.path, allCountries);
    if (!countryInfo) return;

    const key = countryInfo.countryPath;
    if (!countryGroups[key]) countryGroups[key] = { ...countryInfo, matches: [] };

    if (r.value && !countryGroups[key].matches.includes(r.value)) {
      countryGroups[key].matches.push(r.value);
    }
  });
  const countriesResult = Object.values(countryGroups);

  // -----------------------
  // Поиск по регионам
  // -----------------------
  const resultsRegionsRaw = deepSearch(allRegions, obj =>
    typeof obj === "string" && normalize(obj).includes(normalizedValue)
  );
  const regionGroups = {};
  resultsRegionsRaw.forEach(r => {
    const regionInfo = getRegionInfoByPath(r.path, allRegions);
    if (!regionInfo) return;

    const key = `${regionInfo.countryKey}|${regionInfo.regionPath}`;
    if (!regionGroups[key]) regionGroups[key] = { ...regionInfo, matches: [] };

    if (r.value && !regionGroups[key].matches.includes(r.value)) {
      regionGroups[key].matches.push(r.value);
    }
  });
  const regionsResult = Object.values(regionGroups);

  // -----------------------
// 3️⃣ Поиск по district/районам
// -----------------------
const resultsDistrictsRaw = resultsRegionsRaw
  .map(r => getDistrictInfoByPath(r.path, allRegions))
  .filter(d => d && d.value);

const districtGroups = {};
resultsDistrictsRaw.forEach(d => {
  const key = `${d.countryKey}|${d.regionKey}|${d.districtPath}`;
  if (!districtGroups[key]) {
    districtGroups[key] = { ...d, matches: [] };
  }

  // Добавляем объект вместо простой строки
  const matchObj = {
    text: d.districtFullTitle || d.districtTitle, // или можно добавить описание, если есть
    source: "district",
    id: d.districtPath
  };

  // Проверяем, нет ли уже такого id в matches
  if (!districtGroups[key].matches.find(m => m.id === matchObj.id)) {
    districtGroups[key].matches.push(matchObj);
  }
});

const districtsResult = Object.values(districtGroups);


  // -----------------------
  // Поиск по городам
  // -----------------------
  const resultsCitiesRaw = deepSearch(allCities, obj =>
    typeof obj === "string" && normalize(obj).includes(normalizedValue)
  );
  const cityGroups = {};
  resultsCitiesRaw.forEach(r => {
    const cityInfo = getCityInfoByPath(r.path, allCities, r.value);
    if (!cityInfo) return;

    const key = `${cityInfo.countryKey}|${cityInfo.regionKey}|${cityInfo.district}|${cityInfo.cityPath}`;
    if (!cityGroups[key]) cityGroups[key] = { ...cityInfo, matches: [] };

    if (r.value && !cityGroups[key].matches.includes(r.value)) {
      cityGroups[key].matches.push(r.value);
    }
  });
  const citiesResult = Object.values(cityGroups);

  // -----------------------
  // Поиск по достопримечательностям
  // -----------------------
  const resultsAttractionsRaw = deepSearch(allAttractions, obj =>
    typeof obj === "string" && normalize(obj).includes(normalizedValue)
  );
  const attractionGroups = {};
  resultsAttractionsRaw.forEach(r => {
    const attractionInfo = getAttractionsInfoByPath(r.path, allAttractions, r.value);
    if (!attractionInfo) return;

    const key = attractionInfo.attractionPath;
    if (!attractionGroups[key]) attractionGroups[key] = { ...attractionInfo, matches: [] };

    if (r.value && !attractionGroups[key].matches.includes(r.value)) {
      attractionGroups[key].matches.push(r.value);
    }
  });
  const attractionsResult = Object.values(attractionGroups);

  return {
    countriesResult,
    regionsResult,
    districtsResult,
    citiesResult,
    attractionsResult
  };
};
