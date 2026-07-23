import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';

import Gallery from '../../components/gallery/Gallery.jsx';
import { photosByCountry } from '../../datas/fotos/index.js';

import AttractionCardSub from '../../components/attraction/AttractionCardSub.jsx';
import AttractionsFilters from '../../components/attractionsFilters/AttractionsFilters.jsx';
import FilteredMap from '../../components/maps/attr/filteredMap.jsx';

import useAttractions from '../../hooks/useAttractions.js';
import datas from '../../datas/minimalIndex.js';
import { getAttraction } from '../../api/api.js';
import { TextBlock } from '../../components/renders/TextBlock.jsx';
import { PhotoBlock } from '../../components/renders/PhotoBlock.jsx';
import { prepareEntityBlocks } from '../../utils/entityHelpers.js';
import { toFullUrl } from '../../utils/photo.js';
import { cityLocations } from '../../datas/cityLocations.js';
import './Attraction.scss';
import { ItemBlock } from '../../components/renders/ItemBlock.jsx';
import MysqlGallery from '../../components/gallery/MysqlGallery.jsx';
import SkeletonRenderer from '../../components/skeleton/SkeletonRenderer.jsx';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;


// ------------------------------------
// STATIC TEXT
// ------------------------------------

const construction_periodTitle = {
    ru: 'Период строительства',
    uk: 'Період будівництва',
    de: 'Bauzeit'
};

const founderTitle = {
    ru: 'Основатель',
    uk: 'Засновник',
    de: 'Gründer'
};

const architectsTitle = {
    ru: 'Архитекторы',
    uk: 'Архітектори',
    de: 'Architekten'
};

const sculptorsTitle = {
    ru: 'Скульпторы',
    uk: 'Скульптори',
    de: 'Bildhauer'
};

const statusTitle = {
    ru: 'Состояние',
    uk: 'Стан',
    de: 'Zustand'
};

const noteLabel = {
    partial: {
        ru: 'Частично сохранилось',
        uk: 'Частково збережено',
        de: 'Teilweise erhalten'
    },

    lost: {
        ru: 'Утрачено',
        uk: 'Втрачено',
        de: 'Verloren'
    }
};

const SkeletonList = [
    { type: "title" },
    {
        type: "text", props: {
            hasTitle: false,
            lines: 4,
            hasPhoto: true,
            photoPosition: "left",
        }
    },
    {
        type: "text", props: {
            hasTitle: true,
            lines: 6,
            hasPhoto: false
        }
    },
    {
        type: "text", props: {
            hasTitle: true,
            lines: 5,
            hasPhoto: false
        }
    },
    {
        type: "text", props: {
            hasTitle: true,
            lines: 7,
            hasPhoto: false
        }
    },
];


