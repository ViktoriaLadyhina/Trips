import { useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useSelector } from 'react-redux';

import './Routes.scss'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import AttractionCardSub from '../../components/attraction/AttractionCardSub.jsx';
import FilteredMap from '../../components/maps/attr/filteredMap.jsx';
import { useEffect, useState } from 'react';
import { getRoute } from '../../api/api.js';
import { toFullUrl } from '../../utils/photo.js';
import datas from '../../datas/minimalIndex.js';
import { prepareEntityBlocks } from '../../utils/entityHelpers.js';
import { TextBlock } from '../../components/renders/TextBlock.jsx';
import { PhotoBlock } from '../../components/renders/PhotoBlock.jsx';
import SkeletonRenderer from '../../components/skeleton/SkeletonRenderer.jsx';
import MysqlGallery from '../../components/gallery/MysqlGallery.jsx';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const SkeletonList = [
    { type: "title" },
    {
        type: "text", props: {
            hasTitle: false,
            lines: 4,
            hasPhoto: true,
            photoPosition: "right",
        }
    },
    {
        type: "text", props: {
            hasTitle: false,
            lines: 6,
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
            hasTitle: false,
            lines: 6,
            hasPhoto: true,
            photoPosition: "right",
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

const Routes = () => {
    const { routesPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [route, setRoute] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const meta = route?.meta;
    const { blocks, langData } = prepareEntityBlocks(route?.blocks || []);

    useEffect(() => {
        if (!routesPath) return;

        let active = true;

        setLoading(true);
        setRoute(null);
        setError(null);

        getRoute(routesPath, lang)
            .then(data => {

                if (active) {
                    setRoute(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (active) {
                    setError(err.message);
                    setLoading(false);
                }
            });


        return () => {
            active = false;
        };

    }, [routesPath, lang]);

    // MYSQL BLOCKS
    const context = {
        lang,
        langData,
        classPrefix: "route",
        photo: route?.mainPhoto,
        className: 'route__photo'
    };

    const blockRegistry = {
        name: TextBlock,
        map: () => (
            route?.mapOpen
                ? (
                    <FilteredMap
                        map={route.mapOpen}
                        routeAttractions={route.subObjects}
                    />
                )
                : null
        ),
        full_description: TextBlock,
        practical_info: TextBlock,
        photo: PhotoBlock,
        features: TextBlock,
        recommendations: TextBlock,
        interestingFacts: TextBlock,
    };


    const renderBlock = block => {
        const Renderer = blockRegistry[block.block_key];

        if (!Renderer) { return null; }

        return (
            <Renderer key={block.id} block={block} {...context} />
        );
    };

    // subAttractions
    const attractionRoute = route?.subObjects?.filter(r => r?.routes === route.path);

    if (error) return <p>{error}</p>;
    if (loading || !route) {
        return (
            <SkeletonRenderer blocks={SkeletonList} />
        );
    }

    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: route?.countryName, path: `/${route?.countryPath}` },
        { label: datas.routes[routesPath][lang] }
    ];

    return (
        <div className="route">

            {meta && (
                <Helmet>
                    <title>{meta.title || datas.routes[routesPath][lang]}</title>
                    <meta name="title" content={meta.title} />
                    <meta name="description" content={meta.description} />
                    <meta property="og:title" content={meta.og_title} />
                    <meta property="og:description" content={meta.og_description} />
                    <meta property="og:image" content={toFullUrl(meta.og_image)} />
                </Helmet>
            )}

            <BreadCrumbs crumbs={crumbs} />

            <section className="route__content">
                {blocks?.length > 0 && blocks.map(block => (
                    <div key={block.block_key}>
                        {renderBlock(block)}
                    </div>
                ))}
            </section>

            <div>
                {attractionRoute.length > 0 && (
                    <section className="attraction-sub">
                        <h3>
                            {lang === "ru"
                                ? `Достопримечательности маршрута «${datas.routes[routesPath][lang]}»`
                                : lang === "de"
                                    ? `Sehenswürdigkeiten der Route «${datas.routes[routesPath][lang]}»`
                                    : `Пам'ятки маршруту «${datas.routes[routesPath][lang]}»`}
                        </h3>
                        {attractionRoute.map(attr => (
                            <AttractionCardSub key={attr.id} attr={attr} lang={lang} />
                        ))}
                    </section>
                )}

                {route.photos?.length > 0 && (
                    <MysqlGallery images={route.photos} lang={lang} />
                )
                }
            </div>
        </div >
    )
}

export default Routes