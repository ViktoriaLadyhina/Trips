import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

/** * Локализация объекта */
function localizeItem(item, lang = "ru") {
  if (!item) return null;

  // Новый формат с translations
  if (item.translations && item.translations[lang]) {
    return { ...item, ...item.translations[lang] };
  }

  // Старый формат — возвращаем объект как есть, предполагаем, что он на нужном языке
  return item;
}

function useCityFullDataV2() {
  const { countryPath, regionPath, districtPath, cityPath } = useParams();
  const { lang } = useSelector(state => state.language);

  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subRegion, setSubRegion] = useState([]);
  const [parentSubRegion, setParentSubRegion] = useState(null);
  const [city, setCity] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lang) return;

    const loadData = async () => {
      try {
        const lowerCountry = countryPath?.toLowerCase();
        const lowerRegion = regionPath?.toLowerCase();

        // ================================
        // 1️⃣ Страна
        // ================================
        const modulesCountry = import.meta.glob("../datas/**/Country.js");
        let keyCountry =
          Object.keys(modulesCountry).find(path => path.toLowerCase().endsWith("/datas/country.js")) ||
          Object.keys(modulesCountry).find(path => path.toLowerCase().includes(`${lang}/country.js`));

        if (!keyCountry) throw new Error("Country data file not found");

        const countryModule = await modulesCountry[keyCountry]();
        const countries = countryModule.default;
        const foundCountry = countries.find(c => c.path === countryPath);
        if (!foundCountry) throw new Error("Country not found");
        setCountry(localizeItem(foundCountry, lang));

        // ================================
        // 2️⃣ Регион / земля
        // ================================
        const modulesLand = import.meta.glob("../datas/**/lands.js");
        let keyLand = Object.keys(modulesLand).find(path => path.toLowerCase().endsWith(`/${lang}/${lowerCountry}/lands.js`)) ||
          Object.keys(modulesLand).find(path => path.toLowerCase().endsWith(`/${lowerCountry}/lands.js`));

        if (!keyLand) throw new Error("Lands data file not found");

        const landModule = await modulesLand[keyLand]();
        const lands = landModule.default || [];
        const foundRegion = lands.find(l => l.path === regionPath);
        if (!foundRegion) throw new Error("Region not found");
        setRegion(localizeItem(foundRegion, lang));

        // ================================
        // 3️⃣ Округа
        // ================================
        const modulesDistricts = import.meta.glob("../datas/**/**-districts.js");
        let keyDistrict = Object.keys(modulesDistricts).find(path => path.toLowerCase().endsWith(`/${lang}/${lowerCountry}/${lowerRegion}-districts.js`)) ||
          Object.keys(modulesDistricts).find(path => path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-districts.js`));

        if (!keyDistrict) throw new Error("District data file not found");

        const districtModule = await modulesDistricts[keyDistrict]();
        const districts = districtModule.default || [];
        let foundDistrict = null;
        if (districtPath) {
          foundDistrict = districts.find(d => d.path === districtPath);
          if (!foundDistrict) throw new Error("District not found");
        }
        setDistrict(localizeItem(foundDistrict, lang));

        // ================================
        // 4️⃣ Сабрегионы
        // ================================
        const modulesSubRegions = import.meta.glob("../datas/**/**-subRegions.js");
        let keySubRegions = Object.keys(modulesSubRegions).find(path => path.toLowerCase().endsWith(`/${lang}/${lowerCountry}/${lowerRegion}-subregions.js`)) ||
          Object.keys(modulesSubRegions).find(path => path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-subregions.js`));

        let subRegions = [];
        if (keySubRegions && foundDistrict) {
          const subModule = await modulesSubRegions[keySubRegions]();
          const allSubRegions = subModule.default || [];
          subRegions = allSubRegions
            .filter(sr => sr.districtPath === foundDistrict.path)
            .map(sr => localizeItem(sr, lang));
        }
        setSubRegion(subRegions);

        // ================================
        // 5️⃣ Города
        // ================================
        let foundCity = null;

        if (cityPath) {
          try {
            const modulesCities = import.meta.glob("../datas/**/**-city.js");

            let keyCity = Object.keys(modulesCities).find(path => path.toLowerCase().endsWith(`/${lang}/${lowerCountry}/${lowerRegion}-city.js`)) ||
              Object.keys(modulesCities).find(path => path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-city.js`));

            if (keyCity) {
              const cityModule = await modulesCities[keyCity]();
              const cities = cityModule.default || [];

              foundCity = cities.find(c => c.path === cityPath && (!districtPath || c.districtPath === districtPath));

              if (!foundCity) { console.warn(`City not found: ${cityPath} in district ${districtPath}`); }
            } else { console.warn("City file not found:", { lang, countryPath, regionPath }); }
          } catch (err) { console.error("Ошибка загрузки городов:", err.message); }
        }

        setCity(localizeItem(foundCity, lang));

        const parent =
          foundCity && subRegions.length
            ? subRegions.find(sr => sr.path === foundCity.subRegionPath)
            : null;

        setParentSubRegion(parent || null);

        // ================================
        // 6️⃣ Достопримечательности
        // ================================
        let allAttractions = [];

        try {
          const modulesAttractions = import.meta.glob('../datas/**/**-attractions.js');
          const paths = Object.keys(modulesAttractions);

          const target = `${lowerCountry}/${lowerRegion}-attractions.js`;

          // Находим подходящие файлы
          const matchedPaths = paths.filter(path => {
            const lowerPath = path.toLowerCase();

            // 1️⃣ Старый формат с языком — только нужный язык
            if (lowerPath.includes(`/${lang}/${target}`)) return true;

            // 2️⃣ Новый формат без языка (с translations)
            if (lowerPath.endsWith(`/${target}`) && !lowerPath.includes('/ru/') && !lowerPath.includes('/de/') && !lowerPath.includes('/ua/')) return true;

            return false;
          });

          for (const path of matchedPaths) {
            const module = await modulesAttractions[path]();
            const data = module.default || [];

            // Фильтруем объекты, которые реально соответствуют нужному языку
            const attractions = data
              .map(a => localizeItem(a, lang))
              .filter(Boolean); // убираем null, если язык не найден

            allAttractions.push(...attractions);
          }

          if (allAttractions.length === 0) {
            console.warn("Attractions files found, но данных нет:", matchedPaths);
          }

        } catch (err) {
          console.error("Ошибка загрузки достопримечательностей:", err);
        }

        setAttractions(allAttractions);

        // ================================
        // 7️⃣ События
        // ================================
        let allEvents = [];
        try {
          const modulesEvents = import.meta.glob('../datas/**/**-events.js');
          let keyEvent =
            Object.keys(modulesEvents).find(path =>
              path.toLowerCase().includes(`/${lowerCountry}/${lowerRegion}-events.js`)
            ) ||
            Object.keys(modulesEvents).find(path =>
              path.toLowerCase().includes(`${lang}/${lowerCountry}/${lowerRegion}-events.js`)
            );

          if (keyEvent) {
            const module = await modulesEvents[keyEvent]();
            allEvents = (module.default || []).map(e => localizeItem(e, lang));
          } else {
            console.warn("Events file not found:", { lang, countryPath, regionPath });
          }
        } catch (err) {
          console.error("Ошибка загрузки событий:", err);
        }
        setEvents(allEvents);

        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    loadData();
  }, [lang, countryPath, regionPath, districtPath, cityPath]);
  // console.log("attractions из хука", attractions);


  return { lang, country, region, district, subRegion, parentSubRegion, city, attractions, events, error };
}

export default useCityFullDataV2;