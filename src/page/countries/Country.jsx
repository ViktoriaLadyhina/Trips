import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from 'react';

import BtnAttr from "../../components/btn-attr/BtnAttr";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { photosByCountry } from "../../datas/fotos";
import CountryMap from '../../components/maps/CountryMap'
import useRoutes from '../../hooks/useRoutesSearch';

import './Country.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const regionTitlesByType = {
    land: { ru: "Земли", uk: "Землі", de: "Bundesländer" },
    canton: { ru: "Кантоны", uk: "Кантони", de: "Kantone" },
    oblast: { ru: "Области", uk: "Області", de: "Regionen" }
};

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { routes } = useRoutes(countryPath);

    // ищем нужную страну
    const [country, setCountry] = useState(null);

    useEffect(() => {
        console.log("LANG IN REQUEST:", lang);
        fetch(`http://localhost:3001/api/country/${countryPath}?lang=${lang}`)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [countryPath, lang]);

    const langData = useMemo(() => {
        if (!country?.blocks) return {};

        return country.blocks.reduce((acc, b) => {
            acc[b.block_key] = b.content;
            return acc;
        }, {});
    }, [country]);

    if (!country) return <p>Country not found</p>;

    const photos = photosByCountry[countryPath];

    const fixImages = (html) => {
        return html.replace(
            /src="([^"]+)"/g,
            (match, src) => {

                // если уже полный путь — не трогаем
                if (src.startsWith('http')) {
                    return match;
                }

                return `src="${BASE_PHOTO_URL}/${src}"`;
            }
        );
    };

    const mapRegions = (country?.regions || []).map(region => ({
        id: region.id,
        path: region.path,
        hasInfo: Boolean(region.is_active),
        name: region?.name || ""
    }));


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
                            __html: fixImages(langData[block.block_key], country.path)
                        }}
                    />
                ) : null;

            // ===== PHOTOS =====
            case "photo": {
                const photo = photos?.gallery?.[block.settings?.index];

                return photo ? (
                    <img
                        src={`${BASE_PHOTO_URL}${photo.path}`}
                        className="country__photo"
                        alt=""
                    />
                ) : null;
            }

            case "photo2": {
                const photo2 = photos?.gallery?.[block.settings?.index];

                return photo2 ? (
                    <img
                        src={`${BASE_PHOTO_URL}${photo2.path}`}
                        className="country__photo country__photo--left"
                        alt=""
                    />
                ) : null;
            }

            case "photo3": {
                const photo3 = photos?.gallery?.[block.settings?.index];

                return photo3 ? (
                    <img
                        src={`${BASE_PHOTO_URL}${photo3.path}`}
                        className="country__photo"
                        alt=""
                    />
                ) : null;
            }

            // ===== ROUTES (НЕ ТРОГАЮ) =====
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

console.log("country:", country);
console.log("type:", country?.regions?.[0]?.type);

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
                    <title>{country.meta.title || country?.translations?.[lang]?.name}</title>
                    <meta name="description" content={country.meta.description} />
                    <meta property="og:title" content={country.meta.ogTitle} />
                    <meta property="og:description" content={country.meta.ogDescription} />
                    <meta property="og:image" content={country.meta.ogImage} />
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
                <div className="country__breadcrumbs"> <BreadCrumbs crumbs={crumbs} /></div>
                <div>
                    {country?.blocks.length > 0 && country?.blocks
                        .sort((a, b) => a.sort_order - b.sort_order)
                        .map(renderBlock)
                    }
                </div>
            </section>
        </div>
    )
}

export default Country