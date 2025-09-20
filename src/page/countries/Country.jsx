import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';

import { datas as countriesUa } from '../../datas/ua/country';
import { datas as countriesRu } from '../../datas/ru/country';
import { datas as countriesDe } from '../../datas/de/country';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { photosByCountry } from "../../datas/fotos";
import { useMeta } from '../../hooks/useMeta';

import './Country.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Country = () => {
    const { countryPath } = useParams();
    const { lang } = useSelector((state) => state.language);

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
            {country.regions && (
                <aside className="country__sidebar">
                    <h2 className="country__sidebar-title">{country.regions.title}</h2>
                    <ul className="country__sidebar-list">
                        {country.regions.items?.map(state => (
                            <li key={state.id} className="country__sidebar-item">
                                {state.hasInfo ? (
                                    <Link to={`/${countryPath}/${state.path}`} className="country__sidebar-link">
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
            )}

            {/* Основной контент */}
            <div className="country__content">
                <BreadCrumbs crumbs={crumbs} />
                <h1 className="country__title">{country?.country}</h1>

                {country.currentMap && (
                    <img src={`${BASE_PHOTO_URL}${country.currentMap}`} alt={`${country?.country} map`} />
                )}

                {country.desc?.capital && <InfoBlock data={country.desc.capital} className="country__capital" />}
                {photos.countries[0] && (<img src={`${BASE_PHOTO_URL}${photos.countries[0].path}`} alt={photos.countries[0].title} className="country__photo" />)}
                {country.desc?.geography && <InfoBlock data={country.desc.geography} className="country__geography" />}
                {country.desc?.population && <InfoBlock data={country.desc.population} className="country__population" />}
                {country.desc?.languages && <InfoBlock data={country.desc.languages} className="country__languages" />}
                {country.desc?.administrative && <InfoBlock data={country.desc.administrative} className="country__administrative" />}
                {country.desc?.government && <InfoBlock data={country.desc.government} className="country__government" />}
                {country.desc?.currency && <InfoBlock data={country.desc.currency} className="country__currency" />}
                {country.desc?.transport && <InfoBlock data={country.desc.transport} className="country__transport" />}
                {photos.countries[1] && (<img src={`${BASE_PHOTO_URL}${photos.countries[1].path}`} alt={photos.countries[1].title} className="country__photo country__photo--right" />)}
                {country.desc?.climate && <InfoBlock data={country.desc.climate} className="country__climate" />}
                {country.desc?.tourism && <InfoBlock data={country.desc.tourism} className="country__tourism" />}
                {country.desc?.cuisine && <InfoBlock data={country.desc.cuisine} className="country__cuisine" />}
                {country.desc?.entry && <InfoBlock data={country.desc.entry} className="country__entry" />}

                {/* Символы */}
                {country.symbols?.items?.length > 0 && (
                    <div className="country__symbols">
                        <h2 className="country__symbols-title">{country.symbols.title}</h2>
                        {country.symbols.items.map((item, index) => (
                            <div key={index} className="country__symbols-item">
                                {item.img && (
                                    <img src={`${BASE_PHOTO_URL}${item.img}`} alt={item.bold || ''} className="country__symbols-img" />
                                )}
                                <p className="country__symbols-text">
                                    {item.bold && <span className="country__symbols-bold">{item.bold}</span>}
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Праздники */}
                {country.holidays?.items?.length > 0 && (
                    <div className="country__holidays">
                        <h2 className="country__holidays-title">{country.holidays.title}</h2>
                        {country.holidays.items.map((item, index) => (
                            <p key={index} className="country__holidays-text">
                                {item.bold && <span className="country__holidays-bold">{item.bold}</span>}
                                {item.text}
                            </p>
                        ))}
                    </div>
                )}

                {/* История */}
                {country.briefHistory?.items?.length > 0 && (
                    <div className="country__history">
                        <h2 className="country__history-title">{country.briefHistory.title}</h2>
                        {country.briefHistory.items.map((item, index) => (
                            <p key={index} className="country__history-text">
                                {item.img && <img src={`${BASE_PHOTO_URL}${item.img}`} alt="History" className="country__history-img" />}
                                {item.text}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Country