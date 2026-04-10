import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import { photosByCountry } from '../../datas/fotos/index.js';
import useEvents from '../../hooks/useEvents.js';
import datas from '../../datas/minimalIndex'
import './Events.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const period = { ru: "Период", ua: "Період", de: "Zeitraum" }
const location = { ru: "Место проведения", ua: "Місце проведення", de: "Veranstaltungsort" }

const Event = () => {
    const { countryPath, regionPath, districtPath, cityPath, eventPath } = useParams();
    const { events, error } = useEvents(countryPath, regionPath, districtPath, cityPath);
    const { lang } = useSelector((state) => state.language);

    const event = events.find(a => a.path === eventPath);
    const photos = photosByCountry[countryPath];
    const eventPhotos = photos?.[regionPath]?.[cityPath]?.[eventPath] || [];
    const meta = event?.meta;

    //Преобразуем в массив для Gallery
    const images = eventPhotos.map(photo => ({
        src: `${BASE_PHOTO_URL}${photo.path}`,
        alt: photo.title[lang]
    }));

    if (error) return <p>{error}</p>;
    if (!countryPath || !regionPath || !cityPath) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    if (!events) return <p>Loading...</p>;
    if (!event) return <p>Event not found</p>;

    //Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        countryPath ? { label: datas.countries[countryPath][lang], path: `/${countryPath}` } : null,
        regionPath ? { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` } : null,
        ...(districtPath !== "city" ? [{ label: datas.districts[districtPath][lang], path: `/${countryPath}/${regionPath}/${districtPath}` }] : []),
        ...(districtPath !== "city" ? [{ label: events.subRegionName }] : []),
        cityPath ? { label: datas.cities[cityPath][lang], path: `/${countryPath}/${regionPath}/${districtPath ? districtPath + '/' : ''}${cityPath}` } : null,
        { label: lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи", },
        event ? { label: event.name } : null
    ].filter(Boolean);


    return (
        <div className="event">

            {meta && (
                <Helmet>
                    <title>{meta.title}</title>

                    <meta name="description" content={meta.description} />

                    <meta property="og:title" content={meta.ogTitle} />
                    <meta property="og:description" content={meta.ogDescription} />
                    <meta property="og:image" content={meta.ogImage} />
                </Helmet>
            )}

            <BreadCrumbs crumbs={crumbs} />

            <div className='event__title'>{event.name && (event.name)}</div>
            <div className='event__desc'>
                <div className='event__desc-foto'>
                    {event.fotoCard && (
                        <img
                            src={`${BASE_PHOTO_URL}${event.fotoCard}`}
                            alt={event.name}
                        />
                    )}
                </div>

                {event.date && (
                    <div className='event__desc-date'>
                        <span className='event__desc-date-bold'>{period[lang]}:</span>
                        <span className='event__desc-date-text'>{" "}{event.date}</span>
                    </div>
                )}

                {event.location && (
                    <div className='event__desc-date'>
                        <span className='event__desc-date-bold'>{location[lang]}:</span>
                        <span className='event__desc-date-text'>{" "}{event.location}</span>
                    </div>
                )}

                {event.full_description && (<InfoBlock data={event.full_description} className="event__desc-full_description" />)}
                {event.sub_objects && (<InfoBlock data={event.sub_objects} className="event__desc-sub_objects" />)}
                {event.interestingFacts && (<InfoBlock data={event.interestingFacts} className="event__desc-interestingFacts" />)}

                {event?.officialSite && (<InfoBlock data={event.officialSite} className="event__desc-officialSite" />)}

                {images.length > 0 && <Gallery images={images} />}
            </div>
        </div>
    )
}

export default Event