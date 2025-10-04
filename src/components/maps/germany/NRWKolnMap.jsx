import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { districtsKoln as districts } from "./maps/nrwDistricts";
import "./NRWKolnMap.scss";

const slugify = (str = "") =>
  str.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");

const kolnDistrictCenters = {
  AC: { x: 35, y: 220, dx: 0, dy: 10 },
  DN: { x: 70, y: 190, dx: -10, dy: 30 },
  EU: { x: 100, y: 250, dx: -20, dy: 15 },
  HS: { x: 30, y: 270, dx: 5, dy: -85 },
  GM: { x: 160, y: 230, dx: 5, dy: -40 },
  BM: { x: 110, y: 200, dx: -25, dy: 5 },
  SU: { x: 140, y: 180, dx: 5, dy: 40 },
  GL: { x: 180, y: 180, dx: -48, dy: 10 },
  K: { x: 120, y: 150, dx: -10, dy: 50 },
  LEV: { x: 160, y: 140, dx: -40, dy: 44 },
  BN: { x: 80, y: 160, dx: 43, dy: 77 },
  A: { x: 35, y: 220, dx: -12, dy: 2 },
};

const NRWKolnMap = ({ regions }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverRegion, setHoverRegion] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  const districtPagePath = "/germany/nrw/koln";

  // 1️⃣ Берём субрегионы Köln
  const kolnSubRegions = useMemo(() => {
    return regions?.discriptRegions?.[0]?.items?.find(r => r.path === "koln")?.subRegion || [];
  }, [regions]);

  // 2️⃣ Берём города
  const freeCities = useMemo(() => {
    return ["koeln", "leverkusen", "bonn", "aachen"]
      .map(slug => regions?.discriptRegions?.[1]?.items?.find(city => city.path === slug))
      .filter(Boolean);
  }, [regions]);

  // Функция клика по субрегиону
  const scrollToSubRegion = (reg) => {
    const slug = slugify(reg.fullName);
    if (location.pathname.startsWith(districtPagePath)) {
      document.getElementById(`subregion-${slug}`)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`${districtPagePath}?scrollTo=${encodeURIComponent(slug)}`);
    }
  };

  // Функция клика по городу
  const handleCityClick = (city) => {
    if (city.hasInfo) navigate(`/germany/nrw/city/${city.path}`);
  };

  return (
    <div className="koln-map">
      <svg viewBox="0 150 210 155">
        <g className="map-shape">
          {/* 1️⃣ Субрегионы */}
          {kolnSubRegions.map((reg) => {
            const loc = districts.find(d => d.name === reg.fullName);
            if (!loc) return null;

            return (
              <path
                key={loc.id}
                d={loc.path}
                className="interactive"
                onClick={() => scrollToSubRegion(reg)}
                onMouseEnter={(e) => { setHoverRegion(reg.fullName); setTooltipPos([e.clientX, e.clientY]); }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion(null)}
              />
            );
          })}

          {/* 2️⃣ Города */}
          {freeCities.map((city) => {
            const loc = districts.find(d => d.name === city.path);
            if (!loc) return null;

            return (
              <path
                key={loc.id}
                d={loc.path}
                className={city.hasInfo ? "interactive" : "disabled"}
                onClick={() => handleCityClick(city)}
                onMouseEnter={(e) => { setHoverRegion(city.name); setTooltipPos([e.clientX, e.clientY]); }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion(null)}
              />
            );
          })}

          {/* 3️⃣ Подписи субрегионов */}
          {kolnSubRegions.map((reg) => {
            const loc = districts.find(d => d.name === reg.fullName);
            if (!loc) return null;

            const center = kolnDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
            return (
<text
  key={`${loc.id}-label`}
  x={center.x + (center.dx || 0)}
  y={center.y + (center.dy || 0)}
  textAnchor="middle"
  dominantBaseline="middle"
  style={{ fontSize: "4px" }}
  fill="#000"
  pointerEvents="none"
>
  {reg.fullName.includes("-")
    ? reg.name.split("-").map((part, i) => (
        <tspan
          key={i}
          x={center.x + (center.dx || 0)}
          dy={i === 0 ? "0" : "1.2em"} // первая строка без смещения, остальные снизу
        >
          {i === 0 ? part.trim() + "-" : part.trim()}
        </tspan>
      ))
    : (
        <tspan x={center.x + (center.dx || 0)} dy="0">
          {reg.name}
        </tspan>
      )}
</text>
            );
          })}

          {/* 4️⃣ Подписи городов */}
          {freeCities.map((city) => {
            const loc = districts.find(d => d.name === city.path);
            if (!loc) return null;

            const center = kolnDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
            return (
              <text
                key={`${loc.id}-label`}
                x={center.x + (center.dx || 0)}
                y={center.y + (center.dy || 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: "4px" }}
                fill="#000"
                pointerEvents="none"
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

export default NRWKolnMap;
