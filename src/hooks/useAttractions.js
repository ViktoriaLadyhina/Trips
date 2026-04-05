import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function localizeItem(item, lang = 'ru') {
    if (!item) return null;
    const translation = item.translations?.[lang] || item.translations?.['ru'];
    if (!translation) return item;
    const { translations, ...rest } = item;
    return { ...rest, ...translation };
}

const useAttractions = (countryPath, regionPath, districtPath, cityPath) => {
    const { lang } = useSelector((state) => state.language);
    const [attractions, setAttractions] = useState([]);
    const [error, setError] = useState(null);

    const modulesNew = import.meta.glob('../datas/*/*-attractions.js');
    const modulesOld = import.meta.glob('../datas/*/*/*-attractions.js');

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                if (!countryPath || !regionPath) {
                    setAttractions([]);
                    return;
                }

                const lowerCountry = countryPath.toLowerCase();
                const lowerRegion = regionPath.toLowerCase();

                // новый файл
                const keyNew = Object.keys(modulesNew).find((p) =>
                    p.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-attractions.js`)
                );
                let attractionsNew = [];
                if (keyNew) {
                    const modNew = await modulesNew[keyNew]();
                    attractionsNew = modNew.default || [];
                }

                // старый файл с языком
                const keyOld = Object.keys(modulesOld).find((p) =>
                    p.toLowerCase().endsWith(`/${lang}/${lowerCountry}/${lowerRegion}-attractions.js`)
                );
                let attractionsOld = [];
                if (keyOld) {
                    const modOld = await modulesOld[keyOld]();
                    attractionsOld = modOld.default || [];
                }

                // объединяем
                const allAttractions = [...attractionsNew, ...attractionsOld];

                // фильтруем по городу (и опционально по districtPath)
                const found = allAttractions.filter((a) => {
                    if (cityPath) {
                        return a.cityPath === cityPath;
                    }

                    if (districtPath && districtPath !== "city") {
                        return a.districtPath === districtPath;
                    }

                    // уровень региона
                    return true;
                });

                if (!isMounted) return;

                setAttractions(found.map((a) => localizeItem(a, lang)));
            } catch (err) {
                if (isMounted) setError(err.message);
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, [countryPath, regionPath, districtPath, cityPath, lang]);

    return { attractions, error };
};

export default useAttractions;