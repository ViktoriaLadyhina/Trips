import { useNavigate, useParams } from 'react-router';
import { photosByCountry } from "../../datas/fotos/index.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import { useMeta } from '../../hooks/useMeta.js';
import './City.scss'
import useCityFullData from '../../hooks/useCityFullData.js';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const City = () => {
    const { countryPath, regionsPath, districtPath, cityPath } = useParams();
    const { country, region, district, parentSubRegion, city, cityData, lang, error } = useCityFullData();
    const navigate = useNavigate();

    useMeta(cityData?.meta);

    if (error) return <p>{error}</p>;
    if (!cityData) return <p>Loading...</p>;

    const photos = photosByCountry[countryPath];

    const handleClick = () => {
        navigate(`/${countryPath}/${regionsPath}/${districtPath}/${cityPath}/attractions`);
    };


    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        { label: country.countryName, path: `/${countryPath}` },
        { label: region.name, path: `/${countryPath}/${regionsPath}` },
        ...(district ? [{ label: district.name, path: `/${countryPath}/${regionsPath}/${districtPath}` }] : []),
        ...(parentSubRegion ? [{ label: parentSubRegion.name }] : []),
        { label: city.name }
    ];

    const attractions = {
        ru: "Достопримечательности",
        ua: "Пам'ятки",
        de: "Sehenswürdigkeiten"
    }

    return (
        <div className='city'>
            {cityData && (
                <>
                    <BreadCrumbs crumbs={crumbs} />

                    <div className='city__container'>
                        {cityData.name && <div className='city__title'>{cityData.name}</div>}

                        <button className='city__button' onClick={handleClick}>{attractions[lang]}</button>

                        <div className='city__desc'>
                            {cityData.desc?.general && (<InfoBlock data={cityData.desc.general} className="city__desc-general" />)}

                            {photos?.[regionsPath]?.[cityPath]?.[0] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos[regionsPath][cityPath][0].path}`}
                                    alt={photos[regionsPath][cityPath][0].title}
                                    className='city__foto--right'
                                />
                            )}

                            {cityData.desc?.population && (<InfoBlock data={cityData.desc.population} className="city__desc-population" />)}
                            {cityData.desc?.area && (<InfoBlock data={cityData.desc.area} className="city__desc-area" />)}
                            {cityData.desc?.postalCode && (<InfoBlock data={cityData.desc.postalCode} className="city__desc-postalCode" />)}
                            {cityData.desc?.phone && (<InfoBlock data={cityData.desc.phone} className="city__desc-phone" />)}
                            {cityData.desc?.officialSite && (<InfoBlock data={cityData.desc.officialSite} className="city__desc-officialSite" />)}
                            {cityData.notablePeople && (<InfoBlock data={cityData.notablePeople} className="city__desc-notablePeople" />)}

                            {photos?.[regionsPath]?.[cityPath]?.[1] && (
                                <img
                                    src={`${BASE_PHOTO_URL}${photos[regionsPath][cityPath][1].path}`}
                                    alt={photos[regionsPath][cityPath][1].title}
                                    className='city__foto'
                                />
                            )}

                            {cityData.geography && (<InfoBlock data={cityData.geography} className="city__desc-geography" />)}
                            {cityData.interestingFacts && (<InfoBlock data={cityData.interestingFacts} className="city__desc-interestingFacts" />)}
                            {cityData.briefHistory && (<InfoBlock data={cityData.briefHistory} className="city__desc-history" />)}
                        </div>


                    </div>
                </>
            )}
        </div>
    )
}

export default City