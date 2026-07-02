import BtnAttr from "../btn-attr/BtnAttr";
import CountryMap from "../maps/CountryMap";

export const MapBlock = ({ lang, mapRegions, countryPath, regionPath, path, classPrefix }) => {

  return (
    <div className={`${classPrefix}__map`}>
      <BtnAttr lang={lang} path={path} />
      <CountryMap
        countryKey={countryPath}
        regions={mapRegions}
        regionKey={regionPath}
        districtKey={mapRegions.districtPath}
        subRegion={mapRegions.subRegions}
        cities={mapRegions.cities}
        scrollToSubRegion={mapRegions.scrollToSubRegion}
      />
    </div>
  );
};