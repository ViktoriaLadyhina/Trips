import { MapContainer, TileLayer, Marker, Tooltip, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import DeutAttractions from "../../../datas/germany/rheinland_pfalz-attractions.js";

const RhineValley = [
    {
        id: "lahneck",
        coord: { lat: 50.3132, lng: 7.6036 },
        translations: {
            ru: { name: "Замок Ланек" },
            ua: { name: "Замок Ланек" },
            de: { name: "Burg Lahneck" }
        }
    },
    {
        id: "marksburg",
        coord: { lat: 50.2573, lng: 7.6289 },
        translations: {
            ru: { name: "Замок Марксбург" },
            ua: { name: "Замок Марксбург" },
            de: { name: "Schloss Marksburg" }
        }
    },
    {
        id: "katz",
        coord: { lat: 50.1585, lng: 7.7276 },
        translations: {
            ru: { name: "Замок Кац" },
            ua: { name: "Замок Кац" },
            de: { name: "Burg Katz" }
        }
    },

    {
        id: "rheinfels",
        coord: { lat: 50.1510, lng: 7.7142 },
        translations: {
            ru: { name: "Замок Райнфельс" },
            ua: { name: "Замок Райнфельс" },
            de: { name: "Burg Rheinfels" }
        }
    },
    {
        id: "loreley",
        coord: { lat: 50.1412, lng: 7.7269 },
        translations: {
            ru: { name: "Скала Лорелей" },
            ua: { name: "Скеля Лорелей" },
            de: { name: "Loreley" }
        }
    },
    {
        id: "maus",
        coord: { lat: 50.1328, lng: 7.7307 },
        translations: {
            ru: { name: "Замок Маус" },
            ua: { name: "Замок Маус" },
            de: { name: "Burg Maus" }
        }
    },
    {
        id: "schonburg",
        coord: { lat: 50.1118, lng: 7.7289 },
        translations: {
            ru: { name: "Замок Шёнбург" },
            ua: { name: "Замок Шенбург" },
            de: { name: "Burg Schönburg" }
        }
    },
    {
        id: "pfalzgrafenstein",
        coord: { lat: 50.0874, lng: 7.7618 },
        translations: {
            ru: { name: "Замок Пфальцграфенштайн" },
            ua: { name: "Замок Пфальцграфенштайн" },
            de: { name: "Burg Pfalzgrafenstein" }
        }
    },
    {
        id: "stahleck",
        coord: { lat: 50.0559, lng: 7.7706 },
        translations: {
            ru: { name: "Замок Шталек" },
            ua: { name: "Замок Шталек" },
            de: { name: "Burg Stahleck" }
        }
    },
    {
        id: "sooneck",
        coord: { lat: 50.0409, lng: 7.8159 },
        translations: {
            ru: { name: "Замок Зоонек" },
            ua: { name: "Замок Зоонек" },
            de: { name: "Burg Sooneck" }
        }
    },
    {
        id: "reichenstein",
        coord: { lat: 50.0286, lng: 7.8475 },
        translations: {
            ru: { name: "Замок Райхенштайн" },
            ua: { name: "Замок Райхенштайн" },
            de: { name: "Burg Reichenstein" }
        }
    },
    {
        id: "rheinstein",
        coord: { lat: 50.0103, lng: 7.8473 },
        translations: {
            ru: { name: "Замок Райнштайн" },
            ua: { name: "Замок Райнштайн" },
            de: { name: "Burg Rheinstein" }
        }
    }
];

const routeOrder = {
    rhineValley: {
        ehrenbreitstein_koblenz: 1,
        deutsches_eck_koblenz: 2,
        lahneck: 3,
        stolzenfels_koblenz: 4,
        marksburg: 5,
        katz: 6,
        rheinfels: 7,
        loreley: 8,
        maus: 9,
        schonburg: 10,
        pfalzgrafenstein: 11,
        stahleck: 12,
        sooneck: 13,
        reichenstein: 14,
        rheinstein: 15
    }
};

const CastlesRhineValleyMap = ({ lang }) => {
    const navigate = useNavigate();
    const isTouchDevice = L.Browser.mobile;

    // =========================
    // 1. MERGE DATA (route + fallback)
    // =========================
const allItems = [
  ...DeutAttractions.filter(i => i.routes === "castles_rhine_valley"),
  ...RhineValley
];

const map = new Map(allItems.map(i => [i.id, i]));

const attrList = Object.keys(routeOrder.rhineValley)
  .sort((a, b) => routeOrder.rhineValley[a] - routeOrder.rhineValley[b])
  .map(id => map.get(id))
  .filter(Boolean);

    // =========================
    // 2. HELPERS
    // =========================
    const getTranslation = (item, lang) =>
        item?.translations?.[lang] || item?.translations?.de;

    const getImage = (item, lang) =>
        item?.translations?.[lang]?.meta?.ogImage ||
        item?.translations?.de?.meta?.ogImage ||
        null;

    // =========================
    // 3. FITBOUNDS
    // =========================
    const FitBounds = ({ points }) => {
        const map = useMap();

        useEffect(() => {
            if (!points.length) return;

            if (points.length === 1) {
                map.setView(points[0], 13);
                return;
            }

            const bounds = L.latLngBounds(points);
            map.fitBounds(bounds, {
                padding: [50, 50],
                maxZoom: 14
            });
        }, [points, map]);

        return null;
    };

    // =========================
    // 4. POINTS (source of truth for map view)
    // =========================
    const points = Array.from(attrList)
        .filter(item => item.coord)
        .map(item => [item.coord.lat, item.coord.lng]);

    const routeLine = points;

    // =========================
    // 5. CENTER FALLBACK
    // =========================
    const fallbackCenter = points[0] || [49.7, 6.0];

    return (
        <MapContainer
            center={fallbackCenter}
            zoom={11}
            style={{ width: "100%", height: "500px" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* auto zoom */}
            <FitBounds points={points} />

            {/* route line */}
            <Polyline positions={routeLine} color="blue" />

            {/* markers */}
            {Array.from(attrList).map(item => {
                if (!item?.coord) return null;

                const t = getTranslation(item, lang);

                return (
                    <Marker
                        key={item.id}
                        position={[item.coord.lat, item.coord.lng]}
                        eventHandlers={
                            item?.path && !isTouchDevice
                                ? {
                                    click: () => {
                                        navigate(
                                            `/${item.countryPath}/${item.regionPath}/${item.districtPath}/${item.cityPath}/attractions/${item.path}`
                                        );
                                    }
                                }
                                : undefined
                        }
                    >
                        {/* DESKTOP */}
                        {!isTouchDevice ? (
                            <Tooltip className="castle-tooltip">
                                <div className="tooltip-content">
                                    {getImage(item, lang) && (
                                        <img
                                            src={getImage(item, lang)}
                                            alt={t?.name}
                                            className="tooltip-image"
                                        />
                                    )}
                                    <p className="tooltip-title">
                                        {t?.name}
                                    </p>
                                </div>
                            </Tooltip>
                        ) : (
                            /* MOBILE */
                            <Popup>
                                <p>{t?.name}</p>

                                {item?.path && (
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/${item.countryPath}/attractions/${item.path}`
                                            )
                                        }
                                    >
                                        Подробнее
                                    </button>
                                )}
                            </Popup>
                        )}
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default CastlesRhineValleyMap;