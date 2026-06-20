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

const useEvents = (countryPath, regionPath, districtPath, cityPath) => {
    const { lang } = useSelector((state) => state.language);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const modulesEvents = import.meta.glob("../datas/*/*-events.js");

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                // если нет обязательных параметров — сразу выходим
                if (!countryPath || !regionPath || !districtPath || !cityPath) {
                    console.warn("Missing required parameters:", { countryPath, regionPath, districtPath, cityPath });
                    setEvents([]);
                    return;
                }

                const lowerCountry = countryPath.toLowerCase();
                const lowerRegion = regionPath.toLowerCase();

                const keyEvents =
                    Object.keys(modulesEvents).find((path) =>
                        path.toLowerCase().endsWith(`/${lowerCountry}/${lowerRegion}-events.js`)
                    ) || null;

                if (!keyEvents) {
                    console.warn("Events file not found:", { countryPath, regionPath });
                    setEvents([]);
                    return;
                }

                const eventsModule = await modulesEvents[keyEvents]();
                const allEvents = eventsModule.default || [];


                const foundEvents = allEvents.filter(
                    (c) => c.cityPath === cityPath && c.districtPath === districtPath
                );

                if (!isMounted) return;

                if (!foundEvents.length) {
                    setEvents([]);
                    return;
                }

                setEvents(foundEvents.map(e => localizeItem(e, lang)));
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

    return { events, error };

}

export default useEvents