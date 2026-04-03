import { useEffect, useState } from 'react'
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

const useCity = (countryPath, regionPath, districtPath, cityPath) => {
    const { lang } = useSelector((state) => state.language);
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    const modulesCities = import.meta.glob("../datas/*/*-city.js");

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                // если нет обязательных параметров — сразу выходим
                if (!countryPath || !regionPath || !districtPath || !cityPath) {
                    console.warn("Missing required parameters:", { countryPath, regionPath, districtPath, cityPath });
                    setCity(null);
                    return;
                }

                const lowerCountry = countryPath.toLowerCase();
                const lowerRegion = regionPath.toLowerCase();

                const keyCity =
                    Object.keys(modulesCities).find((path) =>
                        path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-city.js`)
                    ) || null;

                if (!keyCity) {
                    console.warn("City file not found:", { countryPath, regionPath });
                    setCity(null);
                    return;
                }

                const citiesModule = await modulesCities[keyCity]();
                const cities = citiesModule.default || [];

                const foundCity = cities.find(
                    (c) =>
                        c.path === cityPath &&
                        c.districtPath === districtPath
                );

                if (!isMounted) return;

                if (!foundCity) {
                    console.warn("City not found:", { cityPath, districtPath });
                    setCity(null);
                    return;
                }

                setCity(localizeItem(foundCity, lang));
            } catch (err) {
                if (isMounted) {
                    console.error(err);
                    setError(err.message);
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, [countryPath, regionPath, districtPath, cityPath, lang]);

    return { city, error };

}

export default useCity