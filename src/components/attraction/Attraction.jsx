import './Attraction.scss';
import { Link, useParams } from 'react-router';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Attraction = ({ attr, lang }) => {
    const params = useParams();
    const countryPath = params.countryPath || attr.countryPath || 'germany';
    const regionsPath = params.regionsPath || attr.regionsPath;
    const districtPath = params.districtPath || attr.districtPath;
    const cityPath = params.cityPath || attr.cityPath;

    const more = { ru: "Подробнее", ua: "Докладніше", de: "Weitere Details" };
    const location = { ru: "Месторасположение", ua: "Місце розташування", de: "Standort" };


    // Формируем путь корректно
    let detailPath = `/${countryPath}`;
    if (regionsPath) detailPath += `/${regionsPath}`;
    if (districtPath) detailPath += `/${districtPath}`;
    if (cityPath) detailPath += `/${cityPath}`;
    detailPath += `/attractions/${attr.path}`;

    return (
        <div className='attrCard'>
            <div className='attrCard__title'>{attr.name}</div>
            <div className='attrCard__desc'>
                <div className='attrCard__desc-foto'>
                    <img src={`${BASE_PHOTO_URL}${attr.fotoCard}`} alt={attr.name} />
                </div>
                <div className='attrCard__desc-info'>
                    <div className='attrCard__desc-info-text'>{attr.short_description}</div>

{attr.unesco_status?.included && <span className='attrCard__desc-info-text'>UNESCO {attr.unesco_status.year}</span>}

                    <div className='attrCard__desc-info-text'>{location[lang]}: {attr.location}</div>

                    <div className='attrCard__desc-info-more'>
                        <Link to={detailPath}>
                            {more[lang]}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attraction;