import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsMunster as districts } from "./maps/nrwDistricts.js";
import "../Maps.scss";

const districtsMunsterCenters = {
    warendorf:      { x: 316.4, y: 157.0, dx: -10, dy: -10 },
    steinfurt:      { x: 257.9, y: 74.8,  dx: 0,   dy: -10 },
    coesfeld:       { x: 233.9, y: 161.5, dx: 0,   dy: 0 },
    borken:         { x: 153.2, y: 132.9, dx: 10,   dy: 20 },
    recklinghausen: { x: 203.4, y: 206.6, dx: 0,   dy: 0 },

    muenster:       { x: 267.3, y: 141.6, dx: 0,   dy: 0 },
    gelsenkirchen:  { x: 187.4, y: 231.9, dx: 16,   dy: -5 },
    bottrop:        { x: 165.2, y: 230.6, dx: 5,   dy: 5 },
};

const NRWMunsterMap = ({ subRegion, cities, scrollToSubRegion }) => {
    const navigate = useNavigate();

    const [hoverRegion, setHoverRegion] = useState("");
    const [tooltipPos, setTooltipPos] = useState([0, 0]);

    const getName = (obj) =>
        obj?.blocks?.find(b => b.block_key === "name")?.content?.trim()
        || obj?.name
        || obj?.path
        || "";

    // SUBREGIONS
    const munsterSubRegions = useMemo(() => subRegion || [], [subRegion]);

    // CITIES
      const freeCities = useMemo(() => {
        return (cities || [])
          .filter(city =>
            [ "muenster", "gelsenkirchen", "bottrop" ].includes(city.path)
          );
      }, [cities]);

    const handleCityClick = (city) => {
        if (city?.hasInfo) {
            navigate(`/germany/nrw/city/${city.path}`);
        }
    };


    return (
        <div className="koln-map">
            <svg viewBox="78 12 313.332 240.5">
                <g className="map-shape">

                    {munsterSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        const name = getName(reg);

                        return (
                            <path
                                key={`sub-${loc.id}`}
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

                    {munsterSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        const name = getName(reg);
                        const center = districtsMunsterCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

                        return (
                            <text
                                key={`sub-label-${loc.id}`}
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "6px" }}
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

                        const center = districtsMunsterCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

                        return (
                            <text
                                key={`city-label-${loc.id}`}
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "6px" }}
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

export default NRWMunsterMap;