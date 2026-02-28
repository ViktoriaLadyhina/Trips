import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import AttractionCard from '../../components/attraction/AttractionCard.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import useCityFullData from '../../hooks/useCityFullData.js';
import CityMap from '../../components/maps/germany/maps/CityMap.jsx';

import './Attractions.scss'

const attractionsTitle = { ru: "Достопримечательности", ua: "Пам'ятки", de: "Sehenswürdigkeiten" }
const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "Keine Sehenswürdigkeiten" }

const AttractionsList = () => {
    const { districtPath, cityPath } = useParams();
    const { country, region, district, parentSubRegion, city, cityData, attractions, lang, error } = useCityFullData();

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
    if (!attractions) return <p>Loading...</p>

    const filteredAttractions = attractions?.filter(attr => {
        // Фильтр по URL
        if (cityPath && attr.cityPath !== cityPath) return false;
        if (districtPath && attr.districtPath !== districtPath) return false;

        // Тип: добавляем type саб-объектов
        let allTypes = [...attr.type];

        if (attr.subObjects?.length > 0) {
            attr.subObjects.forEach(subId => {
                const subAttr = attractions.find(a => a.id === subId);
                if (subAttr) allTypes.push(...subAttr.type);
            });
        }

        // Фильтр по типу
        if (filters.type !== 'all' && !allTypes.includes(filters.type)) {
            return false;
        }

        // Фильтр по рейтингу
        if (filters.top === 'top' && attr.top !== 'top') return false;
        if (filters.top === 'popular' && attr.top !== 'popular') return false;
        if (filters.top === 'local' && attr.top !== 'local') return false;


        // Фильтр по ЮНЕСКО
        if (filters.unesco === 'yes' && !attr.unesco_status?.included) return false;
        if (filters.unesco === 'no' && attr.unesco_status?.included) return false;

        // не показывать сабобъекты
        if (attr.hiddenFromList) return false;

        return true;
    }) || [];

    // Сортировка
    const sortedAttractions = [...filteredAttractions].sort((a, b) => {
        if (filters.sort === 'name-asc') {
            return (a?.name || '').localeCompare(b?.name || '');
        }
        if (filters.sort === 'name-desc') {
            return (b?.name || '').localeCompare(a?.name || '');
        }

        const ratingOrder = { top: 3, popular: 2, local: 1 };

        const aRating = ratingOrder[a.top] || 0;
        const bRating = ratingOrder[b.top] || 0;

        if (bRating !== aRating) {
            return bRating - aRating;
        }

        return (a?.name || '').localeCompare(b?.name || '');
    });

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        country ? { label: region.country, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country?.path}/${region.path}` } : null,
        district ? { label: district.name, path: `/${country?.path}/${region?.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country?.path}/${region?.path}/${districtPath ? districtPath + '/' : ''}${city.path}` } : null,
        { label: lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки" }
    ].filter(Boolean);
    
    return (
        <div className="attractions">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attractions__title'>{attractionsTitle[lang]}</div>

            <CityMap cityData={cityData} attractions={attractions} />

            <AttractionsFilters lang={lang} filters={filters} setFilters={setFilters} />

            <div className="attractions__list">
                {sortedAttractions.length === 0 ? (
                    <p>{NoAttractions[lang]}</p>
                ) : (
                    sortedAttractions.map(attr => (
                        <div key={attr.path} className="attractions__card">
                            <AttractionCard attr={attr} lang={lang} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AttractionsList