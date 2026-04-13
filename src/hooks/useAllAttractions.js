import { useEffect, useState } from "react";

const useAllAttractions = () => {
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
        // NEW STRUCTURE
        // =========================
        for (const key of Object.keys(modulesNew)) {
          const mod = await modulesNew[key]();
          all.push(...(mod.default || []));
        }

        // =========================
        // OLD STRUCTURE
        // =========================
        for (const key of Object.keys(modulesOld)) {
          const mod = await modulesOld[key]();
          all.push(...(mod.default || []));
        }

        // =========================
        // REMOVE DUPLICATES
        // =========================
        const uniqueMap = new Map();

        all.forEach((item) => {
          if (item?.id) {
            uniqueMap.set(item.id, item);
          }
        });

        const result = Array.from(uniqueMap.values());

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
  }, []);

  return { attractions, error };
};

export default useAllAttractions;