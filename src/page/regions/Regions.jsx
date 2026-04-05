import { photosByCountry } from "../../datas/fotos";
import { Link, useParams } from 'react-router';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { useMeta } from '../../hooks/useMeta';
import './Regions.scss'
import { useEffect, useState } from 'react';
import CountryMap from '../../components/maps/CountryMap';
import BtnAttr from "../../components/btn-attr/BtnAttr";
import useLand from "../../hooks/useLand";
import { useSelector } from "react-redux";
import datas from '../../datas/minimalIndex'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Regions = () => {
    const { countryPath, regionPath } = useParams();
    const { region, error } = useLand(countryPath, regionPath);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { lang } = useSelector((state) => state.language);
    
    useMeta(region?.meta || {});
    
    useEffect(() => {
        if (region?.name) {
            document.title = region.name;
        }
    }, [region?.name]);

    const photos = photosByCountry[countryPath];

if (error) return <p>{error}</p>;
if (!region) return <div>Загрузка региона...</div>;

    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
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
                                            to={`/${countryPath}/${regionPath}/${district.path}`}
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
                                            to={`/${countryPath}/${regionPath}/city/${city.path}`}
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

                <BtnAttr lang={lang} path={`/${countryPath}/${regionPath}/attractions`} />

                <div className='regions__map'>
                    <CountryMap
                        countryKey={countryPath}
                        regions={region}
                        regionKey={region?.path}
                    />
                </div>

                {region.desc.capital && <InfoBlock data={region.desc.capital} className="regions__capital" />}
                {region.desc.population && <InfoBlock data={region.desc.population} className="regions__population" />}
                {photos[regionPath]?.region?.[0] && (
                    <img
                        src={`${BASE_PHOTO_URL}${photos[regionPath].region[0].path}`}
                        alt={photos[regionPath].region[0].title}
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