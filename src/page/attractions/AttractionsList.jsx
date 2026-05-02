import { useParams } from 'react-router';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import AttractionCard from '../../components/attraction/AttractionCard.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import AttrMap from '../../components/maps/attr/AttrMap.jsx';

import useAttractions from '../../hooks/useAttractions.js';
import useAllAttractions from '../../hooks/useAllAttractions.js';
import useCity from '../../hooks/useCity.js';
import useSabRegions from '../../hooks/useSabRegions.js';
import useAttractionFilters from '../../hooks/useAttractionFilters.js';

import datas from '../../datas/minimalIndex';

import './Attractions.scss';


const attractionsTitle = { ru: "Достопримечательности", ua: "Пам'ятки", de: "Sehenswürdigkeiten" };
const NoAttractions = { ru: "Нет достопримечательностей", ua: "Достопримечательностей немає", de: "Keine Sehenswürdigkeiten" };
const showAllText = {
    ru: { true: "Показать только текущее", false: "Показать все" },
    ua: { true: "Показати тільки поточні", false: "Показати все" },
    de: { true: "Nur aktuelle anzeigen", false: "Alle anzeigen" }
};

const AttractionsList = () => {
    const { lang } = useSelector((state) => state.language);
    const { countryPath, regionPath, districtPath, cityPath } = useParams();

    const { subRegion } = useSabRegions(countryPath, regionPath, districtPath);
    const { city } = useCity(countryPath, regionPath, districtPath, cityPath);
    const { attractions, error } = useAttractions(countryPath, regionPath, districtPath, cityPath);
    const { attractions: allAttractions } = useAllAttractions();

    const [showAll, setShowAll] = useState(false);

    const [filters, setFilters] = useState({
        type: 'all',
        rating: 'all',
        unesco: 'all',
        sort: 'rating',
        status: ['active', 'partial'],
    });

    const base = attractionsTitle[lang];

    const locationName =
        datas.districts[districtPath]?.[lang] ||
        subRegion?.name ||
        datas.regions[regionPath]?.[lang] ||
        datas.countries[countryPath]?.[lang] ||
        '';

    const meta = {
        title: locationName ? `${base} – ${locationName}` : base,
        description: {
            ru: `Список достопримечательностей в ${locationName || 'регионе'}`,
            ua: `Список пам’яток у ${locationName || 'регіоні'}`,
            de: `Liste der Sehenswürdigkeiten in ${locationName || 'der Region'}`
        }[lang]
    };


    const attrMap = useMemo(() => {
        return new Map((attractions || []).map(a => [a.id, a]));
    }, [attractions]);

    //фильтрация
    const baseFiltered = useAttractionFilters({
        attractions,
        filters,
        cityPath,
        districtPath,
        attrMap,
    });

    const mapAttractions = baseFiltered;

    const listAttractions = useMemo(() => {
        return baseFiltered.filter(attr => {
            if (attr.hiddenFromList && filters.unesco !== 'yes') return false;
            return true;
        });
    }, [baseFiltered, filters.unesco]);

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
    const visibleAttractions = showAll ? allAttractions : mapAttractions;

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
        city?.subRegionName ? { label: city.subRegionName } : null,
        city?.name
            ? {
                label: city.name,
                path: `/${countryPath}/${regionPath}/${districtPath}/${city.path}`
            }
            : null,
        { label: attractionsTitle[lang] }
    ].filter(Boolean);


    if (error) return <p>{error}</p>;
    if (!attractions) return <p>Loading...</p>;

    return (
        <div className="attractions">
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Helmet>

            <BreadCrumbs crumbs={crumbs} />

            <div className="attractions__title">
                {attractionsTitle[lang]}
            </div>

            <div className="map-wrapper">
                <AttrMap city={city} attractions={visibleAttractions} lang={lang} />

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