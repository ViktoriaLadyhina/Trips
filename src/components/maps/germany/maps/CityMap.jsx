import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityMap.scss';
import { Navigate, useNavigate } from 'react-router';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const moreBtnText = { ru: "Подробнее", de: "Mehr erfahren", ua: "Детальніше" };

const CityMap = ({ city, attractions, lang }) => {
  const navigate = useNavigate();
  if (!city) return null;

  // Центр карты: либо координаты города, либо первая достопримечательность
  const mapCenter = [city.coord.lat, city.coord.lng];

  // для мобильных
  const isTouchDevice =L.Browser.mobile;

  return (
    <MapContainer closePopupOnClick={true} center={mapCenter} zoom={13} style={{ height: "450px", width: "100%", marginBottom: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

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
                  {attr.meta.ogImage && <img src={attr.meta.ogImage} alt={attr.name} />}
                  <p>{attr.meta.title}</p>
                </div>
              </Tooltip>
            )}
            {isTouchDevice && (
              <Popup className="custom-popup"   maxWidth={180}  minWidth={160}>
                <div className="custom-popup-content">
                  {attr.meta.ogImage && (
                    <img src={attr.meta.ogImage} alt={attr.name} />
                  )}

                  <p>{attr.meta.title}</p>

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

export default CityMap;