import React, { useEffect } from 'react'
import '../../../components/region/Region.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegionData } from '../../../store/features/regionsSlice.js';
import BreadCrumbs from '../../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../../components/region/Region.jsx';
import { useParams } from 'react-router';
import Loader from '../../../components/loader/Loader.jsx';
import ErrorBox from '../../../components/error/ErrorBox.jsx';
import { dePhotos } from '../../../datas/fotos/de.js';
import './NRW.scss';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Regions = () => {
  const dispatch = useDispatch();
  const { regionID } = useParams();
  const { regions, status, error } = useSelector((state) => state.regions);
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    if (lang) {
      dispatch(fetchRegionData({ lang, country: "Germany", region: "nrw" }));
    }
  }, [lang, dispatch]);

  const nrw = regions?.Germany?.nrw;
  const regionData = nrw?.nrwRegions
    .flatMap(block => block.items)  // объединяем все блоки
    .find(r => r.id === Number(regionID));

  if (status === 'loading' && !regionData) return <Loader />;
  if (status === 'failed') return <ErrorBox message={error} />;
  if (!regionData) return null;

  const InfoBlock = ({ data, className }) => (
    <div className={className}>
      {data.map((item, index) =>
        item.bold ? (
          <span key={index} className={`${className}__bold`}>{item.bold}</span>
        ) : (
          <span key={index} className={`${className}__text`}>{item.text}</span>
        )
      )}
    </div>
  );

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: lang === 'ru' ? 'Германия' : lang === 'de' ? 'Deutschland' : 'Німеччина', path: '/germany' },
    { label: nrw.name, path: '/germany/nrw' },
    { label: regionData.name }
  ];

  return (
    <div className='regions'>
      <BreadCrumbs crumbs={crumbs} />
      <div className='regions__container'>
        <div className='regions__title'>{regionData.titel}</div>
        <div className='regins__map'><img src={`${BASE_PHOTO_URL}${dePhotos.nrw[1].path}`} alt={`map ${regionData.name}`} /></div>
        <div className='regions__desc'>
          <InfoBlock data={regionData.desc.history} className="regions__history" />
          <InfoBlock data={regionData.desc.area} className="regions__area" />
          <InfoBlock data={regionData.desc.population} className="regions__population" />
        </div>
        <div className='regions__list'>
          {regionData.koelnDistrict.map((district) => (
            <Region key={district.id} data={district} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Regions