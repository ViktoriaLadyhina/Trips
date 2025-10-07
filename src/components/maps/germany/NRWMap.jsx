import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsNrw as districts } from "./maps/nrwDistricts";
import "../Maps.scss";

const NRWMap = ({ regions }) => {
  const navigate = useNavigate();
  const [hoverRegion, setHoverRegion] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  // Все округа NRW
  const nrwDistricts = useMemo(
    () => regions?.discriptRegions?.[0]?.items || [],
    [regions]
  );
  // Свободные города NRW
  const nrwCities = useMemo(
    () => regions?.discriptRegions?.[1]?.items || [],
    [regions]
  );

  const handleDistrictClick = (district) => {
    if (district.hasInfo) navigate(`/germany/nrw/${district.path}`);
  };

  const handleCityClick = (city) => {
    if (city.hasInfo) navigate(`/germany/nrw/city/${city.path}`);
  };

  // Координаты подписей (x, y) + смещения dx, dy
  const nrwDistrictCenters = {
    Rkoln: { x: 390, y: 380, dx: -210, dy: 60 },
    Rdetmold: { x: 50, y: 200, dx: 550, dy: -90 },
    Rdusseldorf: { x: 300, y: 310, dx: -140, dy: -110 },
    Rarnsberg: { x: 120, y: 180, dx: 320, dy: 110 },
    Rmunster: { x: 200, y: 100, dx: 80, dy: -20 },
    Ckoeln: { x: 395, y: 385, dx: -155, dy: -0 }, 
    Cduesseldorf: { x: 305, y: 315, dx: -70, dy: -35 }, // -----
    Caachen: { x: 55, y: 205, dx: 35, dy: 221 },
    Cbonn: { x: 125, y: 185, dx: 145, dy: 265 },
    Cduisburg: { x: 160, y: 140, dx: 50, dy: 90 },
    Cmuenster: { x: 205, y: 105, dx: 158, dy: -18 },// -----
    Cbottrop: { x: 205, y: 105, dx: 38, dy: 90 },
    Cgelsenkirchen: { x: 205, y: 105, dx: 88, dy: 105 },
    Cleverkusen: { x: 165, y: 145, dx: 120, dy: 210 },
    Cdortmund: { x: 255, y: 125, dx: 80, dy: 95 },
    Chamm: { x: 270, y: 130, dx: 130, dy: 40 },
    Cbochum: { x: 275, y: 135, dx: 10, dy: 97 },
    Chagen: { x: 275, y: 135, dx: 60, dy: 130 },
    Cessen: { x: 275, y: 135, dx: -23, dy: 100 },
    Cmuelheim: { x: 275, y: 135, dx: -9, dy: 114 },
    Coberhausen: { x: 275, y: 135, dx: -35, dy: 83 },
    Csolingen: { x: 275, y: 135, dx: -2, dy: 188 },
    Cwuppertal: { x: 275, y: 135, dx: 16, dy: 155 },
    Cremscheid: { x: 275, y: 135, dx: 25, dy: 178 },
    Ckrefeld: { x: 275, y: 135, dx: -92, dy: 130 },
    Cmoenchengladbach: { x: 275, y: 135, dx: -110, dy: 190 },
    Cbielefeld: { x: 275, y: 135, dx: 265, dy: -70 },
  };


  return (
    <div className="map-container">
      <svg viewBox="0 -100 800 675">
        <g className="map-shape">
          {/* Округа */}
          {nrwDistricts.map((district) => {
            const loc = districts.find((d) => d.id === `R${district.path}`);
            if (!loc) return null;

            return (
              <path
                key={loc.id}
                d={loc.path}
                className={district.hasInfo ? "interactive" : "disabled"}
                onClick={() => handleDistrictClick(district)}
                onMouseEnter={(e) => {
                  setHoverRegion(district.name);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion(null)}
              />
            );
          })}

          {/* Города */}
          {nrwCities.map((city) => {
            const loc = districts.find((d) => d.id === `C${city.path}`);
            if (!loc) return null;

            return (
              <path
                key={loc.id}
                d={loc.path}
                className={city.hasInfo ? "interactive" : "disabled"}
                onClick={() => handleCityClick(city)}
                onMouseEnter={(e) => {
                  setHoverRegion(city.name);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion(null)}
              />
            );
          })}

          {/* Подписи */}
{/* Подписи округов */}
{nrwDistricts.map((district) => {
  const loc = districts.find(d => d.id === `R${district.path}`);
  if (!loc) return null;

  const center = nrwDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

  return (
    <text
      key={`${loc.id}-label`}
      x={center.x + center.dx}
      y={center.y + center.dy}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ pointerEvents: "none" }}
      fill="#000"
    >
      {district.name}
    </text>
  );
})}

{/* Подписи городов */}
{nrwCities.map((city) => {
  const loc = districts.find(d => d.id === `C${city.path}`);
  if (!loc) return null;

  const center = nrwDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

  return (
    <text
      key={`${loc.id}-label`}
      x={center.x + center.dx}
      y={center.y + center.dy}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "10px", pointerEvents: "none" }}
      fill="#000"
    >
      {city.name}
    </text>
  );
})}
        </g>
      </svg>

      {/* Tooltip */}
      {hoverRegion && (
        <div
          style={{
            position: "fixed",
            top: tooltipPos[1] + 10,
            left: tooltipPos[0] + 10,
            background: "#fff",
            padding: "2px 6px",
            border: "1px solid #333",
            borderRadius: "4px",
            pointerEvents: "none",
            fontSize: "12px",
            color: "#000",
            zIndex: 9999,
          }}
        >
          {hoverRegion}
        </div>
      )}
    </div>
  );
};

export default NRWMap;