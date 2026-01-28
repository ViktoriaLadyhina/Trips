import React, { useEffect, useState } from 'react'
import './AttractionForm.scss';

const AttractionForm = () => {

    const [constructionPeriod, setConstructionPeriod] = useState("");
    const [architects, setArchitects] = useState("");
    const [founder, setFounder] = useState("");
    const [meta, setMeta] = useState({
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
    });




    const attractionObject = {

 
        ...(constructionPeriod.length > 0 && { construction_period: constructionPeriod }),
        ...(architects.length > 0 && { architects: architects }),
        ...(founder.length > 0 && { founder: founder }),
        meta: {
            title: meta.title,
            description: meta.description,
            ogTitle: meta.ogTitle,
            ogDescription: meta.ogDescription,
            ogImage: meta.ogImage
        }
    };


    // зашита от показа формы в продакшене
    if (import.meta.env.MODE !== "development") {
        return null;
    }

    return (

        <div className='forma'>
            <div>
                <h2>Добавить достопримечательность</h2>


                {/* // -------------- Мета-данные */}
                <div className='meta'>
                    <h3><span className="required">*</span>Мета-данные</h3>
                    <label>Мета-наименование для поисковиков</label>
                    <input
                        value={meta.title}
                        onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                    />
                    <label>Мета-описание для поисковиков</label>
                    <textarea
                        className='meta-textarea'
                        value={meta.description}
                        onChange={(e) => setMeta({ ...meta, description: e.target.value })}
                        rows={2}
                    />
                    <label>Мета-название для соцсетей</label>
                    <input
                        value={meta.ogTitle}
                        onChange={(e) => setMeta({ ...meta, ogTitle: e.target.value })}
                    />
                    <label>Мета-описание для соцсетей</label>
                    <textarea
                        className='meta-textarea'
                        value={meta.ogDescription}
                        onChange={(e) => setMeta({ ...meta, ogDescription: e.target.value })}
                        rows={2}
                    />
                    <label>Мета-фото для соцсетей</label>
                    <input
                        value={meta.ogImage}
                        onChange={(e) => setMeta({ ...meta, ogImage: e.target.value })}
                        placeholder="Полный путь к фото - https://our-travels.info/new/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/burg-bachem/Burg-Bachem_3.jpg"
                    />
                </div>

            </div>
        </div>

    )
}

export default AttractionForm