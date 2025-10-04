import { useParams } from 'react-router';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Attraction from '../../components/attraction/Attraction.jsx';
import useCityFullData from '../../hooks/useCityFullData.js';

import './Attractions.scss'

const AttractionsList = () => {
    const { countryPath, regionsPath, districtPath, cityPath } = useParams();
    const { country, region, district, parentSubRegion, city, attractions, lang, error } = useCityFullData();

    if (error) return <p>{error}</p>;
    if (!country || !region) return <p>Loading...</p>;
    if (!attractions) return <p>Loading...</p>

    // Фильтруем по URL
const filteredAttractions = attractions?.filter(attr => {
    if (cityPath) return attr.cityPath === cityPath;
    if (districtPath) return attr.districtPath === districtPath;
    return true; 
}) || [];

    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        country ? { label: country.countryName, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country?.path}/${region.path}` } : null,
        district ? { label: district.name, path: `/${country?.path}/${region?.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country?.path}/${region?.path}/${districtPath ? districtPath + '/' : ''}${city.path}` } : null,
        { label: lang === "ru" ? "Достопримечательности" : lang === "de" ? "Sehenswürdigkeiten" : "Пам'ятки" }
    ].filter(Boolean);


    const attractionsTitle = {
        ru: "Достопримечательности",
        ua: "Пам'ятки",
        de: "Sehenswürdigkeiten"
    }

console.log("URL params:", { countryPath, regionsPath, districtPath, cityPath });
console.log("Attractions data:", attractions);
console.log("Filtered:", filteredAttractions);

    return (
        <div className="attractions">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attractions__title'>{attractionsTitle[lang]}</div>

            <div className="attractions__list">
                {filteredAttractions.length === 0 ? (
                    <p>
                        {lang === 'ru' ? 'Нет достопримечательностей' :
                            lang === 'de' ? 'Keine Sehenswürdigkeiten' :
                                'Достопримечательностей немає'}
                    </p>
                ) : (
                    filteredAttractions.map(attr => (
                        <div key={attr.path} className="attractions__card">
                            <Attraction attr={attr} lang={lang} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AttractionsList