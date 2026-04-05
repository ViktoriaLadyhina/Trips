import { Link, useParams } from 'react-router';
import { photosByCountry } from "../../datas/fotos/index.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import { useMeta } from '../../hooks/useMeta.js';
import './City.scss'
import BtnAttr from '../../components/btn-attr/BtnAttr.jsx';
import { useEffect } from 'react';
import useCity from '../../hooks/useCity.js';
import { useSelector } from 'react-redux';
import useEvents from '../../hooks/useEvents.js';
import datas from '../../datas/minimalIndex'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const City = () => {
    const { countryPath, regionPath, districtPath, cityPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const { city, error } = useCity(countryPath, regionPath, districtPath, cityPath);
     const { events } = useEvents(countryPath, regionPath, districtPath, cityPath);

    useMeta(city?.meta);

    useEffect(() => {
        if (city?.name) {
            document.title = city.name;
        }
    }, [city?.name]);

    if (error) return <p>{error}</p>;
    if (!city) return <p>Loading...</p>;

    const photos = photosByCountry[countryPath];
    const cityEvents = events?.filter(ev => ev.cities?.includes(cityPath)) || [];


    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
        { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` },
        ...(districtPath !== "city" ? [{ label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }] : []),
        ...(districtPath !== "city" ? [{ label: city.subRegionName }] : []),
        { label: city.name }
    ];

    return (
        <div className='city'>
            {city && (
                <>
                    <BreadCrumbs crumbs={crumbs} />

                    <div className='city__container'>
                        {city.name && <div className='city__title'>{city.name}</div>}

                        <BtnAttr lang={lang} path={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/attractions`} />


                        <div className='city__desc'>
                            {city?.gerb && (
                                <div className='city__desc-gerb'>
                                    <img src={`${BASE_PHOTO_URL}${city.gerb}`} alt={city.name} />
                                </div>
                            )}


                            {city.desc?.general && (<InfoBlock data={city.desc.general} className="city__desc-general" />)}

                            {photos?.[regionPath]?.[cityPath]?.gallery?.[0] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos[regionPath][cityPath].gallery[0].path}`}
                                    alt={photos[regionPath][cityPath].gallery[0].title?.[lang]}
                                    className='city__foto city__foto--right'
                                />
                            )}

                            {city.desc?.population && (<InfoBlock data={city.desc.population} className="city__desc-population" />)}
                            {city.desc?.area && (<InfoBlock data={city.desc.area} className="city__desc-area" />)}
                            {city.desc?.postalCode && (<InfoBlock data={city.desc.postalCode} className="city__desc-postalCode" />)}
                            {city.desc?.phone && (<InfoBlock data={city.desc.phone} className="city__desc-phone" />)}
                            {city.desc?.education && (<InfoBlock data={city.desc.education} className="city__desc-phone" />)}
                            {city.desc?.culture && (<InfoBlock data={city.desc.culture} className="city__desc-phone" />)}
                            {city.desc?.officialSite && (<InfoBlock data={city.desc.officialSite} className="city__desc-officialSite" />)}
                            {city.notablePeople && (<InfoBlock data={city.notablePeople} className="city__desc-notablePeople" />)}

                            {photos?.[regionPath]?.[cityPath]?.gallery?.[1] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos?.[regionPath]?.[cityPath]?.gallery?.[1].path}`}
                                    alt={photos?.[regionPath]?.[cityPath]?.gallery?.[1].title?.[lang]}
                                    className='city__foto'
                                />
                            )}

                            {city.geography && (<InfoBlock data={city.geography} className="city__desc-geography" />)}
                            {city.interestingFacts && (<InfoBlock data={city.interestingFacts} className="city__desc-interestingFacts" />)}
                            {city.briefHistory && (<InfoBlock data={city.briefHistory} className="city__desc-history" />)}
                        </div>

                        {/* ------------------- Раздел мероприятий ------------------- */}
                        {cityEvents && cityEvents.length > 0 && (
                            <div className="city__events">

                                <h2 className="city__events-title"> {lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи"} </h2>

                                {/* ===== TABLE (desktop) ===== */}
                                <table className="city__events-table">
                                    <thead>
                                        <tr>
                                            <th>{lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}</th>
                                            <th>{lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}</th>
                                            <th>{lang === "ru" ? "Даты" : lang === "de" ? "Datum" : "Дати"}</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cityEvents.map(ev => (
                                            <tr key={ev.id}>
                                                <td><Link to={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/events/${ev.path}`}>{ev.name}</Link> </td>
                                                <td>{ev.short_description}</td>
                                                <td>{ev.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                                {/* ===== CARDS (mobile) ===== */}
                                <div className="city-events-cards">
                                    {cityEvents.map(ev => (
                                        <div key={ev.id} className="city-events-card">

                                            <div className="city-events-row">
                                                <strong>{lang === "ru" ? "Название:" : lang === "de" ? "Name:" : "Назва:"}</strong>{" "}
                                                <Link to={`/${countryPath}/${regionPath}/${districtPath}/${cityPath}/events/${ev.path}`}> {ev.name} </Link>
                                            </div>

                                            <div className="city-events-row">
                                                {ev.short_description}
                                            </div>

                                            <div className="city-events-row">
                                                <strong>{lang === "ru" ? "Даты:" : lang === "de" ? "Datum:" : "Дати:"}</strong>{" "}{ev.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* ---------------------------------------------------------- */}

                    </div>
                </>
            )}
        </div>
    )
}

export default City