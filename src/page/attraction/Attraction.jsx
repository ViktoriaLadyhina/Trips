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
import KolnTowers from '../../components/maps/germany/maps/Koln_towers.jsx';

import useAttractions from '../../hooks/useAttractions.js';
import useCity from '../../hooks/useCity.js';
import datas from '../../datas/minimalIndex'

import './Attraction.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const construction_periodTitle = { ru: "Период строительства", ua: "Період будівництва", de: "Bauzeit" }
const founderTitle = { ru: "Основатель", ua: "Засновник", de: "Gründer" }
const architects = { ru: "Архитекторы", ua: "Архітектори", de: "Architekten" };

const Attraction = () => {
    const { lang } = useSelector((state) => state.language);
    const { countryPath, regionPath, districtPath, cityPath, attractionsPath } = useParams();

    const { city } = useCity(countryPath, regionPath, districtPath, cityPath);
    const { attractions, error } = useAttractions(countryPath, regionPath, districtPath, cityPath);

    const attraction = attractions.find(a => a.path === attractionsPath);
    const photos = photosByCountry[countryPath];
    const attractionPhotos = photos?.[regionPath]?.[cityPath]?.[attractionsPath] || [];

    const [filters, setFilters] = useState({
        type: 'all',
        unesco: 'all',
        rating: 'all',
        sort: 'rating',
    });

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
    if (!countryPath || !regionPath || !city) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    if (!attractions) return <p>Loading...</p>;
    if (!attraction) return <p>Attraction not found</p>;

    const subObjects = attraction.subObjects || [];

    const filteredAttractions = attractions?.filter(attr => {

        let allTypes = [...attr.type];

        if (attr.subObjects?.length > 0) {
            attr.subObjects.forEach(subId => {
                const subAttr = attractions.find(a => a.id === subId);
                if (subAttr) allTypes.push(...subAttr.type);
            });
        }

        if (filters.type !== 'all' && !allTypes.includes(filters.type)) { return false; }
        if (filters.rating === 'top' && attr.rating !== 'top') return false;
        if (filters.rating === 'popular' && attr.rating !== 'popular') return false;
        if (filters.rating === 'local' && attr.rating !== 'local') return false;
        if (filters.unesco === 'yes' && !attr.unesco_status?.included) return false;
        if (filters.unesco === 'no' && attr.unesco_status?.included) return false;

        return true;
    }) || [];

    // --- Сортировка ---
    const sortByFilters = (a, b) => {
        if (filters.sort === 'name-asc') return (a?.name || '').localeCompare(b?.name || '');
        if (filters.sort === 'name-desc') return (b?.name || '').localeCompare(a?.name || '');
        const ratingOrder = { top: 3, popular: 2, local: 1 };
        const aRating = ratingOrder[a.rating] || 0;
        const bRating = ratingOrder[b.rating] || 0;
        if (bRating !== aRating) return bRating - aRating;
        return (a?.name || '').localeCompare(b?.name || '');
    };

    const sortedAttractions = [...filteredAttractions].sort(sortByFilters);
    const showKolnTowers = location.pathname === '/germany/nrw/city/koln/attractions/old_towers_koln';

    // --- Саб-объекты ---
    const sortedSubObjects = subObjects
        .map(subId => sortedAttractions.find(a => a.id === subId))
        .filter(Boolean)
        .sort(sortByFilters);

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        countryPath && datas.countries[countryPath]?.[lang] ? { label: datas.countries[countryPath][lang], path: `/${countryPath}` } : null,
        regionPath && datas.regions[regionPath]?.[lang] ? { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` } : null,
        districtPath && districtPath !== "city" && datas.districts[districtPath]?.[lang]
            ? { label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }
            : null,
        city?.subRegionName ? { label: city.subRegionName } : null,
        cityPath ? {
            label: datas.cities[cityPath]?.[lang], path: districtPath === "city"
                ? `/${countryPath}/${regionPath}/city/${cityPath}`
                : `/${countryPath}/${regionPath}/${districtPath}/${cityPath}`
        } : null,
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

            {showKolnTowers && <KolnTowers city={city} lang={lang} />}

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
                        <h3>{lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки"}</h3>
                        {subObjects.length > 5 && <AttractionsFilters lang={lang} filters={filters} setFilters={setFilters} />}

                        {sortedSubObjects.map(attr => (
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