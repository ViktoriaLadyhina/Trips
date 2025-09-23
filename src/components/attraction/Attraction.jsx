import React from 'react'
import './Attraction.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Attraction = ({ attr, lang }) => {

        const more = {
        ru: "Подробнее",
        ua: "Докладніше",
        de: "Weitere Details"
    }

    return (
        <div className='attrCard'>
            <div className='attrCard__title'>{attr.name}</div>
            <div className='attrCard__desc'>
                <div className='attrCard__desc-foto'><img src={`${BASE_PHOTO_URL}${attr.fotoCard}`} alt={attr.name} /></div>
                <div className='attrCard__desc-info'>
                    <div className='attrCard__desc-info-text'>{attr.short_description}</div>
                    <div className='attrCard__desc-info-more'>{more[lang]}</div>
                    </div>
            </div>
        </div>
    )
}

export default Attraction