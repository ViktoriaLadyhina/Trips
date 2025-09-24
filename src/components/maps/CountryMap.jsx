import GermanyMap from "./germany/Germany";
import SumskaMap from "./ukraine/SumskaMap";
import UkraineMap from './ukraine/Ukraine';

const maps = {
  germany: { country: GermanyMap },
  ukraine: { country: UkraineMap, sumska: SumskaMap },
};

export default function CountryMap({ countryKey, regionKey, regions }) {
  const country = maps[countryKey];
  if (!country) return null;

  const MapComponent = regionKey && country[regionKey] ? country[regionKey] : country.country;
  if (!MapComponent) return null;


  return <MapComponent regions={regions} countryPath={countryKey} regionPath={regionKey} />;
}