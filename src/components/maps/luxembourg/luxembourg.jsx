import { useSelector } from "react-redux";
import "../Maps.scss";
import { districtsLu as mapLu } from "./districts";
import { useEffect, useRef, useState } from "react";

const cantonsMap = {
  "Clervaux": { ru: "Клерво", de: "Clervaux", ua: "Клерво" },
  "Diekirch": { ru: "Дикрих", de: "Diekirch", ua: "Дікріх" },
  "Echternach": { ru: "Эхтернах", de: "Echternach", ua: "Ехтернах" },
  "Esch-Sur-Alzette": { ru: "Эш-сюр-Альзетт", de: "Esch-sur-Alzette", ua: "Еш-сюр-Альзетт" },
  "Grevenmacher": { ru: "Гревенмахер", de: "Grevenmacher", ua: "Гревенмахер" },
  "Luxembourg": { ru: "Люксембург", de: "Luxembourg", ua: "Люксембург" },
  "Mersch": { ru: "Мерш", de: "Mersch", ua: "Мерш" },
  "Redange": { ru: "Реданж", de: "Redange", ua: "Реданж" },
  "Remich": { ru: "Ремих", de: "Remich", ua: "Реміх" },
  "Vianden": { ru: "Вьянден", de: "Vianden", ua: "В’янден" },
  "Wiltz": { ru: "Вильц", de: "Wiltz", ua: "Вільц" },
  "Capellen": { ru: "Капеллен", de: "Capellen", ua: "Капеллен" },
};

export default function LuxembourgMap() {
  const { lang } = useSelector((state) => state.language);

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

  const getName = (id) => cantonsMap[id]?.[lang] || id;

  return (
    <div className="map-container">
      <svg viewBox="0 0 559.32 724.61">
        <g className="map-shape">
          {mapLu.map((loc) => (
            <path
              key={loc.id}
              ref={(el) => (pathsRef.current[loc.id] = el)}
              d={loc.path}
              className="disabled"
              stroke="#000"
              strokeWidth="1"
              fill="#ccc"
              onMouseEnter={(e) => {
                setHoverRegion(getName(loc.id));
                setTooltipPos([e.clientX, e.clientY]);
              }}
              onMouseMove={(e) =>
                setTooltipPos([e.clientX, e.clientY])
              }
              onMouseLeave={() => setHoverRegion(null)}
            />
          ))}

          {/* подписи */}
          {Object.entries(centers).map(([id, center]) => (
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
              {getName(id)}
            </text>
          ))}
        </g>
      </svg>

      {/* tooltip */}
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