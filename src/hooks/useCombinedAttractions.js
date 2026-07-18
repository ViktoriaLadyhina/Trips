import useAttractions from './useAttractions.js';
import useAllAttractions from './useAllAttractions.js';
import { useEffect, useMemo, useState } from 'react';
import { getAttractionsList } from '../api/api';
import { useSelector } from 'react-redux';

const useCombinedAttractions = (countryPath, regionPath, districtPath, cityPath) => {
    const { lang } = useSelector((state) => state.language);
     const { attractions: staticAttractions } = useAttractions(countryPath, regionPath, districtPath, cityPath);
    const { attractions: allAttractions } = useAllAttractions();  
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [attrData, setattrData] = useState(null);

    const entityPath =
    cityPath ||
    (districtPath && districtPath !== 'city' ? districtPath : null) ||
    regionPath ||
    countryPath;


    
// фетч запрос
    useEffect(() => {
        if (!entityPath) return;

        let active = true;

        setLoading(true);
        setattrData(null);
        setError(null);

        getAttractionsList(entityPath, lang)
            .then(data => {

                    if (active) {
                        setattrData(data);
                        setLoading(false);
                    }
            })
            .catch(err => {
                if (active) {
                    setError(err.message);
                    setLoading(false);
                }
            });


        return () => {
            active = false;
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

const mergedAttractions = [
    ...staticAttractions,
    ...mysqlAttractions
];

console.log("attrData", attrData); /// здесь ноль, т.е. досты только локальные
console.log("mergedAttractions", mergedAttractions);


    return {
    mergedAttractions,
    allAttractions,
    loading,
    error
};

}

export default useCombinedAttractions