const Attraction = () => {

    const { lang } = useSelector(state => state.language);

    const { countryPath, regionPath, districtPath, cityPath, attractionPath } = useParams();

    // STATIC ATTRACTIONS
    const { attractions, errorStatic } = useAttractions(countryPath, regionPath, districtPath, cityPath);

    // MYSQL ATTRACTION
    const [mysqlAttraction, setMysqlAttraction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { blocks, langData } = prepareEntityBlocks(mysqlAttraction?.blocks || []);

    // FILTERS
    const [subFilters, setSubFilters] = useState({
        type: 'all',
        feature: ['all'],
        rating: 'all',
        unesco: 'all',
        sort: 'rating',
        status: ['active', 'partial']
    });

    useEffect(() => {
        if (!attractionPath) { return; }

        const controller = new AbortController();

        const fetchAttraction = async () => {
            try {
                setLoading(true);
                const data = await getAttraction(attractionPath, lang, controller.signal);

                if (!controller.signal.aborted) {
                    setMysqlAttraction(data);
                }

            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };
        fetchAttraction();

        return () => {
            controller.abort();
        };

    }, [attractionPath, lang]);


    // STATIC ATTRACTION
    const attraction = attractions?.find(item => item.path === attractionPath);

    // MYSQL BLOCKS
    const context = {
        lang,
        langData,
        classPrefix: "attraction",
        photo: mysqlAttraction?.mainPhoto,
        className: 'attraction__photo'
    };

    const blockRegistry = {
        name: TextBlock,
        map: () => (
            mysqlAttraction?.mapOpen
                ? <FilteredMap map={mysqlAttraction.mapOpen} />
                : null
        ),
        photo: PhotoBlock,
        founder: TextBlock,
        construction_period: TextBlock,
        architects: TextBlock,
        sculptors: TextBlock,
        status: TextBlock,
        practical_info: TextBlock,
        full_description: TextBlock,
        legends: TextBlock,
        item_title: TextBlock,
        item: ItemBlock,
        interestingFacts: TextBlock,
        officialSite: TextBlock
    };


    const renderBlock = block => {
        const Renderer = blockRegistry[block.block_key];

        if (!Renderer) { return null; }

        return (
            <Renderer key={block.id} block={block} {...context} />
        );
    };

    const mysqlSubObjects = mysqlAttraction?.subObjects || [];
    const subObjectsIntro = mysqlAttraction?.blocks?.find(
        block => block.block_key === 'subObjects_intro'
    )?.content;

    const stripOuterP = (html) => {
        if (!html) return '';

        return html
            .replace(/^\s*<p[^>]*>/i, '')
            .replace(/<\/p>\s*$/i, '');
    };


    // STATIC PHOTOS
    const staticPhotos = photosByCountry[countryPath];
    const staticAttractionPhotos = staticPhotos?.[regionPath]?.[cityPath]?.[attractionPath] || [];
    const staticImages = staticAttractionPhotos.map(photo => ({
        src: `${BASE_PHOTO_URL}${photo.path}`,
        alt: photo.title?.[lang] || ''
    }));


    // META
    const meta = attraction?.meta;
    const mysqlMeta = mysqlAttraction?.meta;

    // LOADING / ERRORS
    if (errorStatic) { return <p>{errorStatic}</p>; }
    if (error) { return <p>{error}</p>; }
    if (loading || !attractions) {
        return (
            <SkeletonRenderer blocks={SkeletonList} />
        );
    }


    // STATIC SUB-OBJECTS
    const subObjects = attraction?.subObjects || [];
    const subObjects2 = attraction?.subObjects2 || [];

    const applyFilters = list => {
        return list
            .map(id =>
                attractions.find(item => item.id === id)
            ).filter(Boolean)
            .filter(attr => {
                if (subFilters.type !== 'all' && !attr.type?.includes(subFilters.type)) {
                    return false;
                }

                if (subFilters.feature?.length > 0 &&
                    !subFilters.feature.includes('all') &&
                    !subFilters.feature.some(feature => attr.feature?.includes(feature)
                    )
                ) {
                    return false;
                }

                if (subFilters.rating !== 'all' && attr.rating !== subFilters.rating) {
                    return false;
                }

                if (subFilters.unesco === 'yes' && !attr.unesco_status?.included) {
                    return false;
                }

                if (subFilters.unesco === 'no' && attr.unesco_status?.included) {
                    return false;
                }

                const status = attr.status ?? 'active';

                if (!subFilters.status.includes(status)) {
                    return false;
                }

                return true;
            });
    };

    const filteredSubObjects = applyFilters(subObjects);
    const filteredSubObjects2 = applyFilters(subObjects2);

    // SORT
    const sortFn = (a, b) => {
        if (subFilters.sort === 'name-asc') {
            return (a?.name || '').localeCompare(b?.name || '');
        }

        if (subFilters.sort === 'name-desc') {
            return (b?.name || '').localeCompare(a?.name || '');
        }

        const ratingOrder = {
            top: 3,
            popular: 2,
            local: 1
        };

        const diff =
            (ratingOrder[b.rating] || 0) -
            (ratingOrder[a.rating] || 0);

        return (
            (a.sortIndex ?? 0) -
            (b.sortIndex ?? 0)
        ) || diff || (a.name || ''
        ).localeCompare(b.name || '');
    };

    const sortedSubObjects = [...filteredSubObjects].sort(sortFn);
    const sortedSubObjects2 = [...filteredSubObjects2].sort(sortFn);

    const showFilters = subObjects.length + subObjects2.length >= 5;

    const staticSubRegionPath = cityLocations[cityPath]?.subRegionPath || null;

    const subRegionName = mysqlAttraction?.loc?.subRegion ||
        datas.subRegions[staticSubRegionPath]?.[lang];

    // BREADCRUMBS
    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },

        countryPath && datas.countries[countryPath]?.[lang] ?
            { label: datas.countries[countryPath][lang], path: `/${countryPath}` }
            : null,

        regionPath && datas.regions[regionPath]?.[lang] ?
            { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` }
            : null,

        districtPath && districtPath !== 'city' && datas.districts[districtPath]?.[lang] ?
            { label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }
            : null,

        subRegionName ?
            { label: subRegionName }
            : null,

        cityPath ?
            {
                label: datas.cities[cityPath]?.[lang], path: districtPath === 'city'
                    ? `/${countryPath}/${regionPath}/city/${cityPath}`
                    : `/${countryPath}/${regionPath}/${districtPath}/${cityPath}`
            }
            : null,

        { label: datas.attractions[attractionPath]?.[lang] }

    ].filter(Boolean);



    return (

        <>
            {attraction ? (

                // STATIC ATTRACTION

                <div className="attraction">
                    {meta && (
                        <Helmet>
                            <title> {attraction.name || meta.title} </title>

                            <meta name="description" content={meta.description} />
                            {meta.keywords && (<meta name="keywords" content={meta.keywords} />)}
                            <meta property="og:title" content={meta.ogTitle} />
                            <meta property="og:description" content={meta.ogDescription} />
                            <meta property="og:image" content={meta.ogImage} />
                        </Helmet>
                    )}

                    <BreadCrumbs crumbs={crumbs} />

                    <h1 className="attraction__name"> {attraction.name} </h1>

                    {attraction.mapOpen && (
                        <FilteredMap map={attraction.mapOpen} />
                    )
                    }

                    <div className="attraction__desc">
                        <div className="attraction__desc-foto">
                            {attraction.fotoCard && (
                                <img
                                    src={`${BASE_PHOTO_URL}${attraction.fotoCard}`}
                                    alt={attraction.name}
                                />
                            )
                            }
                        </div>

                        {attraction.founder && (
                            <div className="attraction__desc-founder">
                                <span className="attraction__desc-founder-bold">{founderTitle[lang]}: </span>
                                <span className="attraction__desc-founder-text">{' '} {attraction.founder} </span>
                            </div>
                        )
                        }

                        {attraction.construction_period && (
                            <div className="attraction__desc-construction_period">
                                <span className="attraction__desc-construction_period-bold"> {construction_periodTitle[lang]}: </span>
                                <span className="attraction__desc-construction_period-text"> {' '} {attraction.construction_period} </span>
                            </div>
                        )
                        }

                        {attraction.architects && (
                            <div className="attraction__desc-architects">
                                <span className="attraction__desc-architects-bold"> {architectsTitle[lang]}: </span>
                                <span className="attraction__desc-architects-text"> {attraction.architects} </span>
                            </div>
                        )
                        }

                        {attraction.sculptors && (
                            <div className="attraction__desc-architects">
                                <span className="attraction__desc-architects-bold"> {sculptorsTitle[lang]}: </span>
                                <span className="attraction__desc-architects-text"> {attraction.sculptors} </span>
                            </div>
                        )
                        }

                        {attraction.status && (
                            <div className="attraction__desc-architects">
                                <span className="attraction__desc-architects-bold"> {statusTitle[lang]}: </span>
                                <span className="attraction__desc-architects-text">
                                    {noteLabel[attraction.status]?.[lang]}
                                    {attraction.note && (
                                        <> {', '} {attraction.note} </>
                                    )}
                                </span>
                            </div>
                        )
                        }

                        {attraction.tickets_and_entry && (
                            <InfoBlock data={attraction.tickets_and_entry}
                                className="attraction__desc-tickets_and_entry"
                            />
                        )
                        }

                        {attraction.practical_info && (
                            <InfoBlock data={attraction.practical_info}
                                className="attraction__desc-practical_info"
                            />
                        )
                        }

                        {attraction.address && (
                            <InfoBlock data={attraction.address}
                                className="attraction__desc-address"
                            />
                        )
                        }

                        {attraction.full_description && (
                            <InfoBlock data={attraction.full_description}
                                className="attraction__desc-full_description"
                            />
                        )
                        }

                        {attraction.legends && (
                            <InfoBlock data={attraction.legends}
                                className="attraction__desc-full_description"
                            />
                        )
                        }

                        {attraction.sub_objects && (
                            <InfoBlock data={attraction.sub_objects}
                                className="attraction__desc-sub_objects"
                            />
                        )
                        }

                        {attraction.relics && (
                            <InfoBlock data={attraction.relics}
                                className="attraction__desc-relics"
                            />
                        )
                        }

                        {attraction.hotels && (
                            <InfoBlock data={attraction.hotels}
                                className="attraction__desc-hotels"
                            />
                        )
                        }

                        {attraction.interestingFacts && (
                            <InfoBlock data={attraction.interestingFacts}
                                className="attraction__desc-interestingFacts"
                            />
                        )
                        }

                        {subObjects.length > 0 && (
                            <section className="attraction-sub">
                                <h3> {attraction.subObjects_title ||
                                    (lang === 'ru' ? 'Достопримечательности' : lang === 'de' ? 'Sehenswürdigkeiten' : 'Пам’ятки')
                                }
                                </h3>

                                {showFilters && (
                                    <AttractionsFilters lang={lang} filters={subFilters} setFilters={setSubFilters} />
                                )
                                }

                                {sortedSubObjects.map(attr => (
                                    <AttractionCardSub key={attr.id} attr={attr} lang={lang} />
                                )
                                )
                                }
                            </section>
                        )
                        }

                        {subObjects2.length > 0 && (
                            <section className="attraction-sub">
                                <h3> {attraction.subObjects_title2 ||
                                    (lang === 'ru' ? 'Достопримечательности' : lang === 'de' ? 'Sehenswürdigkeiten' : 'Пам’ятки')
                                }
                                </h3>

                                {sortedSubObjects2.map(attr => (
                                    <AttractionCardSub key={attr.id} attr={attr} lang={lang} />
                                )
                                )
                                }
                            </section>
                        )
                        }

                        {attraction.officialSite && (
                            <InfoBlock data={attraction.officialSite}
                                className="attraction__desc-officialSite"
                            />
                        )
                        }

                        {staticImages.length > 0 && (
                            <Gallery images={staticImages} />
                        )
                        }

                    </div>
                </div>


            ) : mysqlAttraction ? (


                // MYSQL ATTRACTION
                <div className="attraction">
                    {mysqlMeta && (
                        <Helmet>
                            <title>{mysqlMeta.title || datas.regions[regionPath][lang]}</title>
                            <meta name="title" content={mysqlMeta.title} />
                            <meta name="description" content={mysqlMeta.description} />
                            <meta property="og:title" content={mysqlMeta.og_title} />
                            <meta property="og:description" content={mysqlMeta.og_description} />
                            <meta property="og:image" content={toFullUrl(mysqlMeta.og_image)} />
                        </Helmet>
                    )}

                    <BreadCrumbs crumbs={crumbs} />

                    <h1 className="attraction__title"> {mysqlAttraction.name}  </h1>

                    <div className="attraction__desc">
                        {
                            blocks.length > 0 && (
                                blocks.map(block => (
                                    <div key={block.id || block.block_key} >
                                        {renderBlock(block)}
                                    </div>
                                ))
                            )
                        }

                        {mysqlSubObjects.length > 0 && (
                            <section className="attraction-sub">
                                <h3> {subObjectsIntro ? stripOuterP(subObjectsIntro)
                                    : (lang === 'ru' ? 'Достопримечательности' : lang === 'de' ? 'Sehenswürdigkeiten' : 'Пам’ятки')
                                }
                                </h3>

                                {mysqlSubObjects.map(attr => (
                                    <AttractionCardSub
                                        key={attr.id}
                                        attr={attr}
                                        lang={lang}
                                    />
                                ))}
                            </section>
                        )}

                        {mysqlAttraction.photos?.length > 0 && (
                            <MysqlGallery images={mysqlAttraction.photos} lang={lang} />
                        )
                        }
                    </div>
                </div>

            ) : loading ? (

                <p>Loading...</p>

            ) : (

                <p>Attraction not found</p>

            )}

        </>

    );

};


export default Attraction;