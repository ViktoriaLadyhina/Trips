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

import datas from '../../datas/minimalIndex';

import './Attractions.scss';

const attractionsTitle = {
    ru: "Достопримечательности",
    ua: "Пам'ятки",
    de: "Sehenswürdigkeiten"
};

const NoAttractions = {
    ru: "Нет достопримечательностей",
    ua: "Достопримечательностей немає",
    de: "Keine Sehenswürdigkeiten"
};

const showAllText = {
    ru: {
        true: "Показать только текущее",
        false: "Показать все"
    },
    ua: {
        true: "Показати тільки поточні",
        false: "Показати все"
    },
    de: {
        true: "Nur aktuelle anzeigen",
        false: "Alle anzeigen"
    }
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
        unesco: 'all',
        sort: 'rating',
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

    const unescoChildIds = useMemo(() => {
        const set = new Set();

        (attractions || []).forEach(a => {
            a.subObjects?.forEach(id => {
                const sub = attrMap.get(id);
                if (sub?.unesco_status?.included) {
                    set.add(id);
                }
            });
        });

        return set;
    }, [attractions, attrMap]);

//фильтрация
    const baseFiltered = useMemo(() => {
        if (!attractions) return [];

        return attractions.filter(attr => {
            if (!attr) return false;

            if (cityPath && attr.cityPath !== cityPath) return false;
            if (districtPath && attr.districtPath !== districtPath) return false;

            const allTypes = [
                ...(attr.type || []),
                ...(attr.subObjects || [])
                    .map(id => attrMap.get(id)?.type || [])
                    .flat()
            ];

            if (filters.type !== 'all' && !allTypes.includes(filters.type)) return false;

            if (filters.unesco === 'yes') {
                const isDirect = attr.unesco_status?.included;
                const isChild = unescoChildIds.has(attr.id);

                if (!isDirect && !isChild) return false;
            }

            return true;
        });
    }, [
        attractions,
        cityPath,
        districtPath,
        filters.type,
        filters.unesco,
        attrMap,
        unescoChildIds
    ]);

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
                path: `/${countryPath}/${regionPath}${districtPath && districtPath !== "city" ? '/' + districtPath : ''}/${city.path}`
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