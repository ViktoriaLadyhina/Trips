import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAllAttractions = () => {
  const { lang } = useSelector((state) => state.language);

  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState(null);

  const modulesNew = import.meta.glob("../datas/*/*-attractions.js");
  const modulesOld = import.meta.glob("../datas/*/*/*-attractions.js");

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        let all = [];

        // =========================
        // NEW STRUCTURE (без языка)
        // =========================
        for (const key of Object.keys(modulesNew)) {
          const mod = await modulesNew[key]();
          all.push(...(mod.default || []));
        }

        // =========================
        // OLD STRUCTURE (с языком в пути)
        // =========================
        const oldKeys = Object.keys(modulesOld).filter((p) =>
          p.toLowerCase().includes(`/${lang}/`)
        );

        for (const key of oldKeys) {
          const mod = await modulesOld[key]();
          all.push(...(mod.default || []));
        }

        // =========================
        // REMOVE DUPLICATES
        // =========================
        const uniqueMap = new Map();

        all.forEach((item) => {
          if (item?.id) uniqueMap.set(item.id, item);
        });

        let result = Array.from(uniqueMap.values());

        // =========================
        // NORMALIZE STRUCTURE
        // =========================
        result = result.map((item) => {
          const t = item.translations?.[lang];

          return {
            ...item,

            // базовые поля языка
            name: t?.name || item.name,
            location: t?.location || item.location,

            // meta
            meta: t?.meta || item.meta,

            // UNESCO (ВАЖНОЕ ИСПРАВЛЕНИЕ)
            unesco_status:
              item.unesco_status || t?.unesco_status || null
          };
        });

        if (!isMounted) return;

        setAttractions(result);
      } catch (err) {
        if (isMounted) {
          console.error("useAllAttractions error:", err);
          setError(err.message);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [lang]);

  return { attractions, error };
};

export default useAllAttractions;