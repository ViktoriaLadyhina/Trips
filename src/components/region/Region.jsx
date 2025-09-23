import './Region.scss'
import InfoBlock from '../InfoBlock/InfoBlock'
import { Link } from 'react-router-dom';

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Region = ({ data, countryPath, regionsPath, districtPath }) => {

  return (
    <div className='region'>
      {(data?.name || data?.fullName) && (
        <div className='region__title'>
          {data.name} {data.fullName ? `(${data.fullName})` : ''}
        </div>
      )}

      <div className='region__container'>
        <div className='region__container-list'>
          {data?.com && (<InfoBlock data={data.com} className="region__container_desc-text-com" />)}

          {data?.communities?.length > 0 && (
            <ul>
              {data.communities.map((reg) => (
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
            {data?.center && (<InfoBlock data={data.center} className="region__container_desc-text-center" />)}
            {data?.area && (<InfoBlock data={data.area} className="region__container_desc-text-area" />)}
            {data?.population && (<InfoBlock data={data.population} className="region__container_desc-text-population" />)}
            {data?.density && (<InfoBlock data={data.density} className="region__container_desc-text-density" />)}
            {data?.code && (<InfoBlock data={data.code} className="region__container_desc-text-code" />)}
            {data?.description && (<InfoBlock data={data.description} className="region__container_desc-text-description" /> )}
          </div>

          {data?.gerb && (
            <div className='region__container_desc-gerb'>
              <img src={`${BASE_PHOTO_URL}${data.gerb}`} alt={data.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Region
