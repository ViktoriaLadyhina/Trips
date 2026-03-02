import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

/**
 * Хук для загрузки полной информации о городе/районе/регионе/стране.
 * Структура данных:
 * - Все страны в одном файле Country.js
 * - Все земли (например Германия) в land.js
 * - На каждом уровне объекты имеют уникальный path
 */
function useCityFullData() {
  // Параметры из URL
  const { countryPath, regionPath, districtPath, cityPath, attractionsPath } = useParams();

  // Язык из Redux
  const { lang } = useSelector(state => state.language);

  // Состояния для разных уровней
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subRegion, setsubRegion] = useState(null);
  const [parentSubRegion, setParentSubRegion] = useState(null);
  const [city, setCity] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lang) return; // Если язык не выбран, не делаем ничего

    const loadData = async () => {
      try {
        // =============================
        // 1️⃣ Загружаем все страны
        // =============================
        // import.meta.glob ищет все файлы Country.js в папках langs (ua, de, ru и т.д.)
        const modulesCountry = import.meta.glob("../datas/*/Country.js");

        // Находим файл для текущего языка
        const keyCountry = Object.keys(modulesCountry).find(path =>
          path.includes(`${lang}/Country.js`)
        );
        if (!keyCountry) throw new Error("Country data file not found");

        // Загружаем модуль страны
        const countryModule = await modulesCountry[keyCountry]();
        const countries = countryModule.datas;

        // Находим страну по path
        const foundCountry = countries.find(c => c.path === countryPath);
        if (!foundCountry) throw new Error("Country not found");
        setCountry(foundCountry);

        // =============================
        // 2️⃣ Загружаем регион / землю
        // =============================
        const modulesLand = import.meta.glob("../datas/*/*/lands.js");

        const keyLand = Object.keys(modulesLand).find(path =>
          path.includes(`${lang}/${countryPath}/lands.js`)
        );
        if (!keyLand) throw new Error("Lands data file not found");

        const landModule = await modulesLand[keyLand]();

        const lands = landModule.default || [];
        const foundRegion = lands.find(l => l.path === regionPath);
        if (!foundRegion) throw new Error("Region not found");
        setRegion(foundRegion);

        // =============================
        // 3️⃣ Находим district (если есть)
        // =============================
        let foundDistrict = null;

        if (districtPath) {
          const modulesDistricts = import.meta.glob("../datas/*/*/*-districts.js");
          const keyDistricts = Object.keys(modulesDistricts).find(path =>
            path.includes(`${lang}/${countryPath}/${regionPath}-districts.js`)
          );

          if (!keyDistricts) throw new Error("District data file not found");

          const districtModule = await modulesDistricts[keyDistricts]();
          const districts = districtModule.default || [];

          foundDistrict = districts.find(d => d.path === districtPath);

          if (!foundDistrict) throw new Error("District not found");
        }
        setDistrict(foundDistrict);

        // =============================
        // 3️⃣ Находим sub-regions (если есть)
        // =============================
        let subRegions = [];

        if (foundDistrict) {
          const modulesSubRegions = import.meta.glob("../datas/*/*/*-subRegions.js");
          const keySubRegions = Object.keys(modulesSubRegions).find(path =>
            path.includes(`${lang}/${countryPath}/${regionPath}-subRegions.js`)
          );

          if (keySubRegions) {
            const subRegionModule = await modulesSubRegions[keySubRegions]();
            const allSubRegions = subRegionModule.default || [];

            subRegions = allSubRegions.filter(
              sr => sr.districtPath === foundDistrict.path
            );
          }
        }

        setsubRegion(subRegions);

        // =============================
        // 4️⃣ Находим город (если есть)
        // =============================
        let foundCity = null;

        if (cityPath) {
          try {
            const cityModule = await import(`../datas/${lang}/${countryPath}/${regionPath}-city.js`);
            const cities = cityModule.default || [];

            foundCity = cities.find(c => c.path === cityPath && c.districtPath === districtPath);

            if (!foundCity) {
              console.warn(`City not found: ${cityPath} в district ${districtPath}`);
            }
          } catch (err) {
            console.error(`Ошибка при загрузке городов: ${err.message}`);
          }
        }
        const fountparentSubRegion = subRegions.find(sr => sr.path === foundCity?.subRegionPath) || null;

        setCity(foundCity);
        setParentSubRegion(fountparentSubRegion)

        // =============================
        // 6️⃣ Загружаем достопримечательности
        // =============================
        let allAttractions = [];

        try {
          const attrModule = await import(`../datas/${lang}/${countryPath}/${regionPath}-attractions.js`);
          allAttractions = attrModule.default || [];
        } catch (err) {
          console.error(`Ошибка при загрузке достопримечательностей: ${err.message}`);
        }

        setAttractions(allAttractions);

        // =============================
        // 7️⃣ Загружаем события
        // =============================
        let allEvents = [];

        try {
          const eventsModule = await import(`../datas/${lang}/${countryPath}/${regionPath}-events.js`);
          allEvents = eventsModule.default || [];
        } catch (err) {
          console.error(`Ошибка при загрузке мероприятий: ${err.message}`);
        }

        setEvents(allEvents);

// Всё прошло успешно
        setError(null); 
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    loadData();
  }, [lang, countryPath, regionPath, districtPath, cityPath, attractionsPath]);

  // Возвращаем все данные, чтобы компонент мог их использовать
  return { lang, country, region, district, subRegion, parentSubRegion, city, attractions, events, error };
}

export default useCityFullData;