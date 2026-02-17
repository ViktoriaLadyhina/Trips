import { Link, useParams } from 'react-router';
import { photosByCountry } from "../../datas/fotos/index.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import { useMeta } from '../../hooks/useMeta.js';
import './City.scss'
import useCityFullData from '../../hooks/useCityFullData.js';
import BtnAttr from '../../components/btn-attr/BtnAttr.jsx';
import { useEffect } from 'react';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const City = () => {
    const { countryPath, regionsPath, districtPath, cityPath } = useParams();
    const { region, district, parentSubRegion, city, cityData, lang, events, error } = useCityFullData();

    useMeta(cityData?.meta);

    useEffect(() => {
    if (cityData?.name) {
        document.title = cityData.name;
    }
}, [cityData?.name]);

    if (error) return <p>{error}</p>;
    if (!cityData) return <p>Loading...</p>;   

    const photos = photosByCountry[countryPath];

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        { label: region.country, path: `/${countryPath}` },
        { label: region.name, path: `/${countryPath}/${regionsPath}` },
        ...(district ? [{ label: district.name, path: `/${countryPath}/${regionsPath}/${districtPath}` }] : []),
        ...(parentSubRegion ? [{ label: parentSubRegion.name }] : []),
        { label: city.name }
    ];
    
    return (
        <div className='city'>
            {cityData && (
                <>
                    <BreadCrumbs crumbs={crumbs} />

                    <div className='city__container'>
                        {cityData.name && <div className='city__title'>{cityData.name}</div>}

                        <BtnAttr lang={lang} path={`/${countryPath}/${regionsPath}/${districtPath}/${cityPath}/attractions`} />

                        <div className='city__desc'>
                            {cityData.desc?.general && (<InfoBlock data={cityData.desc.general} className="city__desc-general" />)}

                            {photos?.[regionsPath]?.[cityPath]?.gallery?.[0] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos[regionsPath][cityPath].gallery[0].path}`}
                                    alt={photos[regionsPath][cityPath].gallery[0].title.de}
                                    className='city__foto city__foto--right'
                                />
                            )}

                            {cityData.desc?.population && (<InfoBlock data={cityData.desc.population} className="city__desc-population" />)}
                            {cityData.desc?.area && (<InfoBlock data={cityData.desc.area} className="city__desc-area" />)}
                            {cityData.desc?.postalCode && (<InfoBlock data={cityData.desc.postalCode} className="city__desc-postalCode" />)}
                            {cityData.desc?.phone && (<InfoBlock data={cityData.desc.phone} className="city__desc-phone" />)}
                            {cityData.desc?.education && (<InfoBlock data={cityData.desc.education} className="city__desc-phone" />)}
                            {cityData.desc?.culture && (<InfoBlock data={cityData.desc.culture} className="city__desc-phone" />)}
                            {cityData.desc?.officialSite && (<InfoBlock data={cityData.desc.officialSite} className="city__desc-officialSite" />)}
                            {cityData.notablePeople && (<InfoBlock data={cityData.notablePeople} className="city__desc-notablePeople" />)}

                            {photos?.[regionsPath]?.[cityPath]?.gallery?.[1] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos?.[regionsPath]?.[cityPath]?.gallery?.[1].path}`}
                                    alt={photos?.[regionsPath]?.[cityPath]?.gallery?.[1].title}
                                    className='city__foto'
                                />
                            )}

                            {cityData.geography && (<InfoBlock data={cityData.geography} className="city__desc-geography" />)}
                            {cityData.interestingFacts && (<InfoBlock data={cityData.interestingFacts} className="city__desc-interestingFacts" />)}
                            {cityData.briefHistory && (<InfoBlock data={cityData.briefHistory} className="city__desc-history" />)}
                        </div>

                        {/* ------------------- Раздел мероприятий ------------------- */}
                        {events && events.length > 0 && (
                            <div className="city__events">
                                <h2>{lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи"}</h2>
                                <table className="city__events-table">
                                    <thead>
                                        <tr>
                                            <th>{lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}</th>
                                            <th>{lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}</th>
                                            <th>{lang === "ru" ? "Даты" : lang === "de" ? "Datum" : "Дати"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map(ev => (
                                            <tr key={ev.id}>
                                                <td data-label={lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}>
                                                    <Link to={`/${countryPath}/${regionsPath}/${districtPath}/${cityPath}/events/${ev.path}`}>{ev.name}</Link>
                                                </td>
                                                <td data-label={lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}>{ev.short_description}</td>
                                                <td data-label={lang === "ru" ? "Даты" : lang === "de" ? "Datum" : "Дати"}>{ev.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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