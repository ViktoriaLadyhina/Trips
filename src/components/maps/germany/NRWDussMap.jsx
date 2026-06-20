import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsDusseldorf as districts } from "../germany/maps/nrwDistricts.js";
import "../Maps.scss";

const dusseldorfDistrictCenters = {
    kleve: { x: 70, y: 230, dx: -10, dy: -10 },
    wesel: { x: 130, y: 250, dx: 0, dy: -10 },
    viersen: { x: 90, y: 330, dx: -10, dy: 0 },
    rhein_neuss: { x: 130, y: 360, dx: 0, dy: 10 },
    mettmann: { x: 190, y: 335, dx: 0, dy: -10 },

    duesseldorf_city: { x: 157, y: 345, dx: 10, dy: 0 },
    duisburg: { x: 163, y: 290, dx: -10, dy: -10 },
    oberhausen: { x: 180, y: 275, dx: 0, dy: -10 },
    muelheim: { x: 185, y: 310, dx: 10, dy: -10 },
    essen: { x: 185, y: 298, dx: 10, dy: -10 },
    krefeld: { x: 134, y: 305, dx: -10, dy: 10 },
    moenchengladbach: { x: 115, y: 350, dx: -10, dy: 10 },
    solingen: { x: 190, y: 355, dx: 10, dy: 10 },
    remscheid: { x: 220, y: 350, dx: 10, dy: 10 },
    wuppertal: { x: 210, y: 340, dx: 10, dy: 0 }
};

const NRWDussMap = ({ subRegion, cities, scrollToSubRegion }) => {
    const navigate = useNavigate();

    const [hoverRegion, setHoverRegion] = useState("");
    const [tooltipPos, setTooltipPos] = useState([0, 0]);

    const getName = (obj) =>
        obj?.blocks?.find(b => b.block_key === "name")?.content?.trim()
        || obj?.name
        || obj?.path
        || "";

    // SUBREGIONS
    const dussSubRegions = useMemo(() => subRegion || [], [subRegion]);

    // CITIES
      const freeCities = useMemo(() => {
        return (cities || [])
          .filter(city =>
            [ "duisburg", "duesseldorf_city", "krefeld", "essen", "moenchengladbach", "muelheim",
                    "oberhausen", "remscheid", "solingen", "wuppertal" ].includes(city.path)
          );
      }, [cities]);

    const handleCityClick = (city) => {
        if (city?.hasInfo) {
            navigate(`/germany/nrw/city/${city.path}`);
        }
    };

    return (
        <div className="koln-map">
            <svg viewBox="0 160 360.479 255.000">
                <g className="map-shape">

                    {dussSubRegions.map((reg) => {
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

                    {dussSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        const name = getName(reg);
                        const center = dusseldorfDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

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

                        const center = dusseldorfDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };

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

export default NRWDussMap;