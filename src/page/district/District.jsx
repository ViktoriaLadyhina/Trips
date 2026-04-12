import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'

import './District.scss'
import CountryMap from '../../components/maps/CountryMap.jsx';
import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";
import { useSelector } from "react-redux";
import useDistricts from "../../hooks/useDistricts.js";
import useSabRegions from "../../hooks/useSabRegions.js";
import useLand from "../../hooks/useLand.js";
import datas from '../../datas/minimalIndex'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const slugify = (str = "") =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "");

const District = () => {
  const { countryPath, regionPath, districtPath } = useParams();
  const { lang } = useSelector((state) => state.language);
  const { region } = useLand(countryPath, regionPath);
  const { district, error } = useDistricts(countryPath, regionPath, districtPath);
  const { subRegion } = useSabRegions(countryPath, regionPath, districtPath);
  const location = useLocation();

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

  const meta = district?.meta;
  const titleFallback = district?.name;

  if (error) return <p>{error}</p>;
  if (!district) return <p>District not found</p>;

  const crumbs = [
    { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
    { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` },
    { label: district.name || district.title }
  ];

  return (
    <div className='district'>

      {meta && (
        <Helmet>
          <title>{meta.title || titleFallback}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.ogTitle} />
          <meta property="og:description" content={meta.ogDescription} />
          <meta property="og:image" content={meta.ogImage} />
        </Helmet>
      )}

      <BreadCrumbs crumbs={crumbs} />

      <div className='district__container'>
        {district?.title && <div className='district__title'>{district.title}</div>}

        <BtnAttr lang={lang} path={`/${countryPath}/${regionPath}/${districtPath}/attractions`} />

        {districtPath !== "trier_saarburg" && districtPath !== "mayen_koblenz" && (
          <div className='district__map'>
            <CountryMap
              countryKey={countryPath}
              regionKey={regionPath}
              districtKey={districtPath}
              regions={region}
              subRegion={subRegion}
            />
          </div>
        )}

        <div className='district__desc'>
          {district?.gerb && (
            <div className='district-gerb'>
              <img src={`${BASE_PHOTO_URL}${district.gerb}`} alt={district.name} />
            </div>
          )}

          {district?.desc?.history && (<InfoBlock data={district.desc.history} className="district__history" />)}
          {district?.desc?.area && (<InfoBlock data={district.desc.area} className="district__area" />)}
          {district?.desc?.population && (<InfoBlock data={district.desc.population} className="district__population" />)}
          {district?.desc?.districts && (<InfoBlock data={district.desc.districts} className="district__districts" />)}
          {district?.desc?.cities && (<InfoBlock data={district.desc.cities} className="district__cities" />)}
        </div>

        {subRegion?.length > 0 && (
          <div className="district__list">
            {subRegion.map((sub) => (
              <Region
                key={sub.id}
                data={sub}
                countryPath={countryPath}
                regionPath={regionPath}
                districtPath={districtPath}
                id={`subregion-${slugify(sub.path)}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

export default District