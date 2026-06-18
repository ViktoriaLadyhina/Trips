import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { districtsArnsberg as districts } from "./maps/nrwDistricts";
import "../Maps.scss";

const arnsbergDistrictCenters = {
    herne: { x: 35, y: 220, dx: 15, dy: -68 },
    bochum: { x: 70, y: 190, dx: -10, dy: 0 },
    dortmund: { x: 100, y: 250, dx: 40, dy: -80 },
    hagen: { x: 30, y: 270, dx: 120, dy: -10 },
    hamm: { x: 160, y: 230, dx: 90, dy: -160 },
    ku: { x: 110, y: 200, dx: 110, dy: -70 }, //Kreis Unna
    erk: { x: 140, y: 180, dx: -60, dy: 60 }, //Ennepe-Ruhr-Kreis
    mk: { x: 180, y: 180, dx: 50, dy: 120 }, //Märkischer Kreis
    ko: { x: 120, y: 150, dx: 190, dy: 260 }, //Kreis Olpe
    ks: { x: 160, y: 140, dx: 220, dy: -10 }, //Kreis Soest
    hk: { x: 80, y: 160, dx: 340, dy: 130 }, //Hochsauerlandkreis
    ksw: { x: 35, y: 220, dx: 350, dy: 260 }, //Kreis Siegen-Wittgenstein
};

const NRWArnsbergMap = ({ subRegion, cities, scrollToSubRegion }) => {
    const navigate = useNavigate();
    const [hoverRegion, setHoverRegion] = useState(null);
    const [tooltipPos, setTooltipPos] = useState([0, 0]);


    // 1️⃣ Берём субрегионы Köln
    const arnsbergSubRegions = useMemo(() => subRegion || [], [subRegion]);

    // 2️⃣ Берём города
    const freeCities = useMemo(() => {
        return ["bochum", "dortmund", "hagen", "hamm", "herne"]
            .map(slug => cities?.find(city => city.path === slug))
            .filter(Boolean);
    }, [cities]);

    // Функция клика по городу
    const handleCityClick = (city) => {
        if (city.is_active) navigate(`/germany/nrw/city/${city.path}`);
    };

    const getName = (obj) =>
  obj?.blocks?.find(b => b.block_key === "name")?.content
  ?? obj?.name
  ?? obj?.path;

    return (
        <div className="koln-map">
            <svg viewBox="0 0 660.479 660.117">
                <g className="map-shape">
                    {/* 1️⃣ Субрегионы */}
                    {arnsbergSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        return (
                            <path
                                key={loc.id}
                                d={loc.path}
                                className="interactive"
                                onClick={() => scrollToSubRegion(reg)}
                                onMouseEnter={(e) => { setHoverRegion(getName(reg)); setTooltipPos([e.clientX, e.clientY]); }}
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
                                className={city.is_active ? "interactive" : "disabled"}
                                onClick={() => handleCityClick(city)}
                                onMouseEnter={(e) => { setHoverRegion(getName(city)); setTooltipPos([e.clientX, e.clientY]); }}
                                onMouseMove={(e) => setTooltipPos([e.clientX, e.clientY])}
                                onMouseLeave={() => setHoverRegion(null)}
                            />
                        );
                    })}

                    {/* 3️⃣ Подписи субрегионов */}
                    {arnsbergSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;
                        const name = getName(reg) || "";

                        const center = arnsbergDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
                        return (
                            <text
                                key={`subregion-${loc.id}-label`}
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#000"
                                pointerEvents="none"
                            >

                                {name.includes("-") || name.includes(" ")
                                    ? name.split("-").map((part, i) => (
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
                                            {name}
                                        </tspan>
                                    )}
                            </text>
                        );
                    })}

                    {/* 4️⃣ Подписи городов */}
                    {freeCities.map((city) => {
                        const loc = districts.find(d => d.name === city.path);
                        if (!loc) return null;

                        const center = arnsbergDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
                        return (
                            <text
                                key={`city-${loc.id}-label`}
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
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

export default NRWArnsbergMap;