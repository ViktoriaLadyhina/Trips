import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';

import countries from '../../datas/country';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { photosByCountry } from "../../datas/fotos";
import { useMeta } from '../../hooks/useMeta';
import CountryMap from '../../components/maps/CountryMap'

import './Country.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);


    // ищем нужную страну
    const country = countries.find(c => c.path === countryPath);
    useMeta(country?.country?.translations?.[lang]?.meta);

    useEffect(() => {
        if (country?.translations?.[lang]?.country) {
            document.title = country.translations[lang].country;
        }
    }, [country, lang]);

    if (!country) return <p>Country not found</p>;

    const photos = photosByCountry[countryPath];

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

                {/* Маршруты */}
                {country.translations?.[lang]?.routes?.items?.length > 0 && (
                    <div className="country__sidebar-section">
                        <h3 className="country__sidebar-section-title">
                            {country.translations[lang].routes.title}
                        </h3>
                        <ul className={`country__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                            {country.translations[lang].routes.items.map((route) => (
                                <li key={route.id} className="country__sidebar-item">
                                    {route.hasInfo ? (
                                        <Link
                                            to={`/${countryPath}/${route.path}`}
                                            className="country__sidebar-link"
                                        >
                                            {route.name}
                                        </Link>
                                    ) : (
                                        <span className="country__sidebar-link country__sidebar-link--disabled">
                                            {route.name}
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
                {country.translations?.[lang]?.symbols && <InfoBlock data={country.translations?.[lang]?.symbols} className="country__symbols" />}
                {photos.gallery[4] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[4].path}`} alt={photos.gallery[4].title} className="country__photo country__photo" />)}
                {country.translations?.[lang]?.holidays && <InfoBlock data={country.translations?.[lang]?.holidays} className="country__holidays" />}
                {country.translations?.[lang]?.briefHistory && <InfoBlock data={country.translations?.[lang]?.briefHistory} className="country__history" />}
            </div>
        </div>
    );
}

export default Country