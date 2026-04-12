import { MapContainer, TileLayer, Marker, Tooltip, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router";
import luxAttractions from "../.././../datas/luxembourg/mersch-attractions";

const luxCastles = [
    {
        id: "mersch_castle",
        coord: { lat: 49.748, lng: 6.106 },
        translations: {
            ru: { name: "Замок Мерш" },
            ua: { name: "Замок Мерш" },
            de: { name: "Schloss Mersch" }
        }
    },
    {
        id: "schoenfels_castle",
        coord: { lat: 49.776, lng: 6.011 },
        translations: {
            ru: { name: "Замок Шёнфельс" },
            ua: { name: "Замок Шёнфельс" },
            de: { name: "Schloss Schoenfels" }
        }
    },
    {
        id: "hollenfels_castle",
        coord: { lat: 49.742, lng: 5.966 },
        translations: {
            ru: { name: "Замок Холленфельс" },
            ua: { name: "Замок Холленфельс" },
            de: { name: "Schloss Hollenfels" }
        }
    },
    {
        id: "ansembourg_ruins",
        coord: { lat: 49.697, lng: 5.960 },
        translations: {
            ru: { name: "Руины старого замка Ансембург" },
            ua: { name: "Руїни старого замку Ансембург" },
            de: { name: "Ruinen der alten Burg Ansemburg" }
        }
    },
    {
        id: "ansembourg_castle",
        coord: { lat: 49.698, lng: 5.958 },
        translations: {
            ru: { name: "Замок Ансембург" },
            ua: { name: "Замок Ансембург" },
            de: { name: "Schloss Ansemburg" }
        }
    },
    {
        id: "marienthal_castle",
        coord: { lat: 49.708, lng: 5.935 },
        translations: {
            ru: { name: "Замок Мариенталь" },
            ua: { name: "Замок Марієнталь" },
            de: { name: "Schloss Marienthal" }
        }
    },
    {
        id: "koerich_castle",
        coord: { lat: 49.670, lng: 5.950 },
        translations: {
            ru: { name: "Замок Керих" },
            ua: { name: "Замок Кьоріх" },
            de: { name: "Burg Koerich" }
        }
    }
];

const LuxembourgCastlesMap = ({ route, lang }) => {
    const navigate = useNavigate();

    const baseMap = new Map(luxCastles.map(item => [item.id, item]));

    luxAttractions.forEach(item => {
        baseMap.set(item.id, item);
    });

    const attrMap = baseMap;
    const isTouchDevice = L.Browser.mobile;


    const getTranslation = (item, lang) => {
        return item.translations?.[lang] || item.translations?.de;
    };

    const routeLine = luxCastles.map(castle => [
        castle.coord.lat,
        castle.coord.lng
    ]);


    return (
        <MapContainer
            center={[route.coord.lat, route.coord.lng]}
            zoom={11}
            style={{ width: "100%", height: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline positions={routeLine} color="blue" />
            {luxCastles.map(castle => {
                const attr = attrMap.get(castle.id);
                const t = attr ? getTranslation(attr, lang) : null;

                return (
                    <Marker
                        key={castle.id}
                        position={[castle.coord.lat, castle.coord.lng]}
                        eventHandlers={
                            attr?.path && !isTouchDevice
                                ? {
                                    click: () => {
                                        navigate(`/${attr.countryPath}/attractions/${attr.path}`);
                                    }
                                }
                                : undefined
                        }
                    >
                        {!isTouchDevice ? (
                            <Tooltip>
                                <p>{t?.name || castle.name}</p>
                            </Tooltip>
                        ) : (
                            <Popup>
                                <p>{t?.name || castle.name}</p>

                                {attr?.path && (
                                    <button
                                        onClick={() =>
                                            navigate(`/${attr.countryPath}/attractions/${attr.path}`)
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