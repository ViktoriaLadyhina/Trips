import InfoBlock from '../InfoBlock/InfoBlock';
import './Attraction.scss';
import { Link, useParams } from 'react-router';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const more = { ru: "Подробнее", ua: "Докладніше", de: "Weitere Details" };
const location = { ru: "Месторасположение", ua: "Місце розташування", de: "Standort" };
const ratingLabel = { ru: "Рейтинг", ua: "Рейтинг", de: "Bewertung" };
const topOptionLabel = { top: { ru: "Топовый", ua: "Топовий", de: "Top" }, popular: { ru: "Популярный", ua: "Популярний", de: "Beliebt" }, local: { ru: "Локальный", ua: "Локальний", de: "Lokal" } };
const noteLabel = { partial: { ru: "Частично сохранилось", ua: "Частково збережено", de: "Teilweise erhalten" }, lost: { ru: "Утрачено", ua: "Втрачено", de: "Verloren" } };

const AttractionCard = ({ attr, lang }) => {
    const params = useParams();
    const countryPath = params.countryPath || attr.countryPath || 'germany';
    const regionPath = params.regionPath || attr.regionPath;
    const districtPath = params.districtPath || attr.districtPath;
    const cityPath = params.cityPath || attr.cityPath;
    const status = attr.status ?? 'active';

    // Формируем путь корректно
    let detailPath = `/${countryPath}`;
    if (regionPath) detailPath += `/${regionPath}`;
    if (districtPath) detailPath += `/${districtPath}`;
    if (cityPath) detailPath += `/${cityPath}`;
    detailPath += `/attractions/${attr.path}`;

    return (
        <div className={`attrCard attrCard--${status}`}>
            <div className='attrCard__title'>{attr.name}</div>

            <div className='attrCard__rating'>
                {attr.rating && (
                    <span>
                        <span className='attrCard__rating-label'>{ratingLabel[lang]}:</span>{' '}
                        <span className='attrCard__rating-value'>{topOptionLabel[attr.rating][lang]}</span>
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

                    {attr.short_description_subObjects && (
                        <div className='attrCard__desc-subObjects'>
                            {attr.short_description_subObjects.text}
                            <ul>
                                {attr.short_description_subObjects.items.map((item, i) => (
                                    <li key={i}>
                                        <InfoBlock data={[item]} className="attrCard__desc-subObjects" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {attr.note && (
                        <span className='attrCard__desc-info-text'>
                            <strong>{noteLabel[attr.status][lang]}:</strong> {attr.note}
                    </span>
                    )}
                    
                    {attr.unesco_status?.included && (
                        <span className='attrCard__desc-info-text'>
                            🌍UNESCO {attr.unesco_status.year}
                        </span>
                    )}

                    {attr.location && (
                        <div className='attrCard__desc-info-text'>{location[lang]}: {attr.location}</div>
                    )}
                    {detailPath && (
                        <div className='attrCard__desc-info-more'>
                            <Link to={detailPath}>{more[lang]}</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default AttractionCard;