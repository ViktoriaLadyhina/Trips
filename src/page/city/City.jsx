import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { regions as ruDistricts } from '../../datas/ru';
import { regions as uaDistricts } from '../../datas/ua';
import { regions as deDistricts } from '../../datas/de';
import { photosByCountry } from "../../datas/fotos";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import { useCityData } from '../../hooks/useCityData.js';
import { useMeta } from '../../hooks/useMeta';
import './City.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const City = () => {
    const { countryPath, regionsPath, districtPath, cityPath } = useParams();
    const { lang } = useSelector((state) => state.language);

    const allDistricts = lang === 'ua' ? uaDistricts : lang === 'de' ? deDistricts : ruDistricts;
    const { cityData, error } = useCityData({ lang, countryPath, regionsPath, cityPath });
    useMeta(cityData?.meta);

    // логика для поиска самого города
    // 1. Берём страны
    const countryRegions = allDistricts[countryPath];
    if (!countryRegions) return <p>Country not found</p>;

    // 2. Берём регион
    const region = countryRegions[regionsPath];
    if (!region) return <p>Region not found</p>;

    let subRegions = [];
    let allCities = [];
    let city;
    let district;

    // Пробуем найти район по patch
    const districtItems = region.discriptRegions.flatMap(r => r.items);
    district = districtItems.find(d => d.patch === districtPath);

    if (district?.subRegion?.length > 0) {
        // Если есть субрегионы — работаем как район
        subRegions = district.subRegion;
        allCities = subRegions.flatMap(sub => sub.communities || []);
        city = allCities.find(c => c.patch === cityPath);
    } else {
        // Если нет субрегионов — ищем сразу свободный город
        allCities = region.discriptRegions[1]?.items || [];
        city = allCities.find(c => c.patch === districtPath || c.patch === cityPath);
    }

    if (!city) return <p>City not found</p>;

    // находим родительский субрегион для хлебных крошек
    const parentSubRegion = subRegions.find(sub => sub.communities.some(c => c.patch === cityPath));

    const photos = photosByCountry[countryPath];

    if (error) return <p>{error}</p>;
    if (!cityData) return <p>Loading...</p>;

    // Хлебные крошки
    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: countryRegions.countryName, path: `/${countryPath}` },
        { label: region.name, path: `/${countryPath}/${regionsPath}` },
        // Добавляем district только если он найден и есть субрегионы
        ...(district && district.subRegion?.length > 0 ? [{ label: district.name, path: `/${countryPath}/${regionsPath}/${districtPath}` }] : []),
        // Добавляем parentSubRegion, если он найден
        ...(parentSubRegion ? [{ label: parentSubRegion.name }] : []),
        { label: cityData.name },
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

                        <button className='city__button'>{attractions[lang]}</button>

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