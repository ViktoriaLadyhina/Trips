import GermanyMap from "./germany/Germany";
import SumskaMap from "./ukraine/SumskaMap";
import UkraineMap from './ukraine/Ukraine';
import NRWMap from './germany/NRWMap';
import NRWKolnMap from './germany/NRWKolnMap';
import NRWArnsbergMap from './germany/NRWArnsbergMap'
import RheinlandPfalzMap from './germany/RPMap';

const maps = {
  germany: {
    country: GermanyMap,
    nrw: {
      region: NRWMap,
      koln: NRWKolnMap,
      arnsberg: NRWArnsbergMap,
    },
    'rhineland-pfalz': {
      region: RheinlandPfalzMap
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

    // Если districtKey задан, но карты для него нет — не показываем карту
    if (districtKey) {
      if (region[districtKey]) {
        MapComponent = region[districtKey];
      } else {
        return null; // <-- ничего не рендерим
      }
    } else {
      // districtKey не задан — показываем карту региона
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