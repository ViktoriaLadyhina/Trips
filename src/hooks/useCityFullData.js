// src/hooks/useCityFullData.js
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { regions as ruRegions } from "../datas/ru";
import { regions as uaRegions } from "../datas/ua";
import { regions as deRegions } from "../datas/de";

function useCityFullData() {
  const { countryPath, regionsPath, districtPath, cityPath } = useParams();
  const { lang } = useSelector((state) => state.language);

  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);
  const [parentSubRegion, setParentSubRegion] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (!lang) return; // ждем язык

    const allRegions = lang === "ua" ? uaRegions : lang === "de" ? deRegions : ruRegions;

    const foundCountry = allRegions[countryPath];
    if (!foundCountry) {
      setError("Country not found");
      return;
    }
    foundCountry.path = countryPath;
    

    const foundRegion = foundCountry[regionsPath];
    if (!foundRegion) {
      setError("Region not found");
      return;
    }

    let foundDistrict = null;
    let subRegions = [];
    let foundCity = null;
    let foundParentSubRegion = null;

    // --- 1. Свободный город ---
    if (districtPath === "city" && cityPath) {
      const freeCities = foundRegion.discriptRegions?.[1]?.items || [];
      foundCity = freeCities.find(c => c.path === cityPath);
    } 
    // --- 2. Город через дистрикт ---
    else {
      const districtItems = foundRegion.discriptRegions?.[0]?.items || [];
      if (districtPath) {
        foundDistrict = districtItems.find(d => d.path === districtPath);

        if (!foundDistrict) {
          setError("District not found");
          return;
        }

        if (foundDistrict?.subRegion?.length > 0 && cityPath) {
          subRegions = foundDistrict.subRegion;
          foundCity = subRegions.flatMap(s => s.communities || []).find(c => c.path === cityPath);
          foundParentSubRegion = subRegions.find(sub => sub.communities.some(c => c.path === cityPath));
        }
      }

      // Если districtPath нет, но есть cityPath (город без района)
      if (!districtPath && cityPath) {
        const freeCities = foundRegion.discriptRegions?.[1]?.items || [];
        foundCity = freeCities.find(c => c.path === cityPath);
      }
    }

    // Загружаем cityData только если есть city
    if (foundCity) {
      const modules = import.meta.glob("../datas/*/*/*-city.js");
      const key = Object.keys(modules).find(path =>
        path.endsWith(`${lang}/${countryPath}/${regionsPath}-city.js`)
      );

      if (key) {
        modules[key]().then(module => {
          const cityFull = module.default.find(c => c.path === foundCity.path);
          if (cityFull) setCityData(cityFull);
        }).catch(() => setError("City data file not found"));
      }
    }

    // Загружаем достопримечательности
 const modulesAttr = import.meta.glob("../datas/*/*/*-attractions.js");
      const keyAttr = Object.keys(modulesAttr).find(path =>
        path.endsWith(`${lang}/${countryPath}/${regionsPath}-attractions.js`)
      );
      if (keyAttr) {
        modulesAttr[keyAttr]()
          .then(module => {
            const cityAttractions = module.default.filter(a => a.cityPath === cityPath);
            setAttractions(cityAttractions);
          })
          .catch(() => console.warn("Attractions data file not found"));
      }


    setCountry(foundCountry);
    setRegion(foundRegion);
    setDistrict(foundDistrict);
    setParentSubRegion(foundParentSubRegion);
    setCity(foundCity);
    setError(null);
  }, [lang, countryPath, regionsPath, districtPath, cityPath]);
  

  return {
    lang,
    country,
    region,
    district,
    parentSubRegion,
    city,
    cityData,
    attractions,
    error
  };
}

export default useCityFullData;
