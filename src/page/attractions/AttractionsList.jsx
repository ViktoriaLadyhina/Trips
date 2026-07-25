import { useParams } from 'react-router';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import AttractionCard from '../../components/attraction/AttractionCard.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import AttrMap from '../../components/maps/attr/AttrMap.jsx';

import useAttractionFilters from '../../hooks/useAttractionFilters.js';
import useCombinedAttractions from '../../hooks/useCombinedAttractions.js';
import SkeletonRenderer from '../../components/skeleton/SkeletonRenderer.jsx';
import datas from '../../datas/minimalIndex.js';

import './Attractions.scss';


const attractionsTitle = {
    ru: "Список достопримечательностей",
    uk: "Список пам'яток",
    de: "Liste der Sehenswürdigkeiten"
};
const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "Keine Sehenswürdigkeiten" };
const showAllText = {
    ru: { true: "Показать только текущее", false: "Показать все" },
    uk: { true: "Показати тільки поточні", false: "Показати все" },
    de: { true: "Nur aktuelle anzeigen", false: "Alle anzeigen" }
};


const AttractionsList = () => {
    const { lang } = useSelector((state) => state.language);
    const { countryPath, regionPath, districtPath, cityPath } = useParams();

    const { mergedAttractions: attractions, mergedAllAttractions: allAttractions, loading, error } = useCombinedAttractions(countryPath, regionPath, districtPath, cityPath);

    const [showAll, setShowAll] = useState(false);

const [filters, setFilters] = useState({
    type: 'all',
    feature: ['all'],
    rating: 'all',
    unesco: 'all',
    sort: 'rating',
    status: ['active', 'partial'],
});

    const SkeletonList = [
        { type: "title" },
        { type: "map" },
        { type: "attractionCards", props: { count: 6 } }
    ];

    const base = attractionsTitle[lang];

    //фильтрация
    const baseFiltered = useAttractionFilters({
        attractions,
        filters,
        cityPath,
        districtPath
    });

    const mapAttractions = baseFiltered;

    const hiddenFromListIds = useMemo(() => {
    const ids = new Set();

    (attractions || []).forEach(attr => {
        (attr.subObjects || []).forEach(subObject => {
            if (subObject?.id) {
                ids.add(subObject.id);
            }
        });
    });

    return ids;
}, [attractions]);

  const listAttractions = useMemo(() => {
    return baseFiltered.filter(attr => {

        const hidden =
            attr.hiddenFromList || hiddenFromListIds.has(attr.id);

        const specificFilterSelected =
            filters.type !== 'all' ||
            filters.unesco === 'yes';

        if (hidden && !specificFilterSelected) {
            return false;
        }

        return true;
    });
}, [
    baseFiltered,
    hiddenFromListIds,
    filters.type,
    filters.unesco
]);

    //сортировка
    const sortedAttractions = useMemo(() => {
        const ratingOrder = { top: 3, popular: 2, local: 1 };

        const data = [...listAttractions];

        return data.sort((a, b) => {
            if (filters.sort === 'name-asc')
                return (a?.name || '').localeCompare(b?.name || '');

            if (filters.sort === 'name-desc')
                return (b?.name || '').localeCompare(a?.name || '');

            const diff =
                (ratingOrder[b.rating] || 0) -
                (ratingOrder[a.rating] || 0);

            if (diff !== 0) return diff;

            return (a?.name || '').localeCompare(b?.name || '');
        });
    }, [listAttractions, filters.sort]);


    // для карты
    const visibleAttractions = showAll
        ? (allAttractions ?? [])
        : (mapAttractions ?? []);

    const city = cityPath ? datas.cities[cityPath] : null;

    const subRegionPath =
        districtPath !== 'city'
            ? attractions.find(attr => attr.subRegionPath)?.subRegionPath || null
            : null;

    const subRegion = subRegionPath
        ? datas.subRegions[subRegionPath]
        : null;

    const locationName =
        city?.[lang] ||
        (
            districtPath !== 'city'
                ? datas.districts[districtPath]?.[lang]
                : null
        ) ||
        datas.regions[regionPath]?.[lang] ||
        datas.countries[countryPath]?.[lang] ||
        '';

    const meta = {
        title: locationName ? `${base} – ${locationName}` : base,
        description: {
            ru: `Список достопримечательностей в ${locationName || 'регионе'}`,
            uk: `Список пам’яток у ${locationName || 'регіоні'}`,
            de: `Liste der Sehenswürdigkeiten in ${locationName || 'der Region'}`
        }[lang]
    };

    if (error) return <p>{error}</p>;

    if (loading || !attractions) {
        return (
            <SkeletonRenderer blocks={SkeletonList} />
        );
    }

    // хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        countryPath && datas.countries[countryPath]?.[lang]
            ? { label: datas.countries[countryPath][lang], path: `/${countryPath}` }
            : null,
        regionPath && datas.regions[regionPath]?.[lang]
            ? { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` }
            : null,
        districtPath && districtPath !== "city" && datas.districts[districtPath]?.[lang]
            ? { label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }
            : null,
        subRegion ? { label: subRegion[lang] } : null,
        city ? { label: city[lang], path: `/${countryPath}/${regionPath}/${districtPath}/${cityPath}` }
            : null,
        { label: `${attractionsTitle[lang]} – ${locationName}` }
    ].filter(Boolean);

    
    return (
        <div className="attractions">
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Helmet>

            <BreadCrumbs crumbs={crumbs} />

            <h1 className="attractions__title"> {attractionsTitle[lang]} <br />  – {locationName}</h1>

            <div className="map-wrapper">
                <AttrMap attractions={visibleAttractions} lang={lang} />

                <button
                    className="attractions__btn"
                    onClick={() => setShowAll(prev => !prev)}
                >
                    {showAllText[lang][showAll]}
                </button>
            </div>

            <AttractionsFilters
                lang={lang}
                filters={filters}
                setFilters={setFilters}
            />

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
};

export default AttractionsList;