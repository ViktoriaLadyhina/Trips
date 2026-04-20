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

const useDistricts = (countryPath, regionPath, districtPath) => {
    const { lang } = useSelector((state) => state.language);
    const [district, setDistrict] = useState(null);
    const [error, setError] = useState(null);

      useEffect(() => {
        const loadData = async () => {
          try {
            const modulesDistricts = import.meta.glob("../datas/*/*-districts.js");
            const lowerCountry = countryPath?.toLowerCase();
            const lowerRegion = regionPath?.toLowerCase();
            const lowerDistrict = districtPath?.toLowerCase();
    
            const keyDistrict = Object.keys(modulesDistricts).find(path =>
              path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-districts.js`)
            );
    
            if (!keyDistrict) { throw new Error("Districts data file not found"); }
    
            const DistrictsModule = await modulesDistricts[keyDistrict]();
            const lands = DistrictsModule.default || [];
    
            const foundDistrict = lands.find(
              l => l.path.toLowerCase() === lowerDistrict
            );
    
            if (!foundDistrict) {
              throw new Error("District not found");
            }
    
            setDistrict(localizeItem(foundDistrict, lang));
          } catch (e) {
            console.error("useDistricts error:", e);
            setDistrict(null);
            setError(e.message);
          }
        };
    
        loadData();
      }, [lang, countryPath, regionPath, districtPath]);

return { district, error };

}

export default useDistricts