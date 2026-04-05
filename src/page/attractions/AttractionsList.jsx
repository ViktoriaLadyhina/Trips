import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import AttractionCard from '../../components/attraction/AttractionCard.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import CityMap from '../../components/maps/germany/maps/CityMap.jsx';

import useAttractions from '../../hooks/useAttractions.js';
import useCity from '../../hooks/useCity.js';
import useSabRegions from '../../hooks/useSabRegions.js';
import datas from '../../datas/minimalIndex'

import './Attractions.scss'


const attractionsTitle = { ru: "Достопримечательности", ua: "Пам'ятки", de: "Sehenswürdigkeiten" }
const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "Keine Sehenswürdigkeiten" }

const AttractionsList = () => {
    const { lang } = useSelector((state) => state.language);
    const { countryPath, regionPath, districtPath, cityPath } = useParams();
    
    const { subRegion } = useSabRegions(countryPath, regionPath, districtPath);
    const { city } = useCity(countryPath, regionPath, districtPath, cityPath);
    const { attractions, error } = useAttractions(countryPath, regionPath, districtPath, cityPath);
    
    const [filters, setFilters] = useState({
        type: 'all',
        unesco: 'all',
        sort: 'rating',
    });

    useEffect(() => {
        const base = attractionsTitle[lang];

        const locationName =
            datas.districts[districtPath]?.[lang] ||
            subRegion?.name ||
            datas.regions[regionPath][lang] ||
            datas.countries[countryPath][lang] ||
            '';

        document.title = locationName
            ? `${base} – ${locationName}`
            : base;

    }, [countryPath, regionPath, districtPath, city, subRegion, lang]);


    if (error) return <p>{error}</p>;
    if (!attractions) return <p>Loading...</p>;

    const filteredAttractions = attractions?.filter(attr => {
        if (!attr) return false;
        if (cityPath && attr.cityPath !== cityPath) return false;
        if (districtPath && attr.districtPath !== districtPath) return false;

        const allTypes = [
            ...(attr.type || []),
            ...(attr.subObjects?.map(subId => attractions.find(a => a.id === subId)?.type || []).flat() || [])
        ];

        if (filters.type !== 'all' && !allTypes.includes(filters.type)) return false;
        if (filters.rating && filters.rating !== 'all' && attr.rating !== filters.rating) return false;

        if (filters.unesco === 'yes' && !attr.unesco_status?.included) return false;
        if (filters.unesco === 'no' && attr.unesco_status?.included) return false;

        if (attr.hiddenFromList) return false;

        return true;
    }) || [];

    const sortedAttractions = [...filteredAttractions].sort((a, b) => {
        if (filters.sort === 'name-asc') return (a?.name || '').localeCompare(b?.name || '');
        if (filters.sort === 'name-desc') return (b?.name || '').localeCompare(a?.name || '');
        const ratingOrder = { top: 3, popular: 2, local: 1 };
        const aRating = ratingOrder[a.rating] || 0;
        const bRating = ratingOrder[b.rating] || 0;
        if (bRating !== aRating) return bRating - aRating;
        return (a?.name || '').localeCompare(b?.name || '');
    });


const crumbs = [
    { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    countryPath && datas.countries[countryPath]?.[lang] ? { label: datas.countries[countryPath][lang], path: `/${countryPath}` } : null,
    regionPath && datas.regions[regionPath]?.[lang] ? { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` } : null,
    districtPath && districtPath !== "city" && datas.districts[districtPath]?.[lang]
        ? { label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }
        : null,
    city?.subRegionName ? { label: city.subRegionName } : null,
    city?.name ? { label: city.name, path: `/${countryPath}/${regionPath}${districtPath && districtPath !== "city" ? '/' + districtPath : ''}/${city.path}` } : null,
    { label: attractionsTitle[lang] }
].filter(Boolean);


    return (
        <div className="attractions">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attractions__title'>{attractionsTitle[lang]}</div>

            <CityMap city={city} attractions={attractions} lang={lang} />

            <AttractionsFilters lang={lang} filters={filters} setFilters={setFilters} />

            <div className="attractions__list">
                {sortedAttractions.length === 0 ? (
                    <p>{NoAttractions[lang]}</p>
                ) : (
                    sortedAttractions.map(attr => (
                        <div key={attr.id} className="attractions__card">
                            <AttractionCard attr={attr} lang={lang} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AttractionsList;