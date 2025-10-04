import GermanyMap from "./germany/Germany";
import SumskaMap from "./ukraine/SumskaMap";
import UkraineMap from './ukraine/Ukraine';
import NRWMap from './germany/NRWMap';
import NRWKolnMap from './germany/NRW-KolnMap';

const maps = {
  germany: {
    country: GermanyMap,
    nrw: {
      region: NRWMap,
      koln: NRWKolnMap,
    },
  },
  ukraine: {
    country: UkraineMap,
    sumska: SumskaMap,
  },
};

export default function CountryMap({ countryKey, regionKey, regions, districtKey }) {
  const country = maps[countryKey];
  if (!country) return null;

  let MapComponent = country.country;

  if (regionKey && country[regionKey]) {
    const region = country[regionKey];

    if (districtKey && region[districtKey]) {
      MapComponent = region[districtKey];
    } else {
      MapComponent = region.region || region;
    }
  }

  if (!MapComponent) return null;

  return (
    <MapComponent
      regions={regions}
      countryPath={countryKey}
      regionPath={regionKey}
      districtPath={districtKey}
    />
  );
}