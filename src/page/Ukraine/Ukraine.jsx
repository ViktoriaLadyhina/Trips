import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { fetchPageData } from '../../store/features/languageSlice';
import Loader from '../../components/loader/Loader';
import './Ukraine.scss'
import { Link } from 'react-router';
import { dePhotos } from '../../datas/fotos/ua';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Ukraine = () => {
    const dispatch = useDispatch();
    const { lang, status, countries, initialized } = useSelector((state) => state.language);

    useEffect(() => {
        if (lang && !initialized) {
            dispatch(fetchPageData({ lang, page: "Country" }));
        }
    }, [lang, dispatch, initialized]);

    const InfoBlock = ({ data, className }) => (
        <div className={className}>
            {data.map((item, index) => (
                item.bold
                    ? <span key={index} className={`${className}__bold`}>{item.bold}</span>
                    : <span key={index} className={`${className}__text`}>{item.text}</span>
            ))}
        </div>
    );

    const country = countries.find(c => c.path === 'ukraine');

    if (status === "failed") return <ErrorBox />;
    if (!initialized || !country) { return <Loader />; }

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
        <div className='ukraine'>
            <aside className="ukraine__sidebar">
                <h2 className="ukraine__sidebar-title">{country.ukraineRegions.title}</h2>
                <ul className="ukraine__sidebar-list">
                    {country.ukraineRegions.items.map(reg => (
                        <li key={reg.id} className="ukraine__sidebar-item">
                            {reg.hasInfo ? (
                                <Link to={`/ukraine/reg/${reg.id}`} className="ukraine__sidebar-link">
                                    {reg.name}
                                </Link>
                            ) : (
                                <span className="ukraine__sidebar-link ukraine__sidebar-link--disabled">
                                    {reg.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>


            <div className='ukraine__content'>
                <BreadCrumbs crumbs={crumbs} />
                <h1 className="ukraine__title">{country?.country}</h1>
                <InfoBlock data={country.desc.capital} className="ukraine__capital" />
                <InfoBlock data={country.desc.geography} className="ukraine__geography" />
                <img src={`${BASE_PHOTO_URL}${dePhotos.registr[0]}`} alt="Ukraine 1" className='ukraine__registr' />
                <InfoBlock data={country.desc.population} className="ukraine__population" />
                <InfoBlock data={country.desc.languages} className="ukraine__languages" />
                <InfoBlock data={country.desc.cuisine} className="ukraine__cuisine" />
                <InfoBlock data={country.desc.entry} className="ukraine__entry" />

                <div className="ukraine__symbols">
                    <h2 className="ukraine__symbols-title">{country.symbols.title}</h2>
                    {country.symbols.items.map((item, index) => (
                        <div key={index} className="ukraine__symbols-item">
                            {item.img && (
                                <img
                                    src={`${BASE_PHOTO_URL}${item.img}`}
                                    alt={item.bold}
                                    className="ukraine__symbols-img"
                                />
                            )}
                            <p className="ukraine__symbols-text">
                                {item.bold && <span className="ukraine__symbols-bold">{item.bold}</span>}
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ukraine__holidays">
                    <h2 className="ukraine__holidays-title">{country.holidays.title}</h2>
                    {country.holidays.items.map((item, index) => (
                        <div key={index} className="ukraine__holidays-item">
                            <span className="ukraine__holidays-bold">{item.bold}</span>
                            <span className="ukraine__holidays-text">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="ukraine__history">
                    <h2 className="ukraine__history-title">{country.briefHistory.title}</h2>
                    {country.briefHistory.items.map((item, index) => (
                        <p key={index} className="ukraine__history-text">
                            {item.img && (
                                <img src={`${BASE_PHOTO_URL}${item.img}`} alt="History" className="ukraine__history-img" />
                            )}
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ukraine