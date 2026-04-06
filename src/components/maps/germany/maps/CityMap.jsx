import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityMap.scss';
import { useNavigate } from 'react-router';
import searchIndex from '../../../search/index'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const moreBtnText = { ru: "Подробнее", de: "Mehr erfahren", ua: "Детальніше" };

const CityMap = ({ city, lang }) => {
  const navigate = useNavigate();
  if (!city) return null;

  // Центр карты: либо координаты города, либо первая достопримечательность
  const mapCenter = [city.coord.lat, city.coord.lng];
const countriesNew = Object.keys(searchIndex).filter(key => ['germany','ukraine','luxembourg'].includes(key));
const attractions = [
  // старый вариант с языком
  ...Object.values(searchIndex[lang].germany).flatMap(region => region.attractions || []),
  ...Object.values(searchIndex[lang].ukraine).flatMap(region => region.attractions || []),

  // новый вариант для всех стран из countriesNew
  ...countriesNew.flatMap(countryKey => 
    Object.values(searchIndex[countryKey]).flatMap(region => region.attractions || [])
  ),
];

  // для мобильных
  const isTouchDevice = L.Browser.mobile;

  const getAttrMeta = (attr, lang) => { return attr.translations?.[lang]?.meta || attr.meta || {}; };
  const getAttrName = (attr, lang) => { return attr.translations?.[lang]?.name || attr.name || ''; };

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

export default CityMap;