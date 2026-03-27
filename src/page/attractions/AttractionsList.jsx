import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import AttractionCard from '../../components/attraction/AttractionCard.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import useCityFullDataV2 from '../../hooks/useCityFullDataV2.js';
import CityMap from '../../components/maps/germany/maps/CityMap.jsx';

import './Attractions.scss'

const attractionsTitle = { ru: "Достопримечательности", ua: "Пам'ятки", de: "Sehenswürdigkeiten" }
const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "Keine Sehenswürdigkeiten" }

const AttractionsList = () => {
    const { districtPath, cityPath } = useParams();
    const { country, region, district, parentSubRegion, city, attractions, lang, error } = useCityFullDataV2();

    const [filters, setFilters] = useState({
        type: 'all',
        unesco: 'all',
        sort: 'rating',
    });

    useEffect(() => {
        const base = attractionsTitle[lang];

        const locationName =
            city?.name ||
            district?.name ||
            parentSubRegion?.name ||
            region?.name ||
            country?.name ||
            '';

        document.title = locationName
            ? `${base} – ${locationName}`
            : base;

    }, [city, district, parentSubRegion, region, country, lang]);


    if (error) return <p>{error}</p>;
    if (!country || !region) return <p>Loading...</p>;
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
        country ? { label: country.country, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country?.path}/${region.path}` } : null,
        district && district.id !== 0 ? { label: district.name, path: `/${country?.path}/${region?.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country?.path}/${region?.path}${districtPath ? '/' + districtPath : ''}/${city.path}` } : null,
        { label: attractionsTitle[lang] }
    ].filter(Boolean);

// console.log('cityPath:', cityPath, 'districtPath:', districtPath, "sortedAttractions:", sortedAttractions);
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