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
                            {cityData.desc?.population && (<InfoBlock data={cityData.desc.population} className="city__desc-population" />)}
                            {cityData.desc?.area && (<InfoBlock data={cityData.desc.area} className="city__desc-area" />)}
                            {cityData.desc?.postalCode && (<InfoBlock data={cityData.desc.postalCode} className="city__desc-postalCode" />)}
                            {cityData.desc?.phone && (<InfoBlock data={cityData.desc.phone} className="city__desc-phone" />)}
                            {cityData.desc?.officialSite && (<InfoBlock data={cityData.desc.officialSite} className="city__desc-officialSite" />)}
                        </div>

                        {photos?.[regionsPath]?.[cityPath]?.[1] && (
                            <img
                                src={`${BASE_PHOTO_URL}${photos[regionsPath][cityPath][1].path}`}
                                alt={photos[regionsPath][cityPath][1].title}
                                className='regions__foto'
                            />
                        )}

                        {cityData.geography?.items?.length > 0 && (
                            <div className="city__geography">
                                {cityData.geography.title && <h2 className="city__geography-title">{cityData.geography.title}</h2>}
                                {cityData.geography.items.map((item, index) => (
                                    item.text && <p key={index} className="city__geography-text">{item.text}</p>
                                ))}
                            </div>
                        )}

                        {cityData.notablePeople?.items && Object.entries(cityData.notablePeople.items).length > 0 && (
                            <div className="city__notablePeople">
                                {cityData.notablePeople.title && <h2 className="city__notablePeople-title">{cityData.notablePeople.title}</h2>}
                                {Object.entries(cityData.notablePeople.items).map(([id, personArray]) => {
                                    const boldItem = personArray.find(item => item.bold);
                                    const textItem = personArray.find(item => item.text);

                                    return (
                                        <div key={id} className="city__notablePeople-item">
                                            {boldItem && <span className="city__notablePeople-item__bold">{boldItem.bold} </span>}
                                            {textItem && <span className="city__notablePeople-item__text">{textItem.text}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {photos?.[regionsPath]?.[cityPath]?.[0] && (
                            <img
                                src={`${BASE_PHOTO_URL}${photos[regionsPath][cityPath][0].path}`}
                                alt={photos[regionsPath][cityPath][1]?.title}
                                className='regions__foto'
                            />
                        )}

                        {cityData.interestingFacts?.items?.length > 0 && (
                            <div className="city__interestingFacts">
                                {cityData.interestingFacts.title && <h2 className="city__interestingFacts-title">{cityData.interestingFacts.title}</h2>}
                                {cityData.interestingFacts.items.map((item, index) => item.text && (
                                    <p key={index} className="city__interestingFacts-text">{item.text}</p>
                                ))}
                            </div>
                        )}

                        {cityData.briefHistory?.items?.length > 0 && (
                            <div className="city__history">
                                {cityData.briefHistory.title && <h2 className="city__history-title">{cityData.briefHistory.title}</h2>}
                                {cityData.briefHistory.items.map((item, index) => item.text && (
                                    <p key={index} className="city__history-text">{item.text}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default City