import React from 'react'
import useCityFullData from '../../hooks/useCityFullData.js';
import { useParams } from 'react-router';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import './Attraction.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Attraction = () => {
    const { districtPath, attractionsPath } = useParams();
    const { country, region, district, parentSubRegion, city, attractions, lang, error } = useCityFullData();

    const attraction = attractions.find(a => a.path === attractionsPath);

    if (error) return <p>{error}</p>;
    if (!country || !region || !city) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    if (!attractions) return <p>Loading...</p>;
    if (!attraction) return <p>Attraction not found</p>;

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        country ? { label: country.countryName, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country.path}/${region.path}` } : null,
        district ? { label: district.name, path: `/${country.path}/${region.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country.path}/${region.path}/${districtPath ? districtPath + '/' : ''}${city.path}` } : null,
        {
            label: lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки",
            path: `/${country.path}/${region.path}/${districtPath ? districtPath + '/' : ''}${city.path}/attractions`
        },
        attraction ? { label: attraction.name } : null
    ].filter(Boolean);

    const construction_periodTitle = {
        ru: "Период строительства",
        ua: "Період будівництва",
        de: "Bauzeit"
    }

    const founderTitle = {
        ru: "Основатель",
        ua: "Засновник",
        de: "Gründer"
    }

    return (
        <div className="attraction">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attraction__title'>{attraction.name && (attraction.name)}</div>
            <div className='attraction__desc'>
                <div className='attraction__desc-foto'>
                    {attraction.fotoCard && (
                        <img
                            src={`${BASE_PHOTO_URL}${attraction.fotoCard}`}
                            alt={attraction.name}
                        />
                    )}
                </div>

                <div className='attraction__desc-founder'>
                    <span className='attraction__desc-founder-bold'>{founderTitle[lang]}: </span>
                    <span className='attraction__desc-founder-text'>{attraction.founder && (attraction.founder)}</span>
                </div>
                <div className='attraction__desc-construction_period'>
                    <span className='attraction__desc-construction_period-bold'>{construction_periodTitle[lang]}: </span>
                    <span className='attraction__desc-construction_period-text'>{attraction.construction_period && (attraction.construction_period)}</span>
                </div>

                {attraction.tickets_and_entry && (<InfoBlock data={attraction.tickets_and_entry} className="attraction__desc-tickets_and_entry" />)}
                {attraction.full_description && (<InfoBlock data={attraction.full_description} className="attraction__desc-full_description" />)}
                {attraction.interestingFacts && (<InfoBlock data={attraction.interestingFacts} className="attraction__desc-interestingFacts" />)}

                {attraction?.officialSite && (<InfoBlock data={attraction.officialSite} className="attraction__desc-officialSite" />)}
            </div>
        </div>
    )
}

export default Attraction