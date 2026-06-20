import GermanyMap from "./germany/Germany.jsx";
import SumskaMap from "./ukraine/SumskaMap.jsx";
import UkraineMap from './ukraine/Ukraine.jsx';
import NRWMap from './germany/NRWMap.jsx';
import NRWKolnMap from './germany/NRWKolnMap.jsx';
import NRWArnsbergMap from './germany/NRWArnsbergMap.jsx'
import NRWDusseldorfMap from './germany/NRWDussMap.jsx'
import RheinlandPfalzMap from './germany/RPMap.jsx';

import luxembourgMap from './luxembourg/luxembourg.jsx';

const maps = {
  germany: {
    country: GermanyMap,
    nrw: {
      region: NRWMap,
      koln: NRWKolnMap,
      arnsberg: NRWArnsbergMap,
      dusseldorf: NRWDusseldorfMap,
    },
    rheinland_pfalz: {
      region: RheinlandPfalzMap
    },
  },
  ukraine: {
    country: UkraineMap,
    sumska: SumskaMap,
  },
  luxembourg: {
    country: luxembourgMap
  }
};

export default function CountryMap({ countryKey, regionKey, regions, subRegion, districtKey, cities, scrollToSubRegion }) {
  const country = maps[countryKey];
  if (!country) return null;

  let MapComponent = country.country;

  if (!regionKey) {
  // уровень страны
  MapComponent = country.country;
} else {
  // уровень региона
  if (!country[regionKey]) {
    return null; 
  }

  const region = country[regionKey];

    // Если districtKey задан, но карты для него нет — не показываем карту
    if (districtKey) {
      if (region[districtKey]) {
        MapComponent = region[districtKey] || null;
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
      subRegion={subRegion}
      cities={cities}
      scrollToSubRegion={scrollToSubRegion}
    />
  );
}