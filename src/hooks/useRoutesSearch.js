import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const routeModules = import.meta.glob("../datas/*/routes.js");

let routesCache = null;

const useRoutes = (countryPath) => {
  const { lang } = useSelector((state) => state.language);

  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {

        if (!routesCache) {
          let all = [];

          for (const key of Object.keys(routeModules)) {
            const mod = await routeModules[key]();
            all.push(...(mod.default || []));
          }

          routesCache = all;
        }

        let data = routesCache;

        if (countryPath) {
          data = data.filter(
            r => r.countryPath === countryPath
          );
        }

        // =====================
        // считаем переводы для каждого маршрута
        // =====================
        const result = data.map(r => {
          const t = r.translations?.[lang];

          return {
            ...r,
            name: t?.name || r.name,
            short_description: t?.short_description,
            routeLength: t?.routeLength
          };
        });

        if (!isMounted) return;

        setRoutes(result);
      } catch (e) {
        setError(e.message);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [countryPath, lang]);

  return { routes, error };
};

export default useRoutes;