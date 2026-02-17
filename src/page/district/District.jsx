import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'
import { useMeta } from '../../hooks/useMeta';

import './District.scss'
import useCityFullData from '../../hooks/useCityFullData.js';
import CountryMap from '../../components/maps/CountryMap.jsx';
import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const slugify = (str = "") =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "");

const District = () => {
  const { countryPath, regionsPath, districtPath } = useParams();
  const { lang, country, region, district, error } = useCityFullData();
  const location = useLocation();

  useMeta(district?.meta || {});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      // даём компоненту время отрендериться
      setTimeout(() => {
        const el = document.getElementById(`subregion-${scrollTo}`);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.search]);

     useEffect(() => {
    if (district?.name) {
        document.title = district.name;
    }
}, [district?.name]);

  if (error) return <p>{error}</p>;
  if (!district) return <p>District not found</p>;

  const crumbs = [
    { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    { label: region.country, path: `/${country.path}` },
    { label: region.name, path: `/${country.path}/${region.path}` },
    { label: district.name || district.title }
  ];

  return (
    <div className='district'>
      <BreadCrumbs crumbs={crumbs} />

      <div className='district__container'>
        {district?.title && <div className='district__title'>{district.title}</div>}

        <BtnAttr lang={lang} path={`/${countryPath}/${regionsPath}/${districtPath}/attractions`} />

        <div className='district__map'>
          <CountryMap
            countryKey={country?.path}
            regionKey={region?.path}
            districtKey={district?.path}
            regions={region}
          />
        </div>

        <div className='district__desc'>
          {district?.desc?.history && (<InfoBlock data={district.desc.history} className="district__history" />)}
          {district?.desc?.area && (<InfoBlock data={district.desc.area} className="district__area" />)}
          {district?.desc?.population && (<InfoBlock data={district.desc.population} className="district__population" />)}
          {district?.desc?.districts && (<InfoBlock data={district.desc.districts} className="district__districts" />)}
          {district?.desc?.cities && (<InfoBlock data={district.desc.cities} className="district__cities" />)}
        </div>

        {district?.subRegion?.length > 0 && (
          <div className="district__list">
            {district.subRegion.map((subRegion) => (
              <Region
                key={subRegion.id}
                data={subRegion}
                countryPath={country.path}
                regionsPath={region.path}
                districtPath={district.path}
                id={`subregion-${slugify(subRegion.fullName)}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

export default District