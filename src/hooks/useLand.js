import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function localizeItem(item, lang = "ru") {
  if (!item) return null;

  const translation =
    item.translations?.[lang] ||
    item.translations?.["ru"]; 

  if (!translation) return item;

  const { translations, ...rest } = item;

  return {
    ...rest,
    ...translation,
  };
}

const useLand = (countryPath, regionPath) => {
  const { lang } = useSelector((state) => state.language);
  const [region, setRegion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const modulesLand = import.meta.glob("../datas/*/lands.js");
        const lowerCountry = countryPath?.toLowerCase();
        const lowerRegion = regionPath?.toLowerCase();

        const keyLand = Object.keys(modulesLand).find(path =>
          path.toLowerCase().endsWith(`/${lowerCountry}/lands.js`)
        );

        if (!keyLand) { throw new Error("Lands data file not found"); }

        const landModule = await modulesLand[keyLand]();
        const lands = landModule.default || [];

        const foundRegion = lands.find(
          l => l.path.toLowerCase() === lowerRegion
        );

        if (!foundRegion) {
          throw new Error("Region not found");
        }

        setRegion(localizeItem(foundRegion, lang));
      } catch (e) {
        console.error("useLand error:", e);
        setRegion(null);
        setError(e.message);
      }
    };

    loadData();
  }, [lang, countryPath, regionPath]);

  return { region, error };
};

export default useLand