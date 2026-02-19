import useCityFullData from '../../hooks/useCityFullData.js';
import { useParams } from 'react-router';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import './Events.scss'
import Gallery from '../../components/gallery/Gallery.jsx';
import { photosByCountry } from '../../datas/fotos/index.js';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Event = () => {
    const { districtPath, eventPath } = useParams();
    const { country, region, district, parentSubRegion, city, events, lang, error } = useCityFullData();

    const event = events.find(a => a.path === eventPath);
    const photos = photosByCountry[country?.path];
    const eventPhotos = photos?.[region?.path]?.[city?.path]?.[eventPath] || [];

    // Преобразуем в массив для Gallery
    const images = eventPhotos.map(photo => ({
        src: `${BASE_PHOTO_URL}${photo.path}`,
        alt: photo.title[lang]
    }));

    if (error) return <p>{error}</p>;
    if (!country || !region || !city) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    if (!events) return <p>Loading...</p>;
    if (!event) return <p>Event not found</p>;


    // Хлебные крошки
    const crumbs = [
        { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
        country ? { label: region.country, path: `/${country.path}` } : null,
        region ? { label: region.name, path: `/${country.path}/${region.path}` } : null,
        district ? { label: district.name, path: `/${country.path}/${region.path}/${district.path}` } : null,
        parentSubRegion ? { label: parentSubRegion.name } : null,
        city ? { label: city.name, path: `/${country.path}/${region.path}/${districtPath ? districtPath + '/' : ''}${city.path}` } : null,
        { label: lang === "ru" ? "Мероприятия" : lang === "de" ? "Veranstaltungen" : "Заходи", },
        event ? { label: event.name } : null
    ].filter(Boolean);


    return (
        <div className="event">
            <BreadCrumbs crumbs={crumbs} />

            <div className='attraction__title'>{event.name && (event.name)}</div>
            <div className='attraction__desc'>
                <div className='attraction__desc-foto'>
                    {event.fotoCard && (
                        <img
                            src={`${BASE_PHOTO_URL}${event.fotoCard}`}
                            alt={event.name}
                        />
                    )}
                </div>

                {event.date && (<InfoBlock data={event.date} className="attraction__desc-date" />)}
                {event.full_description && (<InfoBlock data={event.full_description} className="attraction__desc-full_description" />)}
                {/* {attraction.legends && (<InfoBlock data={attraction.legends} className="attraction__desc-full_description" />)} */}
                {event.sub_objects && (<InfoBlock data={event.sub_objects} className="attraction__desc-sub_objects" />)}
                {/* {attraction.relics && (<InfoBlock data={attraction.relics} className="attraction__desc-relics" />)} */}
                {/* {attraction.hotels && (<InfoBlock data={attraction.hotels} className="attraction__desc-hotels" />)} */}
                {event.interestingFacts && (<InfoBlock data={event.interestingFacts} className="attraction__desc-interestingFacts" />)}


                {event?.officialSite && (<InfoBlock data={event.officialSite} className="attraction__desc-officialSite" />)} 

                {images.length > 0 && <Gallery images={images} />}
            </div>
        </div>
    )
}

export default Event