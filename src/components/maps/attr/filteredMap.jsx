import { MapContainer, TileLayer, Marker, Tooltip, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AttrMap.scss';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import useAllAttractions from '../../../hooks/useAllAttractions';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const moreBtnText = { ru: "Подробнее", de: "Mehr erfahren", ua: "Детальніше" };

const FilteredMap = ({ map }) => {
  const navigate = useNavigate();
  const { attractions: allAttractions } = useAllAttractions();

const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const valid = points.filter(p => p.coord);

    if (!valid.length) return;

    const bounds = L.latLngBounds(
      valid.map(p => [p.coord.lat, p.coord.lng])
    );

    map.fitBounds(bounds, { padding: [50, 50] });
  }, [points, map]);

  return null;
};

const attractions = allAttractions.filter(attr =>
  map ? attr.map === map : true
);

  // для мобильных
  const isTouchDevice = L.Browser.mobile;

  return (
    <MapContainer
      closePopupOnClick={true}
      zoom={13}
      style={{
        height: "450px",
        width: "100%",
        marginBottom: "20px"
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FitBounds points={attractions} />

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
                      `/${attr.countryPath}/${attr.regionPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.path}`
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
              <Popup className="custom-popup" maxWidth={180} minWidth={160}>
                <div className="custom-popup-content">
                  {attr.meta.ogImage && (
                    <img src={attr.meta.ogImage} alt={attr.name} />
                  )}

                  <p>{attr.meta.title}</p>

                  <button
                    className="popup-btn"
                    onClick={() =>
                      navigate(
                        `/${attr.countryPath}/${attr.regionPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.path}`
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

export default FilteredMap;