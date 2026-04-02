import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ браузерный вариант
import { useSelector } from "react-redux";

/** Локализация объекта */
function localizeItem(item, lang = "ru") {
  if (!item) return null;

  if (item.translations && item.translations[lang]) {
    return { ...item, ...item.translations[lang] };
  }

  return item;
}

function useCityFullDataV2() {
  const { countryPath, regionPath, districtPath, cityPath } = useParams();
  const { lang } = useSelector((state) => state.language);

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

        // ================================ 1️⃣ Страна
        const countriesModule = await import("../datas/country.js");
        const countries = countriesModule.default || [];
        const foundCountry = countries.find((c) => c.path === countryPath);
        if (!foundCountry) throw new Error("Country not found");
        setCountry(localizeItem(foundCountry, lang));

                
        // ================================ 3️⃣ Регион / земля
        const modulesLand = import.meta.glob("../datas/**/lands.js");
        let keyLand = Object.keys(modulesLand).find(path => path.toLowerCase().endsWith(`/${lang}/${lowerCountry}/lands.js`)) ||
          Object.keys(modulesLand).find(path => path.toLowerCase().endsWith(`/${lowerCountry}/lands.js`));

        if (!keyLand) throw new Error("Lands data file not found");

        const landModule = await modulesLand[keyLand]();
        const lands = landModule.default || [];
        const foundRegion = lands.find(l => l.path === regionPath);
        if (!foundRegion) throw new Error("Region not found");
        setRegion(localizeItem(foundRegion, lang));


        // ================================ 4️⃣ Округа
        const modulesDistricts = import.meta.glob("../datas/**/**-districts.js");
        const keyDistrict =
          Object.keys(modulesDistricts).find((path) =>
            path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-districts.js`)
          ) || null;

        const districtsModule = keyDistrict ? await modulesDistricts[keyDistrict]() : null;
        const districts = districtsModule?.default || [];
        let foundDistrict = null;
        if (districtPath) {
          foundDistrict = districts.find((d) => d.path === districtPath);
        }
        setDistrict(localizeItem(foundDistrict, lang));

        // ================================ 5️⃣ Сабрегионы
        const modulesSubRegions = import.meta.glob("../datas/**/**-subRegions.js");
        const keySubRegions =
          Object.keys(modulesSubRegions).find((path) =>
            path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-subregions.js`)
          ) || null;

        const subRegionsModule = keySubRegions ? await modulesSubRegions[keySubRegions]() : null;
        const subRegions = subRegionsModule?.default || [];
        const filteredSubRegions =
          foundDistrict
            ? subRegions.filter((sr) => sr.districtPath === foundDistrict.path).map((sr) => localizeItem(sr, lang))
            : [];
        setSubRegion(filteredSubRegions);

        // ================================ 6️⃣ Города
        let foundCity = null;
        if (cityPath) {
          const modulesCities = import.meta.glob("../datas/**/**-city.js");
          const keyCity =
            Object.keys(modulesCities).find((path) =>
              path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-city.js`)
            ) || null;

          if (keyCity) {
            const citiesModule = await modulesCities[keyCity]();
            const cities = citiesModule.default || [];
            foundCity = cities.find(
              (c) => c.path === cityPath && (!districtPath || c.districtPath === districtPath)
            );
          }
        }

        setCity(localizeItem(foundCity, lang));

        const parent = foundCity
          ? filteredSubRegions.find((sr) => sr.path === foundCity.subRegionPath) || null
          : null;
        setParentSubRegion(parent);

        // ================================ 7️⃣ Достопримечательности
        const modulesAttractions = import.meta.glob("../datas/**/**-attractions.js");
        const pathsAttractions = Object.keys(modulesAttractions);

        const matchedAttractionsPaths = pathsAttractions.filter((path) =>
          path.toLowerCase().includes(`/${lowerCountry}/${lowerRegion}-attractions.js`)
        );

        let allAttractions = [];
        for (const path of matchedAttractionsPaths) {
          const module = await modulesAttractions[path]();
          const data = module.default || [];
          allAttractions.push(...data.map((a) => localizeItem(a, lang)).filter(Boolean));
        }
        setAttractions(allAttractions);

        // ================================ 8️⃣ События
        const modulesEvents = import.meta.glob("../datas/**/**-events.js");
        const pathsEvents = Object.keys(modulesEvents);
        const keyEvent = pathsEvents.find((p) =>
          p.toLowerCase().includes(`/${lowerCountry}/${lowerRegion}-events.js`)
        );

        let allEvents = [];
        if (keyEvent) {
          const module = await modulesEvents[keyEvent]();
          allEvents = (module.default || []).map((e) => localizeItem(e, lang));
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

  return { lang, country, region, district, subRegion, parentSubRegion, city, attractions, events, error };
}

export default useCityFullDataV2;