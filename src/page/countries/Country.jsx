import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from 'react';

import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import CountryMap from '../../components/maps/CountryMap.jsx'
import useRoutes from '../../hooks/useRoutesSearch.js';
import { toFullUrl, fixHtmlImages } from "../../utils/photo.js";
import { getCountry } from "../../api/api.js";

import './Country.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const regionTitlesByType = {
    land: { ru: "Земли", uk: "Землі", de: "Bundesländer" },
    canton: { ru: "Кантоны", uk: "Кантони", de: "Kantone" },
    oblast: { ru: "Области", uk: "Області", de: "Regionen" }
};

const loadingCountry = { ru: "Загрузка страны...",  de: "Land wird geladen...", uk: "Завантаження країни..." };

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { routes } = useRoutes(countryPath);
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);

// фетч запрос
    useEffect(() => {
  if (!countryPath) return;
  getCountry(countryPath, lang)
  .then(setCountry)
  .catch(err => setError(err.message))
}, [countryPath, lang]);

    const langData = useMemo(() => {
        if (!country?.blocks) return {};

        return country.blocks.reduce((acc, b) => {
            acc[b.block_key] = b.content;
            return acc;
        }, {});
    }, [country]);

    if (!country) return <p>Country not found</p>;

    const mapRegions = (country?.regions || []).map(region => ({
        id: region.id,
        path: region.path,
        hasInfo: Boolean(region.is_active),
        name: region?.name || ""
    }));

    const getPhoto = (index) =>
        country.photos?.find(p => p.sort_order === index);


    const renderBlock = (block) => {

        switch (block.block_key) {

            case "map":
                return (
                    <div className='country__map'>
                        <BtnAttr lang={lang} path={`/${countryPath}/attractions`} />
                        <CountryMap
                            countryKey={country.path}
                            regions={mapRegions}
                        />
                    </div>
                );

            // ===== TEXT BLOCKS =====
            case "name":
            case "capital":
            case "geography":
            case "population":
            case "languages":
            case "administrative":
            case "government":
            case "currency":
            case "transport":
            case "climate":
            case "tourism":
            case "briefHistory":
            case "symbols":
                return langData?.[block.block_key] ? (
                    <section
                        className={`country__${block.block_key}`}
                        dangerouslySetInnerHTML={{
                            __html: fixHtmlImages(langData[block.block_key], country.path)
                        }}
                    />
                ) : null;

            // ===== PHOTOS =====

            case "photo": {
                const photo = getPhoto(1);
                return photo ? <img
                    src={`${BASE_PHOTO_URL}${photo.path}`}
                    className="country__photo"
                    alt={photo.title?.[lang] || ""}
                /> : null;
            }

            case "photo2": {
                const photo = getPhoto(2);
                return photo ? <img
                    src={`${BASE_PHOTO_URL}${photo.path}`}
                    className="country__photo country__photo--left"
                    alt={photo.title?.[lang] || ""}
                /> : null;
            }

            case "photo3": {
                const photo = getPhoto(3);
                return photo ? <img
                    src={`${BASE_PHOTO_URL}${photo.path}`}
                    className="country__photo"
                    alt={photo.title?.[lang] || ""}
                /> : null;
            }


            // ===== ROUTES =====
            case "rout": {
                if (!routes) return <div>loading routes...</div>;
                if (!routes?.length) return null;

                return (
                    <div className="country__routes">

                        <h2 className="country__routes-title">
                            {lang === "ru" ? "Маршруты" : lang === "de" ? "Routen" : "Маршрути"}
                        </h2>

                        {/* ===== TABLE ===== */}
                        <table className="country__routes-table">
                            <thead>
                                <tr>
                                    <th>{lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}</th>
                                    <th>{lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}</th>
                                    <th>{lang === "ru" ? "Длина маршрута" : lang === "de" ? "Routenlänge" : "Довжина маршруту"}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {routes.map(r => (
                                    <tr key={r.id}>
                                        <td>
                                            <Link to={`/${countryPath}/routes/${r.path}`}>
                                                {r.translations?.[lang]?.name}
                                            </Link>
                                        </td>
                                        <td>{r.translations?.[lang]?.short_description}</td>
                                        <td>{r.translations?.[lang]?.routeLength}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* ===== CARDS ===== */}
                        <div className="country__routes-cards">
                            {routes.map(r => (
                                <div key={r.id} className="country__routes-card">

                                    <div className="country__routes-row">
                                        <strong>
                                            {lang === "ru" ? "Название:" : lang === "de" ? "Name:" : "Назва:"}
                                        </strong>{" "}
                                        <Link to={`/${countryPath}/routes/${r.path}`}>
                                            {r.translations?.[lang]?.name}
                                        </Link>
                                    </div>

                                    <div className="country__routes-row">
                                        {r.translations?.[lang]?.short_description}
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                );
            }
            default:
                return null;
        }
    };

    if (error) return <p>{error}</p>;
    if (!country) return <div>{loadingCountry[lang]}</div>;

    // BreadCrumbs
    const nameBlock = country?.blocks?.find(
        b => b.block_key === "name"
    );

    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        {
            label: nameBlock?.content || ''
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
                    {country?.blocks.length > 0 && country?.blocks
                        .sort((a, b) => a.sort_order - b.sort_order)
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