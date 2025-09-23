import React from 'react'
import { useParams } from 'react-router';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Attraction from '../../components/attraction/Attraction.jsx';
import './Attractions.scss'
import useCityFullData from '../../hooks/useCityFullData.js';

const AttractionsList = () => {
    const { districtPath } = useParams();
    const { country, region, district, parentSubRegion, city, attractions, lang, error } = useCityFullData();

    if (error) return <p>{error}</p>;
    if (!country || !region || !city) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    if (!attractions) return <p>Loading...</p>;


    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        country ? { label: country.countryName, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country?.path}/${region.path}` } : null,
        district ? { label: district.name, path: `/${country?.path}/${region?.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country?.path}/${region?.path}/${districtPath ? districtPath + '/' : ''}${city.path}` } : null,
        { label: lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки" }
    ].filter(Boolean);


    const attractionsTitle = {
        ru: "Достопримечательности",
        ua: "Пам'ятки",
        de: "Sehenswürdigkeiten"
    }

    return (
        <div className="attractions">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attractions__title'>{attractionsTitle[lang]}</div>

            <div className="attractions__list">
                {attractions.length === 0 && <p>
                    {lang === 'ru' ? 'Нет достопримечательностей' :
                        lang === 'de' ? 'Keine Sehenswürdigkeiten' :
                            'Достопримечательностей немає'}
                </p>}

                {attractions.map(attr => (
                    <div key={attr.path} className="attractions__card">
                        <Attraction attr={attr} lang={lang} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AttractionsList