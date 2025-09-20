import { regions as ruRegions } from '../../datas/ru';
import { regions as uaRegions } from '../../datas/ua';
import { regions as deRegions } from '../../datas/de';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';

import InfoBlock from '../../components/InfoBlock/InfoBlock';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { photosByCountry } from "../../datas/fotos";
import { useMeta } from '../../hooks/useMeta';
import './Regions.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Regions = () => {
    const { countryPath, regionsPath } = useParams();
    const { lang } = useSelector((state) => state.language);

    const allRegions = lang === 'ua' ? uaRegions : lang === 'de' ? deRegions : ruRegions;

    const countryRegions = allRegions[countryPath];

    const region = countryRegions[regionsPath];
    useMeta(region?.meta || {});

    if (!countryRegions) return <p>Country not found</p>;
    if (!region) return <p>Region not found</p>;

    const photos = photosByCountry[countryPath];

    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: countryRegions.countryName, path: `/${countryPath}` },
        { label: region.name }
    ];

    return (
        <div className='regions'>
            <aside className="regions__sidebar">
                {region.discriptRegions.map((regionBlock) => (
                    <div key={regionBlock.title}>
                        <h2 className="regions__sidebar-title">{regionBlock.title}</h2>
                        <ul className="regions__sidebar-list">
                            {regionBlock.items.map((reg) => (
                                <li key={reg.id} className="regions__sidebar-item">
                                    {reg.hasInfo ? (
                                        <Link to={`/${countryPath}/${regionsPath}/${reg.patch}`} className="regions__sidebar-link">
                                            {reg.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {reg.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>

            <div className="regions__content">
                <BreadCrumbs crumbs={crumbs} />

                <h1 className="regions__title">{region.name}</h1>
                {region.currentMap && (
                    <img src={`${BASE_PHOTO_URL}${region.currentMap}`} alt={`${region?.country} map`} />
                )}

                <InfoBlock data={region.desc.capital} className="regions__capital" />
                <InfoBlock data={region.desc.population} className="regions__population" />
                <img src={`${BASE_PHOTO_URL}${photos[regionsPath][0].path}`} alt={photos[regionsPath][0].title} className='regions__foto' />
                <InfoBlock data={region.desc.area} className="regions__area" />
                <InfoBlock data={region.desc.geography} className="regions__geography" />
                <InfoBlock data={region.desc.rivers} className="regions__rivers" />
                <InfoBlock data={region.desc.cities} className="regions__cities" />
                <InfoBlock data={region.desc.history} className="regions__history" />
                <InfoBlock data={region.desc.economy} className="regions__economy" />
                <InfoBlock data={region.desc.tourism} className="regions__tourism" />

                <div className="regions__symbols">
                    <h2 className="regions__symbols-title">{region.symbols.title}</h2>
                    {region.symbols.items.map((item, index) => (
                        <div key={index} className="regions__symbols-item">
                            {item.img && (
                                <img
                                    src={`${BASE_PHOTO_URL}${item.img}`}
                                    alt={item.bold}
                                    className="regions__symbols-img"
                                />
                            )}
                            <p className="regions__symbols-text">
                                {item.bold && <span className="regions__symbols-bold">{item.bold}</span>}
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="regions__history">
                    <h2 className="regions__history-title">{region.briefHistory.title}</h2>
                    {region.briefHistory.items.map((item, index) => (
                        <p key={index} className="regions__history-text">{item.text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Regions