import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useState } from 'react';

import countries from '../../datas/country';
import luxembourgRoutes from '../../datas/luxembourg/routes'

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { photosByCountry } from "../../datas/fotos";
import CountryMap from '../../components/maps/CountryMap'

import './Country.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // ищем нужную страну
    const country = countries.find(c => c.path === countryPath);

    const meta = country?.translations?.[lang]?.meta;
    const title = country?.translations?.[lang]?.country;


    if (!country) return <p>Country not found</p>;

    const photos = photosByCountry[countryPath];
    const routes = countryPath === 'luxembourg' ? luxembourgRoutes : [];

    // BreadCrumbs
    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        { label: country?.translations?.[lang]?.country }
    ];

    return (
        <div className="country">

            {meta && (
                <Helmet>
                    <title>{meta.title || title}</title>
                    <meta name="description" content={meta.description} />
                    <meta property="og:title" content={meta.ogTitle} />
                    <meta property="og:description" content={meta.ogDescription} />
                    <meta property="og:image" content={meta.ogImage} />
                </Helmet>
            )}

            {/* Сайдбар */}
            <aside className={`country__sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
                {/* Кнопка-гамбургер на мобильных */}
                <div className="country__sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</div>

                {/* Заголовок и список */}
                <h2 className="country__sidebar-title">{country?.translations?.[lang]?.regions?.title}</h2>
                <ul className={`country__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                    {country.translations?.[lang]?.regions?.items?.map((state) => (
                        <li key={state.id} className="country__sidebar-item">
                            {state.hasInfo ? (
                                <Link
                                    to={`/${countryPath}/${state.path}`}
                                    className="country__sidebar-link"
                                >
                                    {state.name}
                                </Link>
                            ) : (
                                <span className="country__sidebar-link country__sidebar-link--disabled">
                                    {state.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Ключевые города */}
                {country.translations?.[lang]?.cities?.items?.length > 0 && (
                    <div className="country__sidebar-section">
                        <h3 className="country__sidebar-section-title">
                            {country.translations[lang].cities.title}
                        </h3>
                        <ul className={`country__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                            {country.translations[lang].cities.items.map((city) => (
                                <li key={city.id} className="country__sidebar-item">
                                    {city.hasInfo ? (
                                        <Link
                                            to={`/${countryPath}/${city.path}`}
                                            className="country__sidebar-link"
                                        >
                                            {city.name}
                                        </Link>
                                    ) : (
                                        <span className="country__sidebar-link country__sidebar-link--disabled">
                                            {city.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>

            {/* Основной контент */}
            <div className="country__content">
                <div className="country__breadcrumbs"> <BreadCrumbs crumbs={crumbs} /></div>
                <h1 className="country__title">{country?.translations?.[lang]?.country}</h1>

                <div className='country__map'>
                    <CountryMap
                        countryKey={country.path}
                        regions={country.translations?.[lang]?.regions}
                    />
                </div>

                {country.translations?.[lang]?.desc?.capital && <InfoBlock data={country.translations?.[lang]?.desc.capital} className="country__capital" />}
                {photos.gallery[2] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[2].path}`} alt={photos.gallery[2].title} className="country__photo" />)}
                {country.translations?.[lang]?.desc?.geography && <InfoBlock data={country.translations?.[lang]?.desc.geography} className="country__geography" />}
                {country.translations?.[lang]?.desc?.population && <InfoBlock data={country.translations?.[lang]?.desc.population} className="country__population" />}
                {country.translations?.[lang]?.desc?.languages && <InfoBlock data={country.translations?.[lang]?.desc.languages} className="country__languages" />}
                {country.translations?.[lang]?.desc?.administrative && <InfoBlock data={country.translations?.[lang]?.desc.administrative} className="country__administrative" />}
                {country.translations?.[lang]?.desc?.government && <InfoBlock data={country.translations?.[lang]?.desc.government} className="country__government" />}
                {country.translations?.[lang]?.desc?.currency && <InfoBlock data={country.translations?.[lang]?.desc.currency} className="country__currency" />}
                {country.translations?.[lang]?.desc?.transport && <InfoBlock data={country.translations?.[lang]?.desc.transport} className="country__transport" />}
                {photos.gallery[3] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[3].path}`} alt={photos.gallery[3].title} className="country__photo country__photo--right" />)}
                {country.translations?.[lang]?.desc?.climate && <InfoBlock data={country.translations?.[lang]?.desc.climate} className="country__climate" />}
                {country.translations?.[lang]?.desc?.tourism && <InfoBlock data={country.translations?.[lang]?.desc.tourism} className="country__tourism" />}
                {country.translations?.[lang]?.desc?.cuisine && <InfoBlock data={country.translations?.[lang]?.desc.cuisine} className="country__cuisine" />}
                {country.translations?.[lang]?.desc?.entry && <InfoBlock data={country.translations?.[lang]?.desc.entry} className="country__entry" />}

                {/* ------------------- Раздел маршрутов------------------- */}
                {routes && routes.length > 0 && (
                    <div className="country__routes">

                        <h2 className="country__routes-title"> {lang === "ru" ? "Маршруты" : lang === "de" ? "Routen" : "Маршрути"} </h2>

                        {/* ===== TABLE (desktop) ===== */}
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
                                        <td><Link to={`/${countryPath}/routes/${r.path}`}>{r.translations?.[lang]?.name}</Link> </td>
                                        <td>{r.translations?.[lang]?.short_description}</td>
                                        <td>{r.translations?.[lang]?.routeLength}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        {/* ===== CARDS (mobile) ===== */}
                        <div className="country__routes-cards">
                            {routes.map(r => (
                                <div key={r.id} className="country__routes-card">

                                    <div className="country__routes-row">
                                        <strong>{lang === "ru" ? "Название:" : lang === "de" ? "Name:" : "Назва:"}</strong>{" "}
                                        <Link to={`/${countryPath}/routes/${r.path}`}> {r.translations?.[lang]?.name} </Link>
                                    </div>

                                    <div className="country__routes-row">
                                        {r.translations?.[lang]?.short_description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* ---------------------------------------------------------- */}

                {country.translations?.[lang]?.symbols && <InfoBlock data={country.translations?.[lang]?.symbols} className="country__symbols" />}
                {photos.gallery[4] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[4].path}`} alt={photos.gallery[4].title} className="country__photo country__photo" />)}
                {country.translations?.[lang]?.holidays && <InfoBlock data={country.translations?.[lang]?.holidays} className="country__holidays" />}
                {country.translations?.[lang]?.briefHistory && <InfoBlock data={country.translations?.[lang]?.briefHistory} className="country__history" />}
            </div>
        </div>
    );
}

export default Country