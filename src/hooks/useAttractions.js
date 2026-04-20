import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function localizeItem(item, lang = 'ru') {
  if (!item) return null;

  const translation =
    item.translations?.[lang] ||
    item.translations?.['ru'];

  if (!translation) return item;

  const { translations, ...rest } = item;

  return {
    ...rest,
    ...translation,
  };
}

const useAttractions = (countryPath, regionPath, districtPath, cityPath) => {
  const { lang } = useSelector((state) => state.language);

  const [attractions, setAttractions] = useState([]);
  const [allAttractions, setAllAttractions] = useState([]);
  const [error, setError] = useState(null);

  const modulesNew = import.meta.glob('../datas/*/*-attractions.js');
  const modulesOld = import.meta.glob('../datas/*/*/*-attractions.js');

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        if (!countryPath) {
          setAttractions([]);
          return;
        }

        const lowerCountry = countryPath?.toLowerCase();
        const lowerRegion = regionPath?.toLowerCase();

        let attractionsNew = [];
        let attractionsOld = [];

        // =========================
        // 🔥 НОВАЯ СТРУКТУРА
        // =========================
        if (regionPath) {
          // конкретный регион
          const keyNew = Object.keys(modulesNew).find((p) =>
            p.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-attractions.js`)
          );

          if (keyNew) {
            const mod = await modulesNew[keyNew]();
            attractionsNew = mod.default || [];
          }

        } else {
          // уровень страны → собрать ВСЕ регионы
          const countryModules = Object.keys(modulesNew).filter((p) =>
            p.toLowerCase().includes(`/${lowerCountry}/`)
          );


          for (const key of countryModules) {
            const mod = await modulesNew[key]();
            attractionsNew.push(...(mod.default || []));
          }
        }

        // =========================
        // 🧓 СТАРАЯ СТРУКТУРА (по языкам)
        // =========================
        if (regionPath) {
          const keyOld = Object.keys(modulesOld).find((p) =>
            p.toLowerCase().endsWith(`/${lang}/${lowerCountry}/${lowerRegion}-attractions.js`)
          );

          if (keyOld) {
            const mod = await modulesOld[keyOld]();
            attractionsOld = mod.default || [];
          }
        } else {
          const countryModulesOld = Object.keys(modulesOld).filter((p) =>
            p.toLowerCase().includes(`/${lang}/${lowerCountry}/`)
          );

          for (const key of countryModulesOld) {
            const mod = await modulesOld[key]();
            attractionsOld.push(...(mod.default || []));
          }
        }

        // =========================
        // объединение + удаление дублей
        // =========================
        const merged = [...attractionsNew, ...attractionsOld];

        const uniqueMap = new Map();
        merged.forEach((item) => {
          if (item?.id) {
            uniqueMap.set(item.id, item);
          }
        });

        const allAttr = Array.from(uniqueMap.values());
        setAllAttractions(allAttr);

        // =========================
        // фильтрация по уровню
        // =========================
        const filtered = allAttr.filter((a) => {
          if (!a) return false;

          if (cityPath) {
            return a.cityPath === cityPath;
          }

          if (districtPath && districtPath !== 'city') {
            return a.districtPath === districtPath;
          }

          if (regionPath) {
            return a.regionPath === regionPath;
          }

          // уровень страны → всё показываем
          return true;
        });

        if (!isMounted) return;

        setAttractions(filtered.map((a) => localizeItem(a, lang)));
      } catch (err) {
        if (isMounted) {
          console.error('useAttractions error:', err);
          setError(err.message);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [countryPath, regionPath, districtPath, cityPath, lang]);


  return { attractions, allAttractions, error };
};

export default useAttractions;