import searchIndex from './index'

// Рекурсивное извлечение текста из объекта
function extractText(obj) {
  if (!obj) return '';
  let result = '';

  if (typeof obj === 'string') return obj + ' ';
  if (Array.isArray(obj)) {
    obj.forEach(i => { result += extractText(i); });
    return result;
  }
  if (typeof obj === 'object') {
    if (obj.text) result += obj.text + ' ';
    if (obj.bold) result += obj.bold + ' ';
    Object.values(obj).forEach(v => {
      if (v !== obj.text && v !== obj.bold) result += extractText(v);
    });
  }
  return result;
}

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

// основной поиск
export function searchStructure({ lang = 'ru', query = '', country = null, region = null, type = null }) {
  if (!query) return [];

  const results = [];
  const langData = searchIndex[lang];
  if (!langData) return results;

  const normalizedQuery = normalize(query);

  const countriesToSearch = country ? { [country]: langData[country] } : langData;

  function searchObj(obj, path = []) {
    if (!obj) return;

    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        searchObj(item, [...path, index]);
      });
    } else if (typeof obj === 'object') {
      const text = normalize(extractText(obj));
      if (text.includes(normalizedQuery)) {
        results.push({ path, item: obj });
      }

      Object.entries(obj).forEach(([key, value]) => {
        searchObj(value, [...path, key]);
      });
    }
  }

  for (const cKey in countriesToSearch) {
    const countryData = countriesToSearch[cKey];
    if (!countryData) continue;

    if (region) {
      const regionData = countryData[region];
      if (!regionData) continue;

      if (type && regionData[type]) {
        searchObj(regionData[type], [lang, cKey, region, type]);
      } else {
        searchObj(regionData, [lang, cKey, region]);
      }
    } else {
      searchObj(countryData, [lang, cKey]);
    }
  }

  return results;
}