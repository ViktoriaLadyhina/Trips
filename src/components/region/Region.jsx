import './Region.scss'
import InfoBlock from '../InfoBlock/InfoBlock'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Region = ({ data, countryPath, regionsPath, districtPath, id }) => {
  const { lang } = useSelector((state) => state.language);
  
const t = data?.translations[lang] || {};

  return (
    <div className='region' id={id}>
      {(t?.name || data?.title) && (
        <div className='region__title'>
          {t.name}
        </div>
      )}

      <div className='region__container'>
        <div className='region__container-list'>
          {t?.com && (<InfoBlock data={t.com} className="region__container_desc-text-com" />)}

          {t?.communities?.length > 0 && (
            <ul>
              {t.communities.map((reg) => (
                <li key={reg.id} className="region__container-list__item">
                  {reg.hasInfo ? (
                    <Link
                      to={`/${countryPath}/${regionsPath}/${districtPath}/${reg.path}`}
                      className="region__container-list__link"
                    >
                      {reg.name}
                    </Link>
                  ) : (
                    <span className="region__container-list__link region__container-list__link--disabled">
                      {reg.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='region__container_desc'>
          <div className='region__container_desc-text'>
            {t?.center && (<InfoBlock data={t.center} className="region__container_desc-text-center" />)}
            {t?.area && (<InfoBlock data={t.area} className="region__container_desc-text-area" />)}
            {t?.population && (<InfoBlock data={t.population} className="region__container_desc-text-population" />)}
            {t?.density && (<InfoBlock data={t.density} className="region__container_desc-text-density" />)}
            {t?.code && (<InfoBlock data={t.code} className="region__container_desc-text-code" />)}
            {t?.description && (<InfoBlock data={t.description} className="region__container_desc-text-description" /> )}
          </div>

          {data?.gerb && (
            <div className='region__container_desc-gerb'>
              <img src={`${BASE_PHOTO_URL}${data.gerb}`} alt={t.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Region
