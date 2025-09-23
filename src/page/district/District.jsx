
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'
import { useMeta } from '../../hooks/useMeta';

import './District.scss'
import useCityFullData from '../../hooks/useCityFullData.js';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const District = () => {
  const { lang, country, region, district, error } = useCityFullData();
  console.log(country);
  

  useMeta(district?.meta || {});

  if (error) return <p>{error}</p>;
  if (!district) return <p>District not found</p>;

  const crumbs = [
    { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    { label: country.countryName, path: `/${country.path}` },
    { label: region.name, path: `/${country.path}/${region.path}` },
    { label: district.name || district.title }
  ];

  return (
    <div className='district'>
      <BreadCrumbs crumbs={crumbs} />
      <div className='district__container'>
        {district?.title && <div className='district__title'>{district.title}</div>}

        {district?.currentMap && (
          <div className='district__map'>
            <img
              src={`${BASE_PHOTO_URL}${district.currentMap}`}
              alt={`${district?.title || 'district'} map`}
            />
          </div>
        )}

        <div className='district__desc'>
          {district?.desc?.history && (<InfoBlock data={district.desc.history} className="district__history" />)}
          {district?.desc?.area && (<InfoBlock data={district.desc.area} className="district__area" />)}
          {district?.desc?.population && (<InfoBlock data={district.desc.population} className="district__population" />)}
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
              />
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

export default District