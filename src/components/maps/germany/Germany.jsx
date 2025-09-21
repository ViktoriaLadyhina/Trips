import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import germany from "@svg-maps/germany";
import "../Maps.scss";

const regionCenters = {
  bw: { x: 180, y: 600, dx: 20, dy: 3.5 },
  by: { x: 260, y: 480, dx: 100, dy: 8 },
  be: { x: 485, y: 260, dx: -5, dy: 0.8 },
  bb: { x: 345, y: 210, dx: 140, dy: 5.5 },
  hb: { x: 167, y: 199, dx: 20, dy: 0.8 },
  hh: { x: 246, y: 163, dx: 20, dy: 0.2 },
  he: { x: 228, y: 364, dx: -25, dy: 5.5 },
  mv: { x: 507, y: 98, dx: -90, dy: 2 },
  ni: { x: 61, y: 159, dx: 140, dy: 4.5 },
  nw: { x: 77, y: 303, dx: 20, dy: 4 },
  rp: { x: 35, y: 498, dx: 50, dy: 2 },
  sl: { x: 33, y: 574, dx: 35, dy: 0.9 },
  sn: { x: 409, y: 421, dx: 70, dy: 0.35 },
  st: { x: 366, y: 219, dx: 0, dy: 6 },
  sh: { x: 181, y: 109, dx: 70, dy: -0.35 },
  th: { x: 308, y: 364, dx: 10, dy: 4 }
};


export default function GermanyMap({ regions, countryPath }) {
    const navigate = useNavigate();
    const regionItems = regions?.items || [];

    const [hoverRegion, setHoverRegion] = useState(null);
    const [tooltipPos, setTooltipPos] = useState([0, 0]);


    return (
        <div className="map-container">
            <svg viewBox={germany.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                {germany.locations.map((loc) => {
                    const region = regionItems.find(r => r.svgId.toLowerCase() === loc.id);
                    if (!region) return null;

                    const center = regionCenters[loc.id] || { x: 0, y: 0, dy: 0.35, dx: 0.35 };

                    return (
                        <g key={loc.id} >
                            <path
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
                            <text
                                x={center.x}
                                y={center.y}
                                textAnchor="middle"        // горизонтально по центру
                                dominantBaseline="middle"  // вертикально по центру
                                fontSize="10"
                                fill="#000"
                                dy={`${center.dy}em`} // вертикальный сдвиг
                                dx={center.dx || 0} // горихонтальный сдвиг
                            >
                                {region.id}
                            </text>
                        </g>
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