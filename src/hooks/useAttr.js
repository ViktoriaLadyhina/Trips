import { useState, useEffect } from 'react';

export const useAttr = ({ lang, countryPath, regionsPath, attrPath }) => {
    const [attractionData, setAttractionData] = useState(null);
    const [error, setError] = useState(null);

    const modules = import.meta.glob('../datas/*/*/*-attractions.js');

    useEffect(() => {
        const loadAttrData = async () => {
            try {

                const key = Object.keys(modules).find(path =>
                    path.endsWith(`${lang}/${countryPath}/${regionsPath}-attractions.js`)
                );

                if (!key) {
                    setError('Attractions data file not found');
                    return;
                }

                const module = await modules[key]();
                const attraction = module.default.find(c => c.path === attrPath);

                if (!attraction) {
                    setError('Attraction not found');
                } else {
                    setAttractionData(attraction);
                }
            } catch (e) {
                console.error(e);
                setError('Attraction data file not found');
            }
        };

        loadAttrData();
    }, [lang, countryPath, regionsPath, attrPath, modules]);

    return { attractionData, error };
};