import { regions as ruRegions } from '../../datas/ru';
import { regions as uaRegions } from '../../datas/ua';
import { regions as deRegions } from '../../datas/de';
import { photosByCountry } from "../../datas/fotos";

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';

import InfoBlock from '../../components/InfoBlock/InfoBlock';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { useMeta } from '../../hooks/useMeta';
import './Regions.scss'
import { useState } from 'react';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Regions = () => {
    const { countryPath, regionsPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const allRegions = lang === 'ua' ? uaRegions : lang === 'de' ? deRegions : ruRegions;

    const countryRegions = allRegions[countryPath];
    console.log(allRegions);


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

            <aside className={`regions__sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
                <div className="regions__sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</div>
                {/* Административные округа */}
                {region.discriptRegions[0] && (
                    <div>
                        <h2 className="regions__sidebar-title">{region.discriptRegions[0].title}</h2>
                        <ul className={`regions__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                            {region.discriptRegions[0]?.items?.map((district) => (
                                <li key={district.id} className="regions__sidebar-item">
                                    {district.hasInfo ? (
                                        <Link
                                            to={`/${countryPath}/${regionsPath}/${district.patch}`}
                                            className="regions__sidebar-link"
                                        >
                                            {district.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {district.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Свободные города */}
                {region.discriptRegions[1] && (
                    <div>
                        <h2 className="regions__sidebar-title">{region.discriptRegions[1].title}</h2>
                        <ul className="regions__sidebar-list">
                            {region.discriptRegions[1]?.items?.map((city) => (
                                <li key={city.id} className="regions__sidebar-item">
                                    {city.hasInfo ? (
                                        <Link
                                            to={`/${countryPath}/${regionsPath}/city/${city.patch}`}
                                            className="regions__sidebar-link"
                                        >
                                            {city.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {city.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>

            <div className="regions__content">
                <BreadCrumbs crumbs={crumbs} />

                <h1 className="regions__title">{region.name}</h1>
                {region.currentMap && (
                    <img src={`${BASE_PHOTO_URL}${region.currentMap}`} alt={`${region?.country} map`} />
                )}

                {region.desc.capital && <InfoBlock data={region.desc.capital} className="regions__capital" />}
                {region.desc.population && <InfoBlock data={region.desc.population} className="regions__population" />}
                {photos[regionsPath]?.region?.[0] && (
                    <img
                        src={`${BASE_PHOTO_URL}${photos[regionsPath].region[0].path}`}
                        alt={photos[regionsPath].region[0].title}
                        className="regions__foto"
                    />
                )}
                {region.desc.area && <InfoBlock data={region.desc.area} className="regions__area" />}
                {region.desc.geography && <InfoBlock data={region.desc.geography} className="regions__geography" />}
                {region.desc.rivers && <InfoBlock data={region.desc.rivers} className="regions__rivers" />}
                {region.desc.cities && <InfoBlock data={region.desc.cities} className="regions__cities" />}
                {region.desc.history && <InfoBlock data={region.desc.history} className="regions__history" />}
                {region.desc.economy && <InfoBlock data={region.desc.economy} className="regions__economy" />}
                {region.desc.tourism && <InfoBlock data={region.desc.tourism} className="regions__tourism" />}
                {region.desc.culture && <InfoBlock data={region.desc.culture} className="regions__culture" />}
                {region.desc.notablePeople && <InfoBlock data={region.desc.notablePeople} className="regions__notablePeople" />}
                {region.desc.interestingFacts && <InfoBlock data={region.desc.interestingFacts} className="regions__interestingFacts" />}
                {region.symbols && <InfoBlock data={region.symbols} className="regions__symbols" />}
                {region.briefHistory && <InfoBlock data={region.briefHistory} className="regions__history" />}

            </div>
        </div>
    )
}

export default Regions