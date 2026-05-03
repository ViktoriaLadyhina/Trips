import { useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';

import Gallery from '../../components/gallery/Gallery.jsx';
import { photosByCountry } from '../../datas/fotos/index.js';
import AttractionCardSub from '../../components/attraction/AttractionCardSub.jsx'
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import FilteredMap from '../../components/maps/attr/filteredMap.jsx';

import useAttractions from '../../hooks/useAttractions.js';
import useCity from '../../hooks/useCity.js';
import datas from '../../datas/minimalIndex'

import './Attraction.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const construction_periodTitle = { ru: "Период строительства", ua: "Період будівництва", de: "Bauzeit" }
const founderTitle = { ru: "Основатель", ua: "Засновник", de: "Gründer" }
const architects = { ru: "Архитекторы", ua: "Архітектори", de: "Architekten" };
const statusTitle = { ru: "Состояние", ua: "Стан", de: "Zustand" };
const noteLabel = { partial: { ru: "Частично сохранилось", ua: "Частково збережено", de: "Teilweise erhalten" }, lost: { ru: "Утрачено", ua: "Втрачено", de: "Verloren" } };

const Attraction = () => {
    const { lang } = useSelector((state) => state.language);
    const { countryPath, regionPath, districtPath, cityPath, attractionsPath } = useParams();

    const { city } = useCity(countryPath, regionPath, districtPath, cityPath);
    const { attractions, error } = useAttractions(countryPath, regionPath, districtPath, cityPath);

    const photos = photosByCountry[countryPath];
    const attractionPhotos = photos?.[regionPath]?.[cityPath]?.[attractionsPath] || [];

    const [subFilters, setSubFilters] = useState({
        type: 'all',
        rating: 'all',
        unesco: 'all',
        sort: 'rating',
        status: ['active', 'partial'],
    });

    const attraction = attractions.find(a => a.path === attractionsPath);

    <Helmet>
        <title>{attraction?.name}</title>
    </Helmet>

    const meta = attraction?.meta;

    // Преобразуем в массив для Gallery
    const images = attractionPhotos.map(photo => ({
        src: `${BASE_PHOTO_URL}${photo.path}`,
        alt: photo.title[lang]
    }));

    if (error) return <p>{error}</p>;
    if (!countryPath || !regionPath) return <p>Loading...</p>;
    if (!attractions) return <p>Loading...</p>;
    if (!attraction) return <p>Attraction not found</p>;


    const subObjects = attraction.subObjects || [];
    const subObjects2 = attraction.subObjects2 || [];

    // фильтрация саб-объектов
    const applyFilters = (list) => {
        return list
            .map(id => attractions.find(a => a.id === id))
            .filter(Boolean)
            .filter(attr => {
                if (subFilters.type !== 'all' && !attr.type?.includes(subFilters.type)) return false;

                if (subFilters.rating !== 'all' && attr.rating !== subFilters.rating) return false;

                if (subFilters.unesco === 'yes' && !attr.unesco_status?.included) return false;
                if (subFilters.unesco === 'no' && attr.unesco_status?.included) return false;

                const status = attr.status ?? 'active';
                if (!subFilters.status.includes(status)) return false;

                return true;
            });
    };

    const filteredSubObjects = applyFilters(subObjects);
    const filteredSubObjects2 = applyFilters(subObjects2);

    // --- сортировка ---
    const sortFn = (a, b) => {
        if (subFilters.sort === 'name-asc')
            return (a?.name || '').localeCompare(b?.name || '');

        if (subFilters.sort === 'name-desc')
            return (b?.name || '').localeCompare(a?.name || '');

        const ratingOrder = { top: 3, popular: 2, local: 1 };

        const diff =
            (ratingOrder[b.rating] || 0) - (ratingOrder[a.rating] || 0);

        return ((a.sortIndex ?? 0) - (b.sortIndex ?? 0)) || diff || (a.name || '').localeCompare(b.name || '');

    };

    const sortedSubObjects = [...filteredSubObjects].sort(sortFn);
    const sortedSubObjects2 = [...filteredSubObjects2].sort(sortFn);
    const showFilters = subObjects.length + subObjects2.length >= 5;

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },

        countryPath && datas.countries[countryPath]?.[lang] ? {
            label: datas.countries[countryPath][lang],
            path: `/${countryPath}`
        } : null,

        regionPath && datas.regions[regionPath]?.[lang] ? {
            label: datas.regions[regionPath][lang],
            path: `/${countryPath}/${regionPath}`,
        } : null,

        districtPath && districtPath !== "city" && datas.districts[districtPath]?.[lang] ? {
            label: datas.districts[districtPath][lang],
            path: `/${countryPath}/${regionPath}/${districtPath}`
        } : null,

        city?.subRegionName ? { label: city.subRegionName } : null,

        cityPath
            ? {
                label: datas.cities[cityPath]?.[lang],
                path: districtPath === "city"
                    ? `/${countryPath}/${regionPath}/city/${cityPath}`
                    : `/${countryPath}/${regionPath}/${districtPath}/${cityPath}`,
            }
            : null,

        { label: datas.attractions[attractionsPath]?.[lang] }
    ].filter(Boolean);

    return (

        <div className="attraction">
            {meta && (
                <Helmet>
                    <title>{meta?.title}</title>
                    <meta name="description" content={meta?.description} />
                    {meta?.keywords && (<meta name="keywords" content={meta.keywords} />)}
                    <meta property="og:title" content={meta?.ogTitle} />
                    <meta property="og:description" content={meta?.ogDescription} />
                    <meta property="og:image" content={meta?.ogImage} />
                </Helmet>
            )}

            <BreadCrumbs crumbs={crumbs} />

            <div className='attraction__title'>{attraction.name && (attraction.name)}</div>

            {attraction.mapOpen && (
                <FilteredMap map={attraction.mapOpen} />
            )}

            <div className='attraction__desc'>
                <div className='attraction__desc-foto'>
                    {attraction.fotoCard && (
                        <img
                            src={`${BASE_PHOTO_URL}${attraction.fotoCard}`}
                            alt={attraction.name}
                        />
                    )}
                </div>

                {attraction.founder && (
                    <div className='attraction__desc-founder'>
                        <span className='attraction__desc-founder-bold'>{founderTitle[lang]}:</span>
                        <span className='attraction__desc-founder-text'>{" "}{attraction.founder}</span>
                    </div>
                )}
                {attraction.construction_period && (
                    <div className='attraction__desc-construction_period'>
                        <span className='attraction__desc-construction_period-bold'>{construction_periodTitle[lang]}: </span>
                        <span className='attraction__desc-construction_period-text'>{attraction.construction_period && (attraction.construction_period)}</span>
                    </div>
                )}
                {attraction.architects &&
                    (<div className='attraction__desc-architects'>
                        <span className='attraction__desc-architects-bold'>{architects[lang]}: </span>
                        <span className='attraction__desc-architects-text'>{attraction.architects}</span>
                    </div>
                    )}
                {attraction.status &&
                    (<div className='attraction__desc-architects'>
                        <span className='attraction__desc-architects-bold'>{statusTitle[lang]}: </span>
                        <span className='attraction__desc-architects-text'>{noteLabel[attraction.status][lang]}, {attraction.note}</span>
                    </div>
                    )}

                {attraction.tickets_and_entry && (<InfoBlock data={attraction.tickets_and_entry} className="attraction__desc-tickets_and_entry" />)}

                {attraction.address && (<InfoBlock data={attraction.address} className="attraction__desc-address" />)}
                {attraction.full_description && (<InfoBlock data={attraction.full_description} className="attraction__desc-full_description" />)}
                {attraction.legends && (<InfoBlock data={attraction.legends} className="attraction__desc-full_description" />)}
                {attraction.sub_objects && (<InfoBlock data={attraction.sub_objects} className="attraction__desc-sub_objects" />)}
                {attraction.relics && (<InfoBlock data={attraction.relics} className="attraction__desc-relics" />)}
                {attraction.hotels && (<InfoBlock data={attraction.hotels} className="attraction__desc-hotels" />)}
                {attraction.interestingFacts && (<InfoBlock data={attraction.interestingFacts} className="attraction__desc-interestingFacts" />)}

                {subObjects.length > 0 && (
                    <section className="attraction-sub">
                        <h3>{attraction.subObjects_title || (lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки")}</h3>
                        {showFilters && <AttractionsFilters lang={lang} filters={subFilters} setFilters={setSubFilters} />}

                        {sortedSubObjects.map(attr => (
                            <AttractionCardSub key={attr.id} attr={attr} lang={lang} />
                        ))}
                    </section>
                )}
                {subObjects2.length > 0 && (
                    <section className="attraction-sub">
                        <h3>{attraction.subObjects_title2 || (lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки")}</h3>

                        {sortedSubObjects2.map(attr => (
                            <AttractionCardSub key={attr.id} attr={attr} lang={lang} />
                        ))}
                    </section>
                )}

                {attraction?.officialSite && (<InfoBlock data={attraction.officialSite} className="attraction__desc-officialSite" />)}

                {images.length > 0 && <Gallery images={images} />}
            </div>
        </div>
    )
}

export default Attraction