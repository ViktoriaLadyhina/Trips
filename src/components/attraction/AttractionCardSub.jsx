import './Attraction.scss';
import { Link } from 'react-router';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const AttractionCardSub = ({ attr, lang }) => {

    const more = { ru: "Подробнее", ua: "Докладніше", de: "Weitere Details" };
    const location = { ru: "Месторасположение", ua: "Місце розташування", de: "Standort" };

    return (
        <div className='attrCard'>
            <div className='attrCard__title'>{attr.name}</div>
            <div className='attrCard__desc'>
                {attr.fotoCard && (
                    <div className='attrCard__desc-foto'>
                        <img src={`${BASE_PHOTO_URL}${attr.fotoCard}`} alt={attr.name} />
                    </div>
                )}
                <div className='attrCard__desc-info'>
                    {attr.short_description && (
                        <div className='attrCard__desc-info-text'>{attr.short_description}</div>
                    )}
                    {attr.unesco_status?.included && (
                        <span className='attrCard__desc-info-text'>
                            UNESCO {attr.unesco_status.year}
                        </span>
                    )}
                </div>

                <Link
                    to={`/${attr.countryPath}/${attr.regionsPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.slug || attr.path}`}
                    className="attrCard__link"
                >
                    {more[lang]}
                </Link>

            </div>
        </div>
    );
};

export default AttractionCardSub;