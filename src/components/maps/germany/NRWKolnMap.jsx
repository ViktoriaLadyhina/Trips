import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsKoln as districts } from "./maps/nrwDistricts.js";
import "./NRWKolnMap.scss";

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

const NRWKolnMap = ({ subRegion, cities, scrollToSubRegion }) => {
  const navigate = useNavigate();

  const [hoverRegion, setHoverRegion] = useState("");
  const [tooltipPos, setTooltipPos] = useState([0, 0]);

  const getName = (obj) =>
    obj?.blocks?.find(b => b.block_key === "name")?.content?.trim()
    || obj?.name
    || obj?.path
    || "";

  // subregions
  const kolnSubRegions = useMemo(() => subRegion || [], [subRegion]);

  // cities
  const freeCities = useMemo(() => {
    return (cities || [])
      .filter(city =>
        ["koln_city", "leverkusen", "bonn", "aachen_city"].includes(city.path)
      );
  }, [cities]);

  const handleCityClick = (city) => {
    if (city?.is_active) {
      navigate(`/germany/nrw/city/${city.path}`);
    }
  };

  return (
    <div className="koln-map">
      <svg viewBox="0 150 210 155">
        <g className="map-shape">

          {kolnSubRegions.map((reg) => {
            const loc = districts.find(d => d.name === reg.path);
            if (!loc) return null;

            const name = getName(reg);

            return (
              <path
                key={`subregion-${loc.id}`}
                d={loc.path}
                className="interactive"
                onClick={() => scrollToSubRegion(reg)}
                onMouseEnter={(e) => {
                  setHoverRegion(name);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion("")}
              />
            );
          })}

          {freeCities.map((city) => {
            const loc = districts.find(d => d.name === city.path);
            if (!loc) return null;

            const name = getName(city);

            return (
              <path
                key={`city-${loc.id}`}
                d={loc.path}
                className={city?.is_active ? "interactive" : "disabled"}
                onClick={() => handleCityClick(city)}
                onMouseEnter={(e) => {
                  setHoverRegion(name);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                onMouseLeave={() => setHoverRegion("")}
              />
            );
          })}

          {kolnSubRegions.map((reg) => {
            const loc = districts.find(d => d.name === reg.path);
            if (!loc) return null;

            const name = getName(reg);
            const center = kolnDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

            return (
              <text
                key={`subregion-label-${loc.id}`}
                x={center.x + (center.dx || 0)}
                y={center.y + (center.dy || 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: "4px" }}
                fill="#000"
                pointerEvents="none"
              >
                {name.includes("-") || name.includes(" ")
                  ? name.split("-").map((part, i) => (
                      <tspan
                        key={i}
                        x={center.x + (center.dx || 0)}
                        dy={i === 0 ? "0" : "1.2em"}
                      >
                        {i === 0 ? part.trim() + "-" : part.trim()}
                      </tspan>
                    ))
                  : (
                    <tspan x={center.x + (center.dx || 0)} dy="0">
                      {name}
                    </tspan>
                  )}
              </text>
            );
          })}

          {freeCities.map((city) => {
            const loc = districts.find(d => d.name === city.path);
            if (!loc) return null;

            const center = kolnDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

            return (
              <text
                key={`city-label-${loc.id}`}
                x={center.x + (center.dx || 0)}
                y={center.y + (center.dy || 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: "4px" }}
                fill="#000"
                pointerEvents="none"
              >
                {city?.name || city?.path}
              </text>
            );
          })}

        </g>
      </svg>

      {/* TOOLTIP */}
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