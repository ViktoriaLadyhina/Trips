import './Attraction.scss';
import { Link } from 'react-router';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const more = { ru: "Подробнее", ua: "Докладніше", de: "Weitere Details" };
const ratingLabel = { ru: "Рейтинг", ua: "Рейтинг", de: "Bewertung" };
const topOptionLabel = { top: { ru: "Топовый", ua: "Топовий", de: "Top" }, popular: { ru: "Популярный", ua: "Популярний", de: "Beliebt" }, local: { ru: "Локальный", ua: "Локальний", de: "Lokal" } };

const AttractionCardSub = ({ attr, lang }) => {

    return (
        <div className='attrCard'>
            <div className='attrCard__title'>{attr.name}</div>

            <div className='attrCard__rating'>
                {attr.top && (
                    <span>
                        <span className='attrCard__rating-label'>{ratingLabel[lang]}:</span>{' '}
                        <span className='attrCard__rating-value'>{topOptionLabel[attr.top][lang]}</span>
                    </span>
                )}
            </div>

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
                    {attr.short_description2 && (
                        <div className='attrCard__desc-info-text'>{attr.short_description2}</div>
                    )}
                    {attr.unesco_status?.included && (
                        <span className='attrCard__desc-info-text'>
                            UNESCO {attr.unesco_status.year}
                        </span>
                    )}
                    {attr.showMore && (
                        <div className='attrCard__desc-info-more'>
                            <Link to={`/${attr.countryPath}/${attr.regionsPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.slug || attr.path}`}>
                                {more[lang]}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AttractionCardSub;