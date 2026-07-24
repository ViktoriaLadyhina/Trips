import InfoBlock from '../InfoBlock/InfoBlock.jsx';
import { TextBlock } from '../renders/TextBlock.jsx';
import './Attraction.scss';
import { Link } from 'react-router';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const more = { ru: "Подробнее", uk: "Докладніше", de: "Weitere Details" };
const location = { ru: "Месторасположение", uk: "Місце розташування", de: "Standort" };
const ratingLabel = { ru: "Рейтинг", uk: "Рейтинг", de: "Bewertung" };
const topOptionLabel = { top: { ru: "Топовый", uk: "Топовий", de: "Top" }, popular: { ru: "Популярный", uk: "Популярний", de: "Beliebt" }, local: { ru: "Локальный", uk: "Локальний", de: "Lokal" } };
const noteLabel = { partial: { ru: "Частично сохранилось", uk: "Частково збережено", de: "Teilweise erhalten" }, lost: { ru: "Утрачено", uk: "Втрачено", de: "Verloren" } };


const AttractionCardSub = ({ attr, lang }) => {

    const status = attr.status ?? 'active';

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
                        <img
                            src={`${BASE_PHOTO_URL}${typeof attr.fotoCard === 'string'
                                    ? attr.fotoCard
                                    : attr.fotoCard.path
                                }`}
                            alt={
                                typeof attr.fotoCard === 'object'
                                    ? attr.fotoCard.title?.[lang] || attr.name
                                    : attr.name
                            }
                        />
                    </div>
                )}
                <div
                    className='attrCard__desc-info'>
                    {attr.short_description && (
                        <TextBlock
                            block={{ block_key: 'short_description' }}
                            langData={{
                                short_description: attr.short_description
                            }}
                            classPrefix="attrCard__desc-info-text"
                        />
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
                    {attr.loc && (
                        <div className='attrCard__desc-info-text'>{location[lang]}: {attr.loc?.city} ({attr.loc?.cityDistrict}), {attr.loc?.country}</div>
                    )}
                    {(attr.showMore || attr.id) && (
                        <div className='attrCard__desc-info-more'>
                            <Link
                                to={`/${attr.countryPath}/${attr.regionPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.slug || attr.path}`}
                            >
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