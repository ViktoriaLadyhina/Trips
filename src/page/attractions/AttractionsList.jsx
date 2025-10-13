import { useParams } from 'react-router';
import { useState } from 'react';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Attraction from '../../components/attraction/Attraction.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import useCityFullData from '../../hooks/useCityFullData.js';

import './Attractions.scss'

const AttractionsList = () => {
    const { districtPath, cityPath } = useParams();
    const { country, region, district, parentSubRegion, city, attractions, lang, error } = useCityFullData();

    const [filters, setFilters] = useState({
        type: 'all',
        unesco: 'all',
        sort: 'name-asc',
    });

    if (error) return <p>{error}</p>;
    if (!country || !region) return <p>Loading...</p>;
    if (!attractions) return <p>Loading...</p>

    // Фильтруем по URL
    // const filteredAttractions = attractions?.filter(attr => {
    //     if (cityPath) return attr.cityPath === cityPath;
    //     if (districtPath) return attr.districtPath === districtPath;
    //     return true;
    // }) || [];

    const filteredAttractions = attractions?.filter(attr => {
        // Фильтр по URL
        if (cityPath && attr.cityPath !== cityPath) return false;
        if (districtPath && attr.districtPath !== districtPath) return false;

        // Фильтр по типу
        if (filters.type === 'palace_or_castle') {
            if (!attr.type.includes('palace') && !attr.type.includes('castle')) return false;
        } else if (filters.type !== 'all' && !attr.type.includes(filters.type)) {
            return false;
        }

        // Фильтр по ЮНЕСКО
        if (filters.unesco === 'yes' && !attr.unesco_status?.included) return false;
        if (filters.unesco === 'no' && attr.unesco_status?.included) return false;

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
        return 0;
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


    const attractionsTitle = { ru: "Достопримечательности", ua: "Пам'ятки", de: "Sehenswürdigkeiten" }
    const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "SKeine Sehenswürdigkeiten" }

    return (
        <div className="attractions">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attractions__title'>{attractionsTitle[lang]}</div>

            <AttractionsFilters lang={lang} filters={filters} setFilters={setFilters} />

            <div className="attractions__list">
                {sortedAttractions.length === 0 ? (
                    <p>{NoAttractions[lang]}</p>
                ) : (
                    sortedAttractions.map(attr => (
                        <div key={attr.path} className="attractions__card">
                            <Attraction attr={attr} lang={lang} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AttractionsList