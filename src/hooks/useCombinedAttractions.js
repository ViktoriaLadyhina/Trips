import useAttractions from './useAttractions.js';
import useAllAttractions from './useAllAttractions.js';
import { useEffect, useMemo, useState } from 'react';
import { getAllAttractions, getAttractionsList } from '../api/api';
import { useSelector } from 'react-redux';

const useCombinedAttractions = (countryPath, regionPath, districtPath, cityPath) => {
    const { lang } = useSelector((state) => state.language);
     const { attractions: staticAttractions } = useAttractions(countryPath, regionPath, districtPath, cityPath);
    const { attractions: allAttractions } = useAllAttractions();  
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attrData, setattrData] = useState(null);
    const [allAttrData, setAllAttrData] = useState(null);

    const entityPath =
    cityPath ||
    (districtPath && districtPath !== 'city' ? districtPath : null) ||
    regionPath ||
    countryPath;

    
// фетч запрос
useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const allAttractionsPromise =
                getAllAttractions(
                    lang,
                    controller.signal
                );

            const attractionsPromise = entityPath
                ? getAttractionsList(
                    entityPath,
                    lang,
                    controller.signal
                )
                : Promise.resolve({
                    attractions: []
                });

            const [
                allAttractionsData,
                attractionsData
            ] = await Promise.all([
                allAttractionsPromise,
                attractionsPromise
            ]);

            if (!controller.signal.aborted) {
                setAllAttrData(allAttractionsData);
                setattrData(attractionsData);

                setLoading(false);
            }

        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
                setLoading(false);
            }
        }
    };

    fetchData();

    return () => {
        controller.abort();
    };

}, [entityPath, lang]);

        const mysqlAttractions = useMemo(
    () => attrData?.attractions || [],
    [attrData]
);

    useEffect(() => {
    if (!mysqlAttractions.length) return;

    const staticPaths = new Set(
        staticAttractions
            .map(item => item?.path)
            .filter(Boolean)
    );

    const duplicateMysql = mysqlAttractions.filter(attr =>
        staticPaths.has(attr.path)
    );

    if (duplicateMysql.length) {
        console.error(
            'MIGRATION ERROR: attraction exists in both STATIC and MYSQL:',
            duplicateMysql.map(attr => ({
                path: attr.path,
                mysqlId: attr.id,
                name: attr.name
            }))
        );
    }

}, [staticAttractions, mysqlAttractions]);

const mysqlAllAttractions = useMemo(
    () => allAttrData?.attractions || [],
    [allAttrData]
);

const mergedAttractions = [
    ...staticAttractions,
    ...mysqlAttractions
];

    const mergedAllAttractions = [
        ...allAttractions,
        ...mysqlAllAttractions
    ];

    return {
    mergedAttractions,
    mergedAllAttractions,
    loading,
    error
};

}

export default useCombinedAttractions