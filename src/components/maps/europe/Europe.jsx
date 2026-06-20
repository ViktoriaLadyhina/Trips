import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import "../Maps.scss";
import { cantries as mapEu, countryNames, countryCenters } from "./cantries.js";


export default function EuropeMap() {
  const { lang } = useSelector((state) => state.language);
  const navigate = useNavigate();

  const [hoverId, setHoverId] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/countries?lang=${lang}`
      );

      const data = await response.json();

      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchCountries();
}, [lang]);

  // 👉 активные страны
  const countriesMap = Object.fromEntries(
    countries.map(c => [c.path, c])
  );

  const isActive = (id) => Boolean(countriesMap[id]);

  const getCountryName = (id) =>
    countryNames[id]?.[lang] || id;

  return (
    <div className="map-container">
      <svg viewBox="0 0 1000 684" className="map-svg">

        {/* 🌍 страны */}
        <g className="map-shape">
          {mapEu.map((loc) => {
            const active = isActive(loc.id);

            return (
              <path
                key={loc.id}
                d={loc.path}
                className={active ? "interactive" : "disabled"}
                stroke="#000"
                strokeWidth="1"
                onClick={() => {
                  if (active) navigate(`/${loc.id}`);
                }}
                onMouseEnter={(e) => {
                  setHoverId(loc.id);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) =>
                  setTooltipPos([e.clientX, e.clientY])
                }
                onMouseLeave={() => setHoverId(null)}
              />
            );
          })}
        </g>

        {/* 🏷 подписи стран (по заранее заданным центрам) */}
        {mapEu.map((loc) => {
          const center = countryCenters?.[loc.id];

          if (!center) return null;

          return (
            <text
              key={`label-${loc.id}`}
              x={center.x}
              y={center.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fill="#111"
              pointerEvents="none"
              className="country-label"
            >
              {getCountryName(loc.id)}
            </text>
          );
        })}

      </svg>

      {/* 🧭 tooltip */}
      {hoverId && (
        <div
          style={{
            position: "fixed",
            top: tooltipPos[1] + 10,
            left: tooltipPos[0] + 10,
            background: "#fff",
            padding: "4px 8px",
            border: "1px solid #333",
            borderRadius: "4px",
            pointerEvents: "none",
            fontSize: "12px",
            color: "#000",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}
        >
          {getCountryName(hoverId)}
        </div>
      )}
    </div>
  );
}