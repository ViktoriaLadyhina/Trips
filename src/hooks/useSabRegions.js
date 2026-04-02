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

const useSabRegions = (countryPath, regionPath, districtPath) => {
  const { lang } = useSelector((state) => state.language);
  const [subRegion, setSubRegion] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const modulesSubRegions = import.meta.glob("../datas/*/*-subRegions.js");
        const lowerCountry = countryPath?.toLowerCase();
        const lowerRegion = regionPath?.toLowerCase();
        const lowerDistrict = districtPath?.toLowerCase();

        const keySubRegion = Object.keys(modulesSubRegions).find(path => {
          const p = path.toLowerCase();

          return (
            p.includes(`/${lowerCountry}/`) &&
            p.endsWith(`${lowerRegion}-subregions.js`)
          );
        });

        if (!keySubRegion) { throw new Error("SubRegions data file not found"); }

        const SubRegionsModule = await modulesSubRegions[keySubRegion]();
        const lands = SubRegionsModule.default || [];
        const foundSubRegion = lands.filter(
          l => l.districtPath?.toLowerCase() === lowerDistrict
        );

        if (!foundSubRegion) {
          throw new Error("SubRegion not found");
        }

        setSubRegion(localizeItem(foundSubRegion, lang));
      } catch (e) {
        console.error("useSabRegions error:", e);
        setSubRegion([]);
        setError(e.message);
      }
    };

    loadData();
  }, [lang, countryPath, regionPath, districtPath]);


  return { subRegion, error };

}

export default useSabRegions