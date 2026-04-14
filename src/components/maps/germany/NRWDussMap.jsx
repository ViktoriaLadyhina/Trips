import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { districtsDusseldorf as districts } from "../germany/maps/nrwDistricts";
import "../Maps.scss";
import { useSelector } from "react-redux";

const slugify = (str = "") =>
    str.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");

const dusseldorfDistrictCenters = {
    kleve: { x: 70, y: 230, dx: -10, dy: -10 },
    wesel: { x: 130, y: 250, dx: 0, dy: -10 },
    viersen: { x: 90, y: 330, dx: -10, dy: 0 },
    rhein_kreis_neuss: { x: 130, y: 360, dx: 0, dy: 10 },
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

const NRWDussMap = ({ regions, subRegion }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoverRegion, setHoverRegion] = useState(null);
    const [tooltipPos, setTooltipPos] = useState([0, 0]);
    const { lang } = useSelector((state) => state.language);

    const districtPagePath = "/germany/nrw/dusseldorf";

    // 1️⃣ Берём субрегионы Köln
    const DussSubRegions = useMemo(() => subRegion || [], [subRegion]);

    // 2️⃣ Берём города
    const freeCities = useMemo(() => {
        return ["duisburg", "duesseldorf_city", "krefeld", "essen", "moenchengladbach", "muelheim", "oberhausen", "remscheid", "solingen", "wuppertal"]
            .map(slug => regions?.discriptRegions?.[1]?.items?.find(city => city.path === slug))
            .filter(Boolean);
    }, [regions]);
    

    // Функция клика по субрегиону
    const scrollToSubRegion = (reg) => {
        const slug = slugify(reg.path);
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
            <svg viewBox="0 160 360.479 255.000">
                <g className="map-shape">
                    {/* 1️⃣ Субрегионы */}
                    {DussSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        return (
                            <path
                                key={loc.id}
                                d={loc.path}
                                className="interactive"
                                onClick={() => scrollToSubRegion(reg)}
                                onMouseEnter={(e) => { setHoverRegion(reg.translations[lang].name); setTooltipPos([e.clientX, e.clientY]); }}
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
                    {DussSubRegions.map((reg) => {
                        const loc = districts.find(d => d.name === reg.path);
                        if (!loc) return null;

                        const center = dusseldorfDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
                        return (
                            <text
                                key={`${loc.id}-label`}                                
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "6px" }}
                                fill="#000"
                                pointerEvents="none"
                            >
                                
                                {reg.translations[lang].name.includes("-") || reg.translations[lang].name.includes(" ")
                                    ? reg.translations[lang].name.split("-").map((part, i) => (
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
                                            {reg.translations[lang].name}
                                        </tspan>
                                    )}
                            </text>
                        );
                    })}

                    {/* 4️⃣ Подписи городов */}
                    {freeCities.map((city) => {
                        const loc = districts.find(d => d.name === city.path);
                        if (!loc) return null;

                        const center = dusseldorfDistrictCenters[loc.id] || { x: 0, y: 0, dx: 0, dy: 0 };
                        return (
                            <text
                                key={`${loc.id}-label`}
                                x={center.x + (center.dx || 0)}
                                y={center.y + (center.dy || 0)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{ fontSize: "6px" }}
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

export default NRWDussMap;