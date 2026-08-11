import { MapContainer, TileLayer, Marker, Tooltip, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AttrMap.scss';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useMemo } from 'react';
import useCombinedAttractions from '../../../hooks/useCombinedAttractions.js';
import { toFullUrl } from '../../../utils/photo.js';

// фикс иконок Leaflet (важно оставить один раз)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const lostIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const moreBtnText = {
  ru: "Подробнее",
  de: "Mehr erfahren",
  ua: "Детальніше"
};

// Вынесено наружу (НЕ пересоздаётся на каждый render)
const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const valid = points?.filter(p => p?.coord?.lat && p?.coord?.lng);

    if (!valid || valid.length === 0) return;

    const bounds = L.latLngBounds(
      valid.map(p => [p.coord.lat, p.coord.lng])
    );

    map.fitBounds(bounds, { padding: [50, 50] });
  }, [points, map]);

  return null;
};

const FilteredMap = ({ map, routeAttractions = null, lang = 'ru' }) => {
  const navigate = useNavigate();
  const { countryPath, regionPath, districtPath, cityPath } = useParams();

  const { mergedAttractions: allAttractions = [] } = useCombinedAttractions(countryPath, regionPath, districtPath, cityPath);

  const sourceAttractions = routeAttractions ?? allAttractions;

  const getIconByStatus = (attr) => {
    const status = attr.translations?.[lang]?.status ?? 'active';
    if (status === 'lost') return lostIcon;

    return defaultIcon;
  };

  // фильтрация стабильно через useMemo
  const attractions = useMemo(() => {
    if (!sourceAttractions.length) return [];

    // Карта маршрута:
    // достопримечательности уже отобраны API через routes
    if (routeAttractions) {
      return sourceAttractions.filter(Boolean);
    }

    // Обычная карта достопримечательностей
    return sourceAttractions.filter(attr => {
      if (!attr) return false;

      if (!map) return true;

      return Array.isArray(attr.map)
        ? attr.map.includes(map)
        : attr.map === map;
    });
  }, [sourceAttractions, map, routeAttractions]);

  // mobile detection безопасный
  const isTouchDevice = L.Browser?.mobile ?? false;

  const routePositions = routeAttractions
    ? attractions
      .filter(attr => attr?.coord?.lat != null && attr?.coord?.lng != null)
      .map(attr => [attr.coord.lat, attr.coord.lng])
    : [];

  return (
    <MapContainer
      center={[50.9375, 6.9603]}
      zoom={13}
      style={{
        height: "450px",
        width: "100%",
        marginBottom: "20px"
      }}
      // НЕ даём карте пересоздаваться без причины
      key={map || 'default-map'}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* bounds только на стабильных данных */}
      <FitBounds points={attractions} />

      {routeAttractions && routePositions.length > 1 && (
        <Polyline positions={routePositions} />
      )}

      {attractions.map(attr => {
        if (!attr?.coord) return null;

        const { lat, lng } = attr.coord;

        return (
          <Marker
            key={`${attr.id}-${attr.status}`}
            position={[lat, lng]}
            icon={getIconByStatus(attr)}
            eventHandlers={
              !isTouchDevice && attr.is_active
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
            {/* Tooltip desktop */}
            {!isTouchDevice && (
              <Tooltip
                className="custom-tooltip"
                direction="top"
                offset={[0, -10]}
                opacity={1}
              >
                <div className="custom-tooltip-content">
                  {attr?.meta?.ogImage && (
                    <img src={toFullUrl(attr.meta.ogImage)} alt={attr.name} />
                  )}
                   <p>{ attr?.meta?.title || attr?.name }</p>
                </div>
              </Tooltip>
            )}

            {/* Popup mobile */}
            {isTouchDevice && (
              <Popup className="custom-popup" maxWidth={180} minWidth={160}>
                <div className="custom-popup-content">
                  {attr?.meta?.ogImage && (
                    <img src={toFullUrl(attr.meta.ogImage)} alt={attr.name} />
                  )}

                 <p>{ attr?.meta?.title || attr?.name }</p>

                  {attr.is_active && (
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
                  )}
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default FilteredMap;