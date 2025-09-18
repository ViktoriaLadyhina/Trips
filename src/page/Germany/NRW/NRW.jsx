import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegionData } from '../../../store/features/regionsSlice';
import ErrorBox from '../../../components/error/ErrorBox';
import Loader from '../../../components/loader/Loader';
import BreadCrumbs from '../../../components/breadCrumbs/BreadCrumbs';
import { dePhotos } from '../../../datas/fotos/de';
import { Link } from 'react-router-dom';
import './NRW.scss';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const NRW = () => {
    const dispatch = useDispatch();
    const { regions, status, error } = useSelector((state) => state.regions);
    const { lang } = useSelector((state) => state.language);

    useEffect(() => {
        if (lang) {
            dispatch(fetchRegionData({ lang, country: "Germany", region: "nrw" }));
        }
    }, [lang, dispatch]);

    const nrw = regions?.Germany?.nrw;

    if ((status === "idle" || status === "loading") && !nrw) return <Loader />;
    if (status === "failed") return <ErrorBox message={error} />;
    if (!nrw) return null;

    const InfoBlock = ({ data, className }) => (
        <div className={className}>
            {data.map((item, index) =>
                item.bold ? (
                    <span key={index} className={`${className}__bold`}>{item.bold}</span>
                ) : (
                    <span key={index} className={`${className}__text`}>{item.text}</span>
                )
            )}
        </div>
    );

    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: lang === 'ru' ? 'Германия' : lang === 'de' ? 'Deutschland' : 'Німеччина', path: '/germany' },
        { label: nrw.name }
    ];

    return (
        <div className='nrw'>
            <aside className="nrw__sidebar">
                {nrw.nrwRegions.map((regionBlock) => (
                    <div key={regionBlock.title}>
                        <h2 className="nrw__sidebar-title">{regionBlock.title}</h2>
                        <ul className="nrw__sidebar-list">
                            {regionBlock.items.map((reg) => (
                                <li key={reg.id} className="nrw__sidebar-item">
                                    {reg.hasInfo ? (
                                        <Link to={`/germany/nrw/${reg.id}`} className="nrw__sidebar-link">
                                            {reg.name}
                                        </Link>
                                    ) : (
                                        <span className="nrw__sidebar-link nrw__sidebar-link--disabled">
                                            {reg.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>

            <div className="nrw__content">
                <BreadCrumbs crumbs={crumbs} />

                <h1 className="nrw__title">{nrw.name}</h1>
                <InfoBlock data={nrw.desc.capital} className="nrw__capital" />
                <InfoBlock data={nrw.desc.population} className="nrw__population" />
                <img src={`${BASE_PHOTO_URL}${dePhotos.nrw[0]}`} alt="Castle 1" className='nrw__foto' />
                <InfoBlock data={nrw.desc.area} className="nrw__area" />
                <InfoBlock data={nrw.desc.geography} className="nrw__geography" />
                <InfoBlock data={nrw.desc.rivers} className="nrw__rivers" />
                <InfoBlock data={nrw.desc.cities} className="nrw__cities" />
                <InfoBlock data={nrw.desc.history} className="nrw__history" />
                <InfoBlock data={nrw.desc.economy} className="nrw__economy" />
                <InfoBlock data={nrw.desc.tourism} className="nrw__tourism" />

                <div className="nrw__symbols">
                    <h2 className="nrw__symbols-title">{nrw.symbols.title}</h2>
                    {nrw.symbols.items.map((item, index) => (
                        <div key={index} className="nrw__symbols-item">
                            {item.img && (
                                <img
                                    src={`${BASE_PHOTO_URL}${item.img}`}
                                    alt={item.bold}
                                    className="nrw__symbols-img"
                                />
                            )}
                            <p className="nrw__symbols-text">
                                {item.bold && <span className="nrw__symbols-bold">{item.bold}</span>}
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="nrw__history">
                    <h2 className="nrw__history-title">{nrw.briefHistory.title}</h2>
                    {nrw.briefHistory.items.map((item, index) => (
                        <p key={index} className="nrw__history-text">{item.text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NRW;