import { useNavigate } from "react-router";
import "../Maps.scss";
import { districtsLu as mapLu } from "./districts";
import { useEffect, useRef, useState } from "react";

export default function LuxembourgMap({ regions, countryPath }) {
  const navigate = useNavigate();

  const regionItems = regions?.items || [];

  const [hoverRegion, setHoverRegion] = useState(null);
  const [tooltipPos, setTooltipPos] = useState([0, 0]);
  const [centers, setCenters] = useState({});

  const pathsRef = useRef({});

  useEffect(() => {
    const newCenters = {};

    Object.keys(pathsRef.current).forEach((id) => {
      const el = pathsRef.current[id];
      if (!el) return;

      const bbox = el.getBBox();

      newCenters[id] = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };
    });

    setCenters(newCenters);
  }, []);

  return (
    <div className="map-container">
      <svg viewBox="0 0 559.32 724.61">
        <g className="map-shape">
          {mapLu.map((loc) => {
            const region = regionItems.find(
              (r) => r.path === loc.id.toLowerCase()
            );

            if (!region) return null;

            return (
              <path
                key={loc.id}
                ref={(el) => (pathsRef.current[loc.id] = el)}
                d={loc.path}
                className={region.hasInfo ? "interactive" : "disabled"}
                stroke="#000"
                strokeWidth="1"
                fill="#ccc"
                onClick={() =>
                  region.hasInfo &&
                  navigate(`/${countryPath}/${region.path}`)
                }
                onMouseEnter={(e) => {
                  setHoverRegion(region.name);
                  setTooltipPos([e.clientX, e.clientY]);
                }}
                onMouseMove={(e) =>
                  setTooltipPos([e.clientX, e.clientY])
                }
                onMouseLeave={() => setHoverRegion(null)}
              />
            );
          })}

          {/* подписи */}
          {Object.entries(centers).map(([id, center]) => {
            const region = regionItems.find(
              (r) => r.path === id.toLowerCase()
            );

            if (!region) return null;

            return (
              <text
                key={id}
                x={center.x}
                y={center.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12px"
                fill="#000"
                pointerEvents="none"
              >
                {region.name}
              </text>
            );
          })}
        </g>
      </svg>

      {hoverRegion && (
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
          }}
        >
          {hoverRegion}
        </div>
      )}
    </div>
  );
}