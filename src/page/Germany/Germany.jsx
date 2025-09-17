import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData } from '../../store/features/languageSlice';
import Loader from '../../components/loader/Loader';
import ErrorBox from '../../components/error/ErrorBox';
import { dePhotos } from '../../datas/fotos/de';
import './Germany.scss'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Germany = () => {
    const dispatch = useDispatch();
    const { lang, status, countries, initialized } = useSelector((state) => state.language);

    useEffect(() => {
        if (lang && !initialized) {
            dispatch(fetchPageData({ lang, page: "Country" }));
        }
    }, [lang, dispatch, initialized]);

    const country = countries.find(c => c.path === 'germany');

    if (status === "failed") return <ErrorBox />;
    if (!initialized || !country) { return <Loader />; }

    const InfoBlock = ({ data, className }) => (
        <div className={className}>
            {data.map((item, index) => (
                item.bold
                    ? <span key={index} className={`${className}__bold`}>{item.bold}</span>
                    : <span key={index} className={`${className}__text`}>{item.text}</span>
            ))}
        </div>
    );

    const currentMap = dePhotos.map[lang] || dePhotos.map.ru;

    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        {
            label: country?.country
        }
    ];

    return (
        <div className="germany">
            {/* Сайдбар с землями */}
            <aside className="germany__sidebar">
                <h2 className="germany__sidebar-title">{country.germanStates.title}</h2>
                <ul className="germany__sidebar-list">
                    {country.germanStates.items.map(state => (
                        <li key={state.id} className="germany__sidebar-item">
                            {state.hasInfo ? (
                                <Link to={`/germany/state/${state.id}`} className="germany__sidebar-link">
                                    {state.name}
                                </Link>
                            ) : (
                                <span className="germany__sidebar-link germany__sidebar-link--disabled">
                                    {state.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Основной контент */}
            <div className="germany__content">
                <BreadCrumbs crumbs={crumbs} />
                <h1 className="germany__title">{country?.country}</h1>
                <img src={`${BASE_PHOTO_URL}${currentMap}`} alt={`${country?.country} карта`} />
                <InfoBlock data={country.desc.capital} className="germany__capital" />
                <img src={`${BASE_PHOTO_URL}${dePhotos.castles[0]}`} alt="Castle 1" className='germany__castle' />
                <InfoBlock data={country.desc.geography} className="germany__geography" />
                <InfoBlock data={country.desc.population} className="germany__population" />
                <InfoBlock data={country.desc.languages} className="germany__languages" />
                <InfoBlock data={country.desc.administrative} className="germany__administrative" />
                <InfoBlock data={country.desc.government} className="germany__government" />
                <InfoBlock data={country.desc.currency} className="germany__currency" />
                <InfoBlock data={country.desc.transport} className="germany__transport" />
                <img src={`${BASE_PHOTO_URL}${dePhotos.castles[1]}`} alt="Steamship" className='germany__castle germany__castle--right' />
                <InfoBlock data={country.desc.climate} className="germany__climate" />
                <InfoBlock data={country.desc.tourism} className="germany__tourism" />

                <div className="germany__symbols">
                    <h2 className="germany__symbols-title">{country.symbols.title}</h2>
                    {country.symbols.items.map((item, index) => (
                        <div key={index} className="germany__symbols-item">
                            {item.img && (
                                <img
                                    src={`${BASE_PHOTO_URL}${item.img}`}
                                    alt={item.bold}
                                    className="germany__symbols-img"
                                />
                            )}
                            <p className="germany__symbols-text">
                                {item.bold && <span className="germany__symbols-bold">{item.bold}</span>}
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="germany__history">
                    <h2 className="germany__history-title">{country.briefHistory.title}</h2>
                    {country.briefHistory.items.map((item, index) => (
                        <p key={index} className="germany__history-text">
                            {item.img && (
                                <img src={`${BASE_PHOTO_URL}${item.img}`} alt="History" className="germany__history-img" />
                            )}
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Germany