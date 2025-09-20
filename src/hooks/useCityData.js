import { useState, useEffect } from 'react';

export const useCityData = ({ lang, countryPath, regionsPath, cityPath }) => {
    const [cityData, setCityData] = useState(null);
    const [error, setError] = useState(null);

    const modules = import.meta.glob('../datas/*/*/*-city.js');

    useEffect(() => {
        const loadCityData = async () => {
            try {

                const key = Object.keys(modules).find(path =>
                    path.endsWith(`${lang}/${countryPath}/${regionsPath}-city.js`)
                );

                if (!key) {
                    setError('City data file not found');
                    return;
                }

                const module = await modules[key]();
                const cityFull = module.default.find(c => c.patch === cityPath);

                if (!cityFull) {
                    setError('City not found');
                } else {
                    setCityData(cityFull);
                }
            } catch (e) {
                console.error(e);
                setError('City data file not found');
            }
        };

        loadCityData();
    }, [lang, countryPath, regionsPath, cityPath, modules]);

    return { cityData, error };
};