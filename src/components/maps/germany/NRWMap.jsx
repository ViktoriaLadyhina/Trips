import React from "react";
import { districtsKoln as districts } from "./maps/nrwDistricts";

const NRWMap = () => {
  return (
    <svg viewBox="0 0 600 625" xmlns="http://www.w3.org/2000/svg">
      <g className="map-shape">
        {districts.map((loc) => (
          <path
            key={loc.id}
            d={loc.path}
            fill="lightgray"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
};

export default NRWMap;