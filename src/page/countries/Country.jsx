import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { useState } from 'react';

import { datas as countriesUa } from '../../datas/ua/country';
import { datas as countriesRu } from '../../datas/ru/country';
import { datas as countriesDe } from '../../datas/de/country';

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

    // выбираем данные в зависимости от языка
    const countries = lang === 'ua' ? countriesUa : lang === 'de' ? countriesDe : countriesRu;

    // ищем нужную страну
    const country = countries.find(c => c.path === countryPath);
    useMeta(country?.meta);
    if (!country) return <p>Country not found</p>;

    const photos = photosByCountry[countryPath];
    

    // BreadCrumbs
    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        { label: country?.country }
    ];

    return (
        <div className="country">
            {/* Сайдбар */}
            <aside className={`country__sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
                {/* Кнопка-гамбургер на мобильных */}
                <div className="country__sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</div>

                {/* Заголовок и список */}
                <h2 className="country__sidebar-title">{country.regions.title}</h2>
                <ul className={`country__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                    {country.regions.items?.map((state) => (
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
            </aside>

            {/* Основной контент */}

            <div className="country__content">
                <div className="country__breadcrumbs"> <BreadCrumbs crumbs={crumbs} /></div>
                <h1 className="country__title">{country?.country}</h1>

                <div className='country__map'>
                    <CountryMap
                        countryKey={country.path}
                        regions={country.regions}
                    />
                </div>

                {country.desc?.capital && <InfoBlock data={country.desc.capital} className="country__capital" />}
                {photos.gallery[2] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[2].path}`} alt={photos.gallery[2].title} className="country__photo" />)}
                {country.desc?.geography && <InfoBlock data={country.desc.geography} className="country__geography" />}
                {country.desc?.population && <InfoBlock data={country.desc.population} className="country__population" />}
                {country.desc?.languages && <InfoBlock data={country.desc.languages} className="country__languages" />}
                {country.desc?.administrative && <InfoBlock data={country.desc.administrative} className="country__administrative" />}
                {country.desc?.government && <InfoBlock data={country.desc.government} className="country__government" />}
                {country.desc?.currency && <InfoBlock data={country.desc.currency} className="country__currency" />}
                {country.desc?.transport && <InfoBlock data={country.desc.transport} className="country__transport" />}
                {photos.gallery[3] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[3].path}`} alt={photos.gallery[3].title} className="country__photo country__photo--right" />)}
                {country.desc?.climate && <InfoBlock data={country.desc.climate} className="country__climate" />}
                {country.desc?.tourism && <InfoBlock data={country.desc.tourism} className="country__tourism" />}
                {country.desc?.cuisine && <InfoBlock data={country.desc.cuisine} className="country__cuisine" />}
                {country.desc?.entry && <InfoBlock data={country.desc.entry} className="country__entry" />}
                {country.symbols && <InfoBlock data={country.symbols} className="country__symbols" />}
                {photos.gallery[4] && (<img src={`${BASE_PHOTO_URL}${photos.gallery[4].path}`} alt={photos.gallery[4].title} className="country__photo country__photo" />)}
                {country.holidays && <InfoBlock data={country.holidays} className="country__holidays" />}
                {country.briefHistory && <InfoBlock data={country.briefHistory} className="country__history" />}
            </div>
        </div>
    );
}

export default Country