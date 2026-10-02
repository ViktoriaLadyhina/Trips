import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from 'react';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import { getEvent } from '../../api/api.js';
import datas from '../../datas/minimalIndex.js'
import SkeletonRenderer from '../../components/skeleton/SkeletonRenderer.jsx';
import './Events.scss'
import { prepareEntityBlocks } from '../../utils/entityHelpers.js';
import { TextBlock } from '../../components/renders/TextBlock.jsx';
import { PhotoBlock } from '../../components/renders/PhotoBlock.jsx';
import { ItemBlock } from '../../components/renders/ItemBlock.jsx';
import MysqlGallery from '../../components/gallery/MysqlGallery.jsx';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const period = { ru: "Период", ua: "Період", de: "Zeitraum" }
const location = { ru: "Место проведения", ua: "Місце проведення", de: "Veranstaltungsort" }

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
            hasPhoto: false,
        }
    },
    {
        type: "text", props: {
            hasTitle: true,
            lines: 6,
            hasPhoto: false,
        }
    },
    {
        type: "text", props: {
            hasTitle: true,
            lines: 5,
            hasPhoto: false,
        }
    },
];

const Event = () => {
    const { countryPath, regionPath, districtPath, cityPath, eventPath } = useParams();
    const { lang } = useSelector((state) => state.language);

    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { blocks, langData } = prepareEntityBlocks(event?.blocks);
    const meta = event?.meta;

    useEffect(() => {
        if (!eventPath) return;

        let active = true;

        setLoading(true);
        setEvent(null);
        setError(null);

        getEvent(eventPath, lang)
            .then(data => {
                if (active) {
                    setEvent(data);
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

    }, [eventPath, lang]);


    const context = {
        lang,
        langData,
        classPrefix: "event"
    };

    const blockRegistry = {
        officialSite: TextBlock,
        full_description: TextBlock,
        item_title: TextBlock,
        item: ItemBlock,
        interestingFacts: TextBlock
    };


    const renderBlock = block => {
        const Renderer = blockRegistry[block.block_key];

        if (!Renderer) { return null; }

        return (
            <Renderer key={block.id} block={block} {...context} />
        );
    };



    if (error) return <p>{error}</p>;

    if (loading || !event) {
        return (
            <SkeletonRenderer blocks={SkeletonList} />
        );
    }


    //Хлебные крошки
    // const crumbs = [
    //     { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    //     countryPath ? { label: datas.countries[countryPath][lang], path: `/${countryPath}` } : null,
    //     regionPath ? { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` } : null,
    //     ...(districtPath !== "city" ? [{ label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }] : []),
    //     ...(districtPath !== "city" ? [{ label: events.subRegionName }] : []),
    //     cityPath ? { label: datas.cities[cityPath][lang], path: `/${countryPath}/${regionPath}/${districtPath ? districtPath + '/' : ''}${cityPath}` } : null,
    //     { label: lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи", },
    //     event ? { label: event.name } : null
    // ].filter(Boolean);


    return (
        <div className="event">

            {meta && (
                <Helmet>
                    <title>{meta.title}</title>

                    <meta name="description" content={meta.description} />

                    <meta property="og:title" content={meta.ogTitle} />
                    <meta property="og:description" content={meta.ogDescription} />
                    <meta property="og:image" content={meta.ogImage} />
                </Helmet>
            )}

            {/* <BreadCrumbs crumbs={crumbs} /> */}

            <h1 className='event__title'>{langData?.name}</h1>
            <div className='event__desc'>

                <div className='event__desc-foto'>
                    {event.mainPhoto && (
                        <img
                            src={`${BASE_PHOTO_URL}${event.mainPhoto.path}`}
                            alt={event.mainPhoto.title?.[lang] || ""}
                        />
                    )}
                </div>

                <div className="event__date">
                    <span className="event__date-bold">{period[lang]}</span>: {langData?.date}
                </div>

                <div className="event__date">
                    <span className="event__date-bold">{location[lang]}</span>:
                    {' '}{event.location?.loc?.city}, {event.location?.loc?.country}
                </div>

                {blocks.length > 0 && (
                    blocks.map(block => (
                        <div key={block.id || block.block_key}>
                            {renderBlock(block)}
                        </div>
                    ))
                )}

                {event.photos?.length > 0 && (
                    <MysqlGallery images={event.photos} lang={lang} />
                )}

            </div>
        </div>
    )
}

export default Event