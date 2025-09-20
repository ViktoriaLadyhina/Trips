import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'
import { useMeta } from '../../hooks/useMeta';

import { regions as ruDistricts } from '../../datas/ru';
import { regions as uaDistricts } from '../../datas/ua';
import { regions as deDistricts } from '../../datas/de';
import './District.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const District = () => {
  const { countryPath, regionsPath, districtPath } = useParams();
  const { lang } = useSelector((state) => state.language);

  const allDistricts = lang === 'ua' ? uaDistricts : lang === 'de' ? deDistricts : ruDistricts;

  const countryRegions = allDistricts[countryPath];

  const region = countryRegions[regionsPath];

  // Ищем район по patch
  const districtItems = region.discriptRegions.flatMap(r => r.items);
  const district = districtItems.find(d => d.patch === districtPath);
  useMeta(district?.meta);

  if (!countryRegions) return <p>Country not found</p>;
  if (!region) return <p>Region not found</p>;
  if (!district) return <p>District not found</p>;

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: countryRegions.countryName, path: `/${countryPath}` },
    { label: region.name, path: `/${countryPath}/${regionsPath}` },
    { label: district.title }
  ];

  return (
    <div className='district'>
      <BreadCrumbs crumbs={crumbs} />
      <div className='district__container'>
        <div className='district__title'>{district.title}</div>
        <div className='district__map'>
          <img src={`${BASE_PHOTO_URL}${district.currentMap}`} alt={`${district?.titel} map`} />
        </div>
        <div className='district__desc'>
          <InfoBlock data={district?.desc?.history} className="district__history" />
          <InfoBlock data={district?.desc?.area} className="district__area" />
          <InfoBlock data={district?.desc?.population} className="district__population" />
        </div>
        <div className='district__list'>
          {district?.subRegion?.map((subRegion) => (
            <Region
              key={subRegion.id}
              data={subRegion}
              countryPath={countryPath}
              regionsPath={regionsPath}
              districtPath={districtPath}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default District