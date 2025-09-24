import { useSelector } from "react-redux";

import { regions as ruRegions } from "../datas/ru";
import { regions as uaRegions } from "../datas/ua";
import { regions as deRegions } from "../datas/de";

// Универсальный поиск
function deepSearchAll(obj, query, lang, countryPath, results = [], context = {}) {
  if (!obj || typeof obj !== "object") return results;

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const value = obj[key];

    // 1. Если нашли строку с совпадением
    if (typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())) {
      results.push({
        country: context.countryName || null,
        region: context.regionName || null,
        district: context.districtName || null,
        city: context.cityName || null,
        value,
        // Собираем линк для навигации
        link: [
          "", // чтобы начиналось с "/"
          lang,
          countryPath,
          context.regionPath,
          context.districtPath,
          context.cityPath
        ]
          .filter(Boolean) // убираем пустые
          .join("/"),
      });
    }

    // 2. Если массив
    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        deepSearchAll(item, query, lang, countryPath, results, context);
      });
    }

    // 3. Если объект
    if (typeof value === "object") {
      const newContext = { ...context };

      // сохраняем "человеческие" названия, если они есть
      if (value.countryName) {
        newContext.countryName = value.countryName;
        newContext.regionPath = key;
      }
      if (value.regionName) {
        newContext.regionName = value.regionName;
        newContext.regionPath = value.path || key;
      }
      if (value.districtName) {
        newContext.districtName = value.districtName;
        newContext.districtPath = value.path || key;
      }
      if (value.cityName) {
        newContext.cityName = value.cityName;
        newContext.cityPath = value.path || key;
      }

      deepSearchAll(value, query, lang, countryPath, results, newContext);
    }
  }

  return results;
}

export function useSearchRegions() {
  const { lang } = useSelector((state) => state.language);

  const allRegions =
    lang === "ua" ? uaRegions :
    lang === "de" ? deRegions :
    ruRegions;

  function search(query) {
    if (!query) return [];
    const results = [];

    for (const countryPath in allRegions) {
      deepSearchAll(allRegions[countryPath], query, lang, countryPath, results, {
        countryName: allRegions[countryPath].countryName,
      });
    }

    return results;
  }

  return { search };
}