import { MapContainer, TileLayer, Marker, Tooltip, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AttrMap.scss';
import { useNavigate } from 'react-router';
import { useEffect, useMemo } from 'react';
import useAllAttractions from '../../../hooks/useAllAttractions';

// фикс иконок Leaflet (важно оставить один раз)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
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

const FilteredMap = ({ map, lang = 'ru' }) => {
  const navigate = useNavigate();
  const { attractions: allAttractions = [] } = useAllAttractions();

  // 🔥 1. фильтрация стабильно через useMemo
  const attractions = useMemo(() => {
    if (!allAttractions.length) return [];

    return allAttractions.filter(attr => {
      if (!attr) return false;
      return map ? attr.map === map : true;
    });
  }, [allAttractions, map]);

  // 🔥 2. mobile detection безопасный
  const isTouchDevice = L.Browser?.mobile ?? false;

  return (
    <MapContainer
      center={[50.9375, 6.9603]} // fallback (Кёльн)
      zoom={13}
      style={{
        height: "450px",
        width: "100%",
        marginBottom: "20px"
      }}
      // 🔥 важно: НЕ даём карте пересоздаваться без причины
      key={map || 'default-map'}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 🔥 bounds только на стабильных данных */}
      <FitBounds points={attractions} />

      {attractions.map(attr => {
        if (!attr?.coord) return null;

        const { lat, lng } = attr.coord;

        return (
          <Marker
            key={attr.id}
            position={[lat, lng]}
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
                    <img src={attr.meta.ogImage} alt={attr.name} />
                  )}
                  <p>{attr?.meta?.title}</p>
                </div>
              </Tooltip>
            )}

            {/* Popup mobile */}
            {isTouchDevice && (
              <Popup className="custom-popup" maxWidth={180} minWidth={160}>
                <div className="custom-popup-content">
                  {attr?.meta?.ogImage && (
                    <img src={attr.meta.ogImage} alt={attr.name} />
                  )}

                  <p>{attr?.meta?.title}</p>

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
        );
      })}
    </MapContainer>
  );
};

export default FilteredMap;