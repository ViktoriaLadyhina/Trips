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

const CityMap = ({ cityData, attractions }) => {
  const navigate = useNavigate();
  if (!cityData) return null;

  // Центр карты: либо координаты города, либо первая достопримечательность
  const mapCenter = [cityData.coord.lat, cityData.coord.lng];

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "450px", width: "100%", marginBottom: "20px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {attractions.map(attr => (
        attr.coord && (
          <Marker
            key={attr.path}
            position={[attr.coord.lat, attr.coord.lng]}
            eventHandlers={{
              click: () => {
                navigate(`/${attr.countryPath}/${attr.regionsPath}/${attr.districtPath}/${attr.cityPath}/attractions/${attr.path}`);
              }
            }}
          >
            <Tooltip
              className="custom-popup"
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
            >
              <div className="custom-popup-content">
                {attr.meta.ogImage && <img src={attr.meta.ogImage} alt={attr.name} />}
                <p>{attr.meta.description}</p>
              </div>
            </Tooltip>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};

export default CityMap;