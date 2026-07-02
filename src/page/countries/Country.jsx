import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from 'react';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import useRoutes from '../../hooks/useRoutesSearch.js';
import { toFullUrl } from "../../utils/photo.js";
import { getCountry } from "../../api/api.js";

import './Country.scss'
import { PhotoBlock } from '../../components/renders/PhotoBlock.jsx';
import { TextBlock } from '../../components/renders/TextBlock.jsx';
import { MapBlock } from '../../components/renders/MapBlock.jsx';
import { RoutesBlock } from '../../components/renders/RoutesBlock.jsx';
import { getEntityName, prepareEntityBlocks } from '../../utils/entityHelpers.js';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const regionTitlesByType = {
    land: { ru: "Земли", uk: "Землі", de: "Bundesländer" },
    canton: { ru: "Кантоны", uk: "Кантони", de: "Kantone" },
    oblast: { ru: "Области", uk: "Області", de: "Regionen" }
};

const loadingCountry = { ru: "Загрузка страны...", de: "Land wird geladen...", uk: "Завантаження країни..." };

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { routes } = useRoutes(countryPath);
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const { blocks, langData } = prepareEntityBlocks(country?.blocks);

    // фетч запрос
    useEffect(() => {
        if (!countryPath) return;
        getCountry(countryPath, lang)
            .then(setCountry)
            .catch(err => setError(err.message))
    }, [countryPath, lang]);

    if (!country) return <p>Country not found</p>;

    if (error) return <p>{error}</p>;
    if (!country) return <div>{loadingCountry[lang]}</div>;

    const mapRegions = (country?.regions || []).map(region => ({
        id: region.id,
        path: region.path,
        hasInfo: Boolean(region.is_active),
        name: region?.name || ""
    }));
console.log("country", country);
    const getPhoto = (index) =>
        country.photos?.find(p => p.sort_order === index);

    const context = {
        lang,
        langData,
        countryPath,
        mapRegions,
        routes,
        path: `/${countryPath}/attractions`,
        classPrefix: "country",
        photos: {
            photo: getPhoto(1),
            photo2: getPhoto(2),
            photo3: getPhoto(3),
        },
        photoClasses: {
            photo: "country__photo",
            photo2: "country__photo country__photo--left",
            photo3: "country__photo"
        }
    };

    const blockRegistry = {
        name: TextBlock,
        capital: TextBlock,
        geography: TextBlock,
        population: TextBlock,
        language: TextBlock,
        administrative: TextBlock,
        government: TextBlock,
        currency: TextBlock,
        transport: TextBlock,
        climate: TextBlock,
        tourism: TextBlock,
        briefHistory: TextBlock,
        symbols: TextBlock,

        photo: PhotoBlock,
        photo2: PhotoBlock,
        photo3: PhotoBlock,

        map: MapBlock,
        rout: RoutesBlock,
    };


    const renderBlock = (block) => {
        const Renderer = blockRegistry[block.block_key];

        if (!Renderer) return null;

        if (block.block_key.startsWith("photo")) {
            const index = Number(block.block_key.replace("photo", "")) || 1;

            const photo = getPhoto(index);

            return (
                <PhotoBlock
                    photo={photo}
                    lang={context.lang}
                    className={context.photoClasses[block.block_key]}
                />
            );
        }

        return <Renderer block={block} {...context} />;
    };

    // BreadCrumbs
    const countryName = getEntityName(country);

    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        {
            label: countryName || ''
        }
    ];

    return (
        <div className="country">

            {country?.meta && (
                <Helmet>
                    <title>{country.meta.title}</title>
                    <meta name="title" content={country.meta.title} />
                    <meta name="description" content={country.meta.description} />
                    <meta property="og:title" content={country.meta.og_title} />
                    <meta property="og:description" content={country.meta.og_description} />
                    <meta property="og:image" content={toFullUrl(country.meta.og_image)} />
                </Helmet>
            )}

            {/* Сайдбар */}
            <aside className={`country__sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
                {/* Кнопка-гамбургер на мобильных */}
                <div className="country__sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</div>

                {/* Заголовок и список */}
                <h2 className="country__sidebar-title">{regionTitlesByType[country?.regions?.[0]?.type]?.[lang] || "Regions"}</h2>
                <ul className="country__sidebar-list">
                    {country?.regions?.map((region) => {
                        const name = region?.name;

                        return (
                            <li key={region.id} className="country__sidebar-item">
                                {region.is_active ? (
                                    <Link
                                        to={`/${countryPath}/${region.path}`}
                                        className="country__sidebar-link"
                                    >
                                        {name}
                                    </Link>
                                ) : (
                                    <span className="country__sidebar-link country__sidebar-link--disabled">
                                        {name}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Основной контент */}
            <section className="country__content">
                <div className="country__breadcrumbs">
                    <BreadCrumbs crumbs={crumbs} /></div>
                <div>
                    {blocks.length > 0 && blocks
                        .map(block => (
                            <div key={`${block.block_key}-${block.sort_order}`}>
                                {renderBlock(block)}
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Country