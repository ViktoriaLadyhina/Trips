import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ukraine from "@svg-maps/ukraine";
import "../Maps.scss";

const regionCenters = {
  vinnytsia: { x: 405, y: 240, dx: -20, dy: 4 },
  volyn: { x: 190, y: 42, dx: -20, dy: 4.5 },
  dnipropetrovsk: { x: 712, y: 282, dx: 0, dy: 4.5 },
  donetsk: { x: 937, y: 391, dx: -35, dy: -1 },
  zhytomyr: { x: 400, y: 91, dx: -25, dy: 4 },
  zakarpattia: { x: 42, y: 295, dx: 15, dy: 4 },
  zaporizhia: { x: 801, y: 392, dx: -20, dy: 3 },
  'ivano-frankivsk': { x: 144, y: 254, dx: -5, dy: 3.5 },
  'kyiv-city': { x: 467, y: 102, dx: 5, dy: 5 },
  kirovohrad: { x: 654, y: 307, dx: -50, dy: 2 },
  luhansk: { x: 937, y: 391, dx: 0, dy: -8 },
  lviv: { x: 163, y: 185, dx: -30, dy: 3 },
  mykolaiv: { x: 539, y: 500, dx: 5, dy: -5.5 },
  odessa: { x: 426, y: 572, dx: 15, dy: -9 },
  poltava: { x: 708, y: 198, dx: -30, dy: 2 },
  rivne: { x: 307, y: 80, dx: -20, dy: 2.5 },
  sumy: { x: 752, y: 181, dx: -40, dy: -3 },
  ternopil: { x: 228, y: 197, dx: 0, dy: 4.5 },
  kharkiv: { x: 881, y: 218, dx: -35, dy: 2 },
  kherson: { x: 583, y: 537, dx: 30, dy: -3.5 },
  khmelnytskyi: { x: 281, y: 164, dx: 0, dy: 5.5 },
  cherkasy: { x: 551, y: 190, dx: -5, dy: 5.5 },
  chernihiv: { x: 625, y: 3, dx: -40, dy: 6 },
  chernivtsi: { x: 236, y: 336, dx: 0, dy: 2 },
  kyiv: { x: 467, y: 102, dx: 0, dy: 8.5 },
  sevastopol: { x: 712, y: 564, dx: 0, dy: 0.5 },
  crimea: { x: 712, y: 564, dx: 15, dy: 3 }
};

export default function UkraineMap({ regions, countryPath }) {
  const navigate = useNavigate();
  const regionItems = regions?.items || [];

  console.log(ukraine);
  
  const [hoverRegion, setHoverRegion] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  return (
    <div className="map-container">
      <svg
        viewBox={ukraine.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Рендер регионов */}
        {ukraine.locations.map((loc) => {
          const region = regionItems.find(r => r.svgId.toLowerCase() === loc.id);
          if (!region) return null;

          return (
            <path
              key={loc.id}
              d={loc.path}
              className={region.hasInfo ? "interactive" : "disabled"}
              onClick={() => region.hasInfo && navigate(`/${countryPath}/${region.path}`)}
              strokeWidth="1"
              onMouseEnter={(e) => {
                setHoverRegion(region.name);
                setTooltipPos([e.clientX, e.clientY]);
              }}
              onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
              onMouseLeave={() => setHoverRegion(null)}
            />
          );
        })}

        {/* Подписи */}
        {ukraine.locations.map((loc) => {
          const region = regionItems.find(r => r.svgId.toLowerCase() === loc.id);
          if (!region) return null;

          const center = regionCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

          // Убираем слово "область" / "Oblast"
          const displayName = region.name
            .replace(/\s*область$/i, '')       // украинский
            .replace(/\s*Область$/i, '')       // русский
            .replace(/^Oblast\s+/i, '')        // латиница / немецкий
            .trim();

          return (
            <text
              key={`${loc.id}-label`}
              x={center.x}
              y={center.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#000"
              dx={center.dx || 0}
              pointerEvents="none"
            >
              {displayName.includes("-")
                ? displayName.split("-").map((part, i) => (
                    <tspan
                      key={i}
                      x={center.x + (center.dx || 0)}
                      dy={i === 0 ? `${center.dy}em` : "1.2em"}
                    >
                      {i === 0 ? part.trim() + "-" : part.trim()}
                    </tspan>
                  ))
                : (
                    <tspan
                      x={center.x + (center.dx || 0)}
                      dy={`${center.dy}em`}
                    >
                      {displayName}
                    </tspan>
                  )}
            </text>
          );
        })}
      </svg>

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
}
