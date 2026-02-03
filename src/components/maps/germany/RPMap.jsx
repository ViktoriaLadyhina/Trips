import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsRlp as districts } from "./maps/districtsRlp";
import "../Maps.scss";

const RPMap = ({ regions }) => {
  const navigate = useNavigate();
  const [hoverRegion, setHoverRegion] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  // Все округа Райн-Пфальц
  const rlpDistricts = useMemo(
    () => regions?.discriptRegions?.[0]?.items || [],
    [regions]
  );
  // Свободные города NRW
  const rlpCities = useMemo(
    () => regions?.discriptRegions?.[1]?.items || [],
    [regions]
  );

  const handleDistrictClick = (district) => {
    if (district.hasInfo) navigate(`/germany/rheinland-pfalz/${district.path}`);
  };

  const handleCityClick = (city) => {
    if (city.hasInfo) navigate(`/germany/rheinland-pfalz/city/${city.path}`);
  };

  // Координаты подписей (x, y) + смещения dx, dy
  const rlpDistrictCenters = {
    // ---------------- Округа (Landkreise)
    Rahrweiler: { x: 10000, y: 10000, dx: -1000, dy: -3000 },
    Raltenkirchen: { x: 10000, y: 10000, dx: 4000, dy: -5900 },
    "Ralzey-worms": { x: 10000, y: 10000, dx: 6000, dy: 4900 },
    "Rbad-duerkheim": { x: 10000, y: 10000, dx: 6300, dy: 7800 },
    "Rbad-kreuznach": { x: 10000, y: 10000, dx: 3000, dy: 4200 },
    "Rbernkastel-wittlich": { x: 10000, y: 10000, dx: -2000, dy: 2800 },
    Rbirkenfeld: { x: 10000, y: 10000, dx: 100, dy: 5800 },
    "Rcochem-zell": { x: 10000, y: 10000, dx: -400, dy: 800 },
    Rdonnersbergkreis: { x: 10000, y: 10000, dx: 4700, dy: 6500 },
    "Reifelkreis-bitburg-pruem": { x: 10000, y: 10000, dx: -5600, dy: 1700 },
    Rgermersheim: { x: 10000, y: 10000, dx: 7600, dy: 12700 },
    Rkaiserslautern: { x: 10000, y: 10000, dx: 3300, dy: 8000 },
    Rkusel: { x: 10000, y: 10000, dx: 1800, dy: 7300 },
    "Rmainz-bingen": { x: 10000, y: 10000, dx: 5400, dy: 3000 },
    "Rmayen-koblenz": { x: 10000, y: 10000, dx: 300, dy: -1400 },
    Rneuwied: { x: 10000, y: 10000, dx: 1400, dy: -3200 },
    "Rrhein-hunsrueck-kreis": { x: 10000, y: 10000, dx: 1900, dy: 1700 },
    "Rrhein-lahn-kreis": { x: 10000, y: 10000, dx: 4000, dy: -600 },
    "Rrhein-pfalz-kreis": { x: 10000, y: 10000, dx: 8600, dy: 8900 },
    "Rsuedliche-weinstrasse": { x: 10000, y: 10000, dx: 7500, dy: 10500 },
    Rsuedwestpfalz: { x: 10000, y: 10000, dx: 2500, dy: 9850 },
    "Rtrier-saarburg": { x: 10000, y: 10000, dx: -3500, dy: 6000 },
    Rvulkaneifel: { x: 10000, y: 10000, dx: -3200, dy: -300 },
    Rwesterwaldkreis: { x: 10000, y: 10000, dx: 4500, dy: -3800 },

    // ---------------- Города (Kreisfreie Städte)
    Cmainz: { x: 16800, y: 12300, dx: 300, dy: 200 },
    Ckoblenz: { x: 5000, y: 5000, dx: 7600, dy: 3500 },
    Cludwigshafen: { x: 5000, y: 5000, dx: 14500, dy: 13000 },
    Ctrier: { x: 5000, y: 5000, dx: 1000, dy: 10000 },
    "Ckaiserslautern-city": { x: 5000, y: 5000, dx: 9700, dy: 13800 },
    Cworms: { x: 5000, y: 5000, dx: 13000, dy: 11300 },
    Cspeyer: { x: 5000, y: 5000, dx: 14100, dy: 14900 },
    Cfrankenthal: { x: 5000, y: 5000, dx: 14100, dy: 12300 },
    Clandau: { x: 5000, y: 5000, dx: 13200, dy: 16150 },
    Cneustadt: { x: 5000, y: 5000, dx: 11700, dy: 14600 },
    Cpirmasens: { x: 5000, y: 5000, dx: 8200, dy: 16250 },
    Czweibruecken: { x: 5000, y: 5000, dx: 7000, dy: 15750 },
  };



  return (

    <div className="map-container">

      <svg viewBox="0 1500 21000 22500">
        <g className="map-shape">
          {/* Округа */}
          {rlpDistricts.map((district) => {
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
          {rlpCities.map((city) => {
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
        </g>

        <g >
          {/* Подписи */}
          {/* Подписи округов */}

          {rlpDistricts.map((district) => {
            const loc = districts.find(d => d.id === `R${district.path}`);
            if (!loc) return null;

            const center = rlpDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

            const noWrapDistricts = ["Райн-Пфальц"];
            const parts = noWrapDistricts.includes(district.name) ? [district.name] : district.name.split("-");

            return (
              <text
              key={district.path}
                x={center.x + center.dx}
                y={center.y + center.dy}
                textAnchor="middle"
                fontSize={400}
              >
                {parts.map((part, i) => (
                  <tspan
                    key={`${district.path}-${i}`}
                    x={center.x + center.dx}
                    dy={i === 0 ? 0 : "1.2em"}
                  >
                    {i === 0 && parts.length > 1
                      ? `${part.trim()}-`
                      : part.trim()}
                  </tspan>
                ))}
              </text>
            );
          })}

          {/* Подписи городов */}
          {rlpCities.map((city) => {
            const loc = districts.find(d => d.id === `C${city.path}`);
            if (!loc) return null;

            const center = rlpDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

            return (
              <text
                key={`${loc.id}-label`}
                x={center.x + center.dx}
                y={center.y + center.dy}
                fontSize={400}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ pointerEvents: "none" }}
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

export default RPMap;