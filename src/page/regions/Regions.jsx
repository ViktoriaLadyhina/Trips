import { useEffect, useMemo, useState } from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router';
import { Helmet } from "react-helmet-async";

import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import './Regions.scss'
import CountryMap from '../../components/maps/CountryMap.jsx';
import datas from '../../datas/minimalIndex.js'
import { toFullUrl, fixHtmlImages } from "../../utils/photo.js";
import { getRegion } from "../../api/api.js";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;
const regionTitlesByType = {
    district: { ru: "Административные округа", uk: "Адміністративні округи", de: "Regierungsbezirke" },
    city: { ru: "Свободные города", uk: "Вільні міста", de: "Kreisfreie Städte" },
    commune: { ru: "Коммуны и населённые пункты", uk: "Громади та населені пункти", de: "Gemeinden und Ortschaften" }
};
const loadingRegion = { ru: "Загрузка региона...",  de: "Region wird geladen...", uk: "Завантаження регіону..." };

const Regions = () => {
    const { countryPath, regionPath } = useParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { lang } = useSelector((state) => state.language);

    const [region, setRegion] = useState(null);
    const [error, setError] = useState(null);

    const meta = region?.meta;

    // фетч запрос
    useEffect(() => {
  if (!regionPath) return;
  getRegion(regionPath, lang)
  .then(setRegion)
  .catch(err => setError(err.message))
}, [regionPath, lang]);

    const blocks = useMemo(() => {
        return (region?.blocks || [])
            .slice()
            .sort((a, b) => a.sort_order - b.sort_order);
    }, [region]);

    const langData = useMemo(() => {
        if (!region?.blocks) return {};

        return region.blocks.reduce((acc, b) => {
            acc[b.block_key] = b.content;
            return acc;
        }, {});
    }, [region]);


    const renderBlock = (block) => {
        switch (block.block_key) {

            // ===== TEXT BLOCKS =====
            case "name":
            case "capital":
            case "geography":
            case "area":
            case "population":
            case "historyName":
            case "economy":
            case "tourism":
            case "briefHistory":
            case "interestingFacts":    
            case "symbols":
                return langData?.[block.block_key] ? (
                    <section
                        className={`regions__${block.block_key}`}
                        dangerouslySetInnerHTML={{
                            __html: fixHtmlImages(langData[block.block_key])
                        }}
                    />
                ) : null;

            // ===== MAP =====
            case "map":
                
                return (
                    <div className='regions__map'>
                        <BtnAttr lang={lang} path={`/${countryPath}/${regionPath}/attractions`} />
                        <CountryMap
                            countryKey={countryPath}
                            regions={region}
                            regionKey={region?.path}
                        />
                    </div>
                );

            // ===== PHOTO =====
case "photo": {
    const photo = region.mainPhoto;

    return (
        <img
            src={`${BASE_PHOTO_URL}${photo.path}`}
            className="regions__photo"
            alt={photo.title?.[lang] || ""}
        />
    );
}

            default:
                return null;
        }
    };


    if (error) return <p>{error}</p>;
    if (!region) return <div>{loadingRegion[lang]}</div>;

    // BreadCrumbs
    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
        { label: datas.regions[regionPath][lang] }
    ];


    return (
        <div className='regions'>

            {meta && (
                <Helmet>
                    <title>{meta.title || datas.regions[regionPath][lang]}</title>
                    <meta name="title" content={meta.title} />
                    <meta name="description" content={meta.description} />
                    <meta property="og:title" content={meta.og_title} />
                    <meta property="og:description" content={meta.og_description} />
                    <meta property="og:image" content={toFullUrl(meta.og_image)} />
                </Helmet>
            )}

            <aside className={`regions__sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
                <div className="regions__sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</div>
                {/* Административные округа */}
                {region.discriptRegions?.length > 0 && (
                    <div>
                        <h2 className="regions__sidebar-title">{regionTitlesByType["district"]?.[lang]}</h2>
                        <ul className={`regions__sidebar-list ${sidebarOpen ? "active" : ""}`}>
                            {region.discriptRegions?.map((district) => (
                                <li key={district.id} className="regions__sidebar-item">
                                    {district.is_active ? (
                                        <Link
                                            to={`/${countryPath}/${regionPath}/${district.path}`}
                                            className="regions__sidebar-link"
                                        >
                                            {district.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {district.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Свободные города */}
                {region.cities?.length > 0 && (
                    <div>
                        <h2 className="regions__sidebar-title">{regionTitlesByType["city"]?.[lang]}</h2>
                        <ul className="regions__sidebar-list">
                            {region.cities?.map((city) => (
                                <li key={city.id} className="regions__sidebar-item">
                                    {city.is_active ? (
                                        <Link
                                            to={`/${countryPath}/${regionPath}/city/${city.path}`}
                                            className="regions__sidebar-link"
                                        >
                                            {city.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {city.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Коммуны */}
                {region.communes?.length > 0 && (
                    <div>
                        <h2 className="regions__sidebar-title">{regionTitlesByType["commune"]?.[lang]}</h2>
                        <ul className="regions__sidebar-list">
                            {region.communes?.map((com) => (
                                <li key={com.id} className="regions__sidebar-item">
                                    {com.is_active ? (
                                        <Link
                                            to={`/${countryPath}/${regionPath}/city/${com.path}`}
                                            className="regions__sidebar-link"
                                        >
                                            {com.name}
                                        </Link>
                                    ) : (
                                        <span className="regions__sidebar-link regions__sidebar-link--disabled">
                                            {com.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>

            <section className="regions__content">
                <BreadCrumbs crumbs={crumbs} />

                {blocks?.length > 0 && blocks.map(block => (
                    <div key={block.block_key}>
                        {renderBlock(block)}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Regions