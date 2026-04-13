import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AttrMap.scss';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const moreBtnText = { ru: "Подробнее", de: "Mehr erfahren", ua: "Детальніше" };

const AttrMap = ({ city, attractions, lang }) => {
  const navigate = useNavigate();

  const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;

    // 1 точка
    if (points.length === 1) {
      map.setView(points[0], 14);
      return;
    }

    // много точек
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, {
      padding: [50, 50],
      maxZoom: 14,
    });
  }, [points, map]);

  return null;
};

const points = attractions.filter(attr => attr.coord).map(attr => [attr.coord.lat, attr.coord.lng]);

// запасной центр, если нет достопримечательностей
const fallbackCenter = city?.coord
  ? [city.coord.lat, city.coord.lng]
  : [50.1109, 8.6821];

  // для мобильных
  const isTouchDevice = L.Browser.mobile;

  const getAttrMeta = (attr, lang) => { return attr.translations?.[lang]?.meta || attr.meta || {}; };
  const getAttrName = (attr, lang) => { return attr.translations?.[lang]?.name || attr.name || ''; };

  return (
    <MapContainer closePopupOnClick={true} center={fallbackCenter} zoom={6} style={{ height: "450px", width: "100%", marginBottom: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FitBounds points={points} />

      {attractions.map(attr => (
        attr.coord && (
          <Marker
            key={attr.id}
            position={[attr.coord.lat, attr.coord.lng]}
            eventHandlers={
              !isTouchDevice
                ? {
                  click: () => {
                    navigate(
                      `/${attr.countryPath}/${attr.regionsPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.path}`
                    );
                  }
                }
                : undefined
            }

          >
            {!isTouchDevice && (
              <Tooltip
                className="custom-tooltip"
                direction="top"
                offset={[0, -10]}
                opacity={1}
              >
                <div className="custom-tooltip-content">
                  {getAttrMeta(attr, lang).ogImage && (
                    <img src={getAttrMeta(attr, lang).ogImage} alt={getAttrName(attr, lang)} />
                  )}
                  <p>{getAttrMeta(attr, lang).title || getAttrName(attr, lang)}</p>
                </div>
              </Tooltip>
            )}
            {isTouchDevice && (
              <Popup className="custom-popup" maxWidth={180} minWidth={160}>
                <div className="custom-popup-content">
                  {getAttrMeta(attr, lang).ogImage && (
                    <img src={getAttrMeta(attr, lang).ogImage} alt={getAttrName(attr, lang)} />
                  )}
                  <p>{getAttrMeta(attr, lang).title || getAttrName(attr, lang)}</p>
                  <button
                    className="popup-btn"
                    onClick={() =>
                      navigate(
                        `/${attr.countryPath}/${attr.regionsPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.path}`
                      )
                    }
                  >
                    {moreBtnText[lang]}
                  </button>
                </div>
              </Popup>
            )}
          </Marker>
        )
      ))}
    </MapContainer>
  );
};

export default AttrMap;