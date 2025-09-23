import React from "react";
import GermanyMap from "./germany/Germany";
import UkraineMap from './ukraine/Ukraine';

const maps = {
  germany: GermanyMap,
  ukraine: UkraineMap,
};

export default function CountryMap({ countryKey, regions }) {
  const MapComponent = maps[countryKey];

  if (!MapComponent) return null; // если для страны нет интерактивной карты

  return <MapComponent regions={regions} countryPath={countryKey} />;
}