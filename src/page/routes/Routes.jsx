import { useParams } from 'react-router';
import { Helmet } from "react-helmet-async";
import { useSelector } from 'react-redux';

import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx';
import luxembourgRoutes from '../../datas/luxembourg/routes'
import './Routes.scss'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Gallery from '../../components/gallery/Gallery.jsx';
import { photosByCountry } from '../../datas/fotos/index.js';
import { routeMaps } from "../../components/maps/RouteMap.jsx";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;
const routeNotFound = { ru: "Маршрут не найден", ua: "Маршрут не знайдено", de: "Route nicht gefunden" };

const Routes = () => {
    const { countryPath, routesPath } = useParams();
    const { lang } = useSelector((state) => state.language);
    const route = luxembourgRoutes.find((r) => r.path === routesPath && r.countryPath === countryPath);

    if (!route) return <p>{routeNotFound[lang]}</p>;

    const photos = photosByCountry[route?.countryPath];
    const routePhotos = photos?.[route?.path] || [];

    // Преобразуем в массив для Gallery
    const images = routePhotos.map(photo => ({
        src: `${BASE_PHOTO_URL}${photo.path}`,
        alt: photo.title[lang]
    }));

    const t = route.translations?.[lang];
    const meta = t?.meta;

    const MapComponent = route.map ? routeMaps[route.map] : null;

    const crumbs = [
        { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
        { label: t?.countryName, path: `/${route?.countryPath}` },
        { label: t?.name }
    ];

    return (
        <div className="route">

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
            <div className='route__title'>{t?.name}</div>

            <div className='route__desc'>
                <div className="route__desc-plan">
                    {MapComponent ? (
                        <MapComponent route={route} lang={lang} />
                    ) : (
                        route.plan && (
                            <img
                                src={`${BASE_PHOTO_URL}${route.plan}`}
                                alt={t?.name}
                            />
                        )
                    )}
                </div>
            </div>

            <div className='route__desc'>
                {t?.full_description?.items?.length > 0 && (<InfoBlock data={t?.full_description} className="route__desc-full_description" />)}
                <div className='route__desc-foto'>
                    {route.fotoCard && (
                        <img
                            src={`${BASE_PHOTO_URL}${route.fotoCard}`}
                            alt={t?.name}
                        />
                    )}
                </div>

                {t?.practicalInfo?.items?.length > 0 && (<InfoBlock data={t?.practicalInfo} className="route__desc-practicalInfo" />)}
                {t?.features?.items?.length > 0 && (<InfoBlock data={t?.features} className="route__desc-features" />)}
                {t?.recommendations?.items?.length > 0 && (<InfoBlock data={t?.recommendations} className="route__desc-recommendations" />)}
                {t?.interestingFacts?.items?.length > 0 && (<InfoBlock data={t?.interestingFacts} className="route__desc-interestingFacts" />)}

                {images.length > 0 && <Gallery images={images} />}
            </div>
        </div>
    )
}

export default Routes