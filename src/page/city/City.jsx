import { Link, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";
// import { photosByCountry } from "../../datas/fotos/index.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import './City.scss'
import BtnAttr from '../../components/btn-attr/BtnAttr.jsx';
// import useCity from '../../hooks/useCity.js';
import useEvents from '../../hooks/useEvents.js';
import datas from '../../datas/minimalIndex.js'
import { useEffect, useState } from 'react';
import { getCity } from '../../api/api.js';
import { TextBlock } from '../../components/renders/TextBlock.jsx';
import { getEntityName, prepareEntityBlocks } from '../../utils/entityHelpers.js';
import { PhotoBlock } from '../../components/renders/PhotoBlock.jsx';
import { toFullUrl } from '../../utils/photo.js';
import { MapBlock } from '../../components/renders/MapBlock.jsx';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const City = () => {
    const { countryPath, regionPath, districtPath, cityPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    // const { city, error } = useCity(countryPath, regionPath, districtPath, cityPath);
    const { events } = useEvents(countryPath, regionPath, districtPath, cityPath);

    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);
    const { blocks, langData } = prepareEntityBlocks(city?.blocks);
    const meta = city?.meta;

    // фетч запрос
    useEffect(() => {
        if (!cityPath) return;

        let active = true;

        getCity(cityPath, lang)
            .then(data => {
                if (active) setCity(data);
            })
            .catch(err => setError(err.message));

        return () => {
            active = false;
        };
    }, [cityPath, lang]);

    if (error) return <p>{error}</p>;
    if (!city) return <p>Loading...</p>;

    const getPhoto = (index) => city.photos?.find(p => p.sort_order === index);

    const cityEvents = events?.filter(ev => ev.cities?.includes(cityPath)) || [];

    const context = {
        lang,
        langData,
        countryPath, regionPath, districtPath, cityPath,
        city,
        path: `/${countryPath}/${regionPath}/attractions`,
        classPrefix: "city",
        photos: {
            photo_1: getPhoto(1),
            photo_2: getPhoto(2),
        },
        photoClasses: {
            photo_1: "city__gerb",
            photo_2: "city__photo city__photo--left",
            photo_3: "city__photo",
        }
    };

    const blockRegistry = {
        // name: TextBlock,
        capital: TextBlock,
        population: TextBlock,
        area: TextBlock,
        code: TextBlock,
        phone: TextBlock,
        culture: TextBlock,
        officialSite: TextBlock,
        admin: TextBlock,
        notablePeople: TextBlock,
        geography: TextBlock,
        interestingFacts: TextBlock,
        briefHistory: TextBlock,

        photo_1: PhotoBlock,
        photo_2: PhotoBlock,
        photo_3: PhotoBlock,

        map: MapBlock,
        path: `/${countryPath}/${regionPath}/${districtPath}/${cityPath}/attractions`,
    };

const renderBlock = (block) => {
    const Renderer = blockRegistry[block.block_key];
    if (!Renderer) return null;

    return (
        <Renderer
            block={block}
            photo={getPhoto(Number(block.block_key.replace("photo_", "")))}
            className={context.photoClasses[block.block_key]}
            {...context}
        />
    );
};

const cityName = getEntityName(city);
    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
        { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` },
        ...(districtPath !== "city" ? [{ label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }] : []),
        ...(districtPath !== "city" ? [{ label: datas.subRegions[city.parent_path][lang] }] : []),
        { label: cityName || "" }
    ];

    return (
        <div className='city'>

            {meta && (
                <Helmet>
                    <title>{meta.title || datas.regions[regionPath][lang]}</title>
                    <meta name="title" content={meta.title} />
                    <meta name="description" content={meta.description} />
                    <meta property="og:title" content={meta.og_title} />
                    <meta property="og:description" content={meta.og_description} />
                    <meta property="og:image" content={toFullUrl(meta.og_image)} />
                </Helmet>
            )}

            {city && (
                <>
                    

                    <div className='city__container'>

                        <BreadCrumbs crumbs={crumbs} />

                        <h1 className='city__name'>{cityName}</h1>

                        <BtnAttr lang={lang} path={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/attractions`} />

                        <section className="city__content">

                            {blocks?.length > 0 && blocks.map(block => (
                                <div key={block.block_key}>
                                    {renderBlock(block)}
                                </div>
                            ))}
                        </section>

                        {/* ------------------- Раздел мероприятий ------------------- */}
                        {cityEvents && cityEvents.length > 0 && (
                            <div className="city__events">

                                <h2 className="city__events-title"> {lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи"} </h2>

                                {/* ===== TABLE (desktop) ===== */}
                                <table className="city__events-table">
                                    <thead>
                                        <tr>
                                            <th>{lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}</th>
                                            <th>{lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}</th>
                                            <th>{lang === "ru" ? "Даты" : lang === "de" ? "Datum" : "Дати"}</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cityEvents.map(ev => (
                                            <tr key={ev.id}>
                                                <td><Link to={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/events/${ev.path}`}>{ev.name}</Link> </td>
                                                <td>{ev.short_description}</td>
                                                <td>{ev.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                                {/* ===== CARDS (mobile) ===== */}
                                <div className="city-events-cards">
                                    {cityEvents.map(ev => (
                                        <div key={ev.id} className="city-events-card">

                                            <div className="city-events-row">
                                                <strong>{lang === "ru" ? "Название:" : lang === "de" ? "Name:" : "Назва:"}</strong>{" "}
                                                <Link to={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/events/${ev.path}`}> {ev.name} </Link>
                                            </div>

                                            <div className="city-events-row">
                                                {ev.short_description}
                                            </div>

                                            <div className="city-events-row">
                                                <strong>{lang === "ru" ? "Даты:" : lang === "de" ? "Datum:" : "Дати:"}</strong>{" "}{ev.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* ---------------------------------------------------------- */}

                    </div>
                </>
            )}
        </div>
    )
}

export default City