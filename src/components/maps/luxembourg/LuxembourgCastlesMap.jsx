import { MapContainer, TileLayer, Marker, Tooltip, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import luxAttractions from "../.././../datas/luxembourg/mersch-attractions";

const luxCastles = [
    {
        id: "mersch_castle",
        coord: { lat: 49.7482, lng: 6.1060 },
        translations: {
            ru: { name: "Замок Мерш" },
            ua: { name: "Замок Мерш" },
            de: { name: "Schloss Mersch" }
        }
    },
    {
        id: "schoenfels_castle",
        coord: { lat: 49.7761, lng: 6.0109 },
        translations: {
            ru: { name: "Замок Шёнфельс" },
            ua: { name: "Замок Шёнфельс" },
            de: { name: "Schloss Schoenfels" }
        }
    },
    {
        id: "hollenfels_castle",
        coord: { lat: 49.7417, lng: 5.9653 },
        translations: {
            ru: { name: "Замок Холленфельс" },
            ua: { name: "Замок Холленфельс" },
            de: { name: "Schloss Hollenfels" }
        }
    },
    {
        id: "ansembourg_ruins",
        coord: { lat: 49.7009, lng: 6.0461 },
        translations: {
            ru: { name: "Руины старого замка Ансембург" },
            ua: { name: "Руїни старого замку Ансембург" },
            de: { name: "Ruinen der alten Burg Ansemburg" }
        }
    },
    // {
    //     id: "ansembourg_castle",
    //     coord: { lat: 49.6998, lng: 6.0460 },
    //     translations: {
    //         ru: { name: "Замок Ансембург" },
    //         ua: { name: "Замок Ансембург" },
    //         de: { name: "Schloss Ansemburg" }
    //     }
    // },
    {
        id: "marienthal_castle",
        coord: { lat: 49.7085, lng: 6.0870 },
        translations: {
            ru: { name: "Замок Мариенталь" },
            ua: { name: "Замок Марієнталь" },
            de: { name: "Schloss Marienthal" }
        }
    },
    {
        id: "koerich_castle",
        coord: { lat: 49.6710, lng: 5.9487 },
        translations: {
            ru: { name: "Замок Керих" },
            ua: { name: "Замок Кьоріх" },
            de: { name: "Burg Koerich" }
        }
    }
];

const LuxembourgCastlesMap = ({ lang }) => {
    const navigate = useNavigate();
    const isTouchDevice = L.Browser.mobile;

    // =========================
    // 1. MERGE DATA (route + fallback)
    // =========================
    const baseMap = new Map(
        luxAttractions.map(item => [item.id, item])
    );

    luxCastles.forEach(item => {
        if (!baseMap.has(item.id)) {
            baseMap.set(item.id, item);
        }
    });

    const attrMap = baseMap;

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
    const points = Array.from(attrMap.values())
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
            style={{ width: "100%", height: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* auto zoom */}
            <FitBounds points={points} />

            {/* route line */}
            <Polyline positions={routeLine} color="blue" />

            {/* markers */}
            {Array.from(attrMap.values()).map(item => {
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
                                              `/${item.countryPath}/attractions/${item.path}`
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

export default LuxembourgCastlesMap;