import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { regions as ruDistricts } from '../../datas/ru';
import { regions as uaDistricts } from '../../datas/ua';
import { regions as deDistricts } from '../../datas/de';

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

    // логика для поиска самого города
    // 1. Берём страны
    const countryRegions = allDistricts[countryPath];

    // 2. Берём регион
    const region = countryRegions[regionsPath];

    // 3. Ищем район по patch
    const districtItems = region.discriptRegions.flatMap(r => r.items);
    const district = districtItems.find(d => d.patch === districtPath);

    // Получаем все субрегионы района
    const subRegions = district.subRegion;

    // Получаем все города из всех субрегионов
    const allCities = subRegions.flatMap(sub => sub.communities);

    // Ищем город по cityPath
    const city = allCities.find(c => c.patch === cityPath);

    useMeta(cityData?.meta);

    if (!countryRegions) return <p>Country not found</p>;
    if (!region) return <p>Region not found</p>;
    if (!district) return <p>District not found</p>;
    if (!subRegions || subRegions.length === 0) return <p>No subRegions found</p>;
    if (!allCities || allCities.length === 0) return <p>No cities found</p>;
    if (!city) return <p>City not found</p>;

    // находим родительский субрегион для хлебных крошек
    const parentSubRegion = subRegions.find(sub => sub.communities.some(c => c.patch === cityPath));

    if (error) return <p>{error}</p>;
    if (!cityData) return <p>Loading...</p>;

    // Хлебные крошки
    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: countryRegions.countryName, path: `/${countryPath}` },
        { label: region.name, path: `/${countryPath}/${regionsPath}` },
        { label: district.name, path: `/${countryPath}/${regionsPath}/${districtPath}` },
        { label: parentSubRegion.name },
        { label: cityData.name },
    ];

    const attractions = {
        ru: "Достопримечательности",
        ua: "Пам'ятки",
        de: "Sehenswürdigkeiten"
    }

    return (
        <div className='city'>
            <BreadCrumbs crumbs={crumbs} />
            <div className='city__container'>
                <div className='city__title'>{cityData.name}</div>
                <button className='city__button'>{attractions[lang]}</button>
                <div className='city__desc'>
                    <InfoBlock data={cityData?.desc?.general} className="city__desc-general" />
                    <InfoBlock data={cityData?.desc?.population} className="city__desc-population" />
                    <InfoBlock data={cityData?.desc?.area} className="city__desc-area" />
                    <InfoBlock data={cityData?.desc?.postalCode} className="city__desc-postalCode" />
                    <InfoBlock data={cityData?.desc?.phone} className="city__desc-phone" />
                    <InfoBlock data={cityData?.desc?.officialSite} className="city__desc-officialSite" />
                </div>
                {cityData.notablePeople && (
                    <div className="city__notablePeople">
                        <h2 className="city__notablePeople-title">{cityData.notablePeople.title}</h2>
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
                {cityData.interestingFacts && (
                    <div className="city__history">
                        <h2 className="city__history-title">{cityData.interestingFacts.title}</h2>
                        {cityData.interestingFacts.items.map((item, index) => (
                            <p key={index} className="city__history-text">{item.text}</p>
                        ))}
                    </div>
                )}
                {cityData.briefHistory && (
                    <div className="city__history">
                        <h2 className="city__history-title">{cityData.briefHistory.title}</h2>
                        {cityData.briefHistory.items.map((item, index) => (
                            <p key={index} className="city__history-text">{item.text}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default City