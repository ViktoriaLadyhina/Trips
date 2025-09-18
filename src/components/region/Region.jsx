import './Region.scss'

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Region = ({ data }) => {

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

  return (
    <div className='region'>
      <div className='region__desc'>
        <div className='region__list'>
          <InfoBlock data={data.com} className="region__desc-text-com" />
          {data.communities.map((reg) => (
            <li key={reg.id} className="nrw__sidebar-item">
              {reg.hasInfo ? (
                <Link to={`/germany/nrw/${reg.id}`} className="nrw__sidebar-link">
                  {reg.name}
                </Link>
              ) : (
                <span className="nrw__sidebar-link nrw__sidebar-link--disabled">
                  {reg.name}
                </span>
              )}
            </li>
          ))}
        </div>
        <div className='region__desc-text'>
          <div className='region__desc-text-title'>{data.name} ({data.fullName})</div>
          <InfoBlock data={data.center} className="region__desc-text-center" />
          <InfoBlock data={data.area} className="region__desc-text-area" />
          <InfoBlock data={data.population} className="region__desc-text-population" />
          <InfoBlock data={data.density} className="region__desc-text-density" />
          <InfoBlock data={data.code} className="region__desc-text-code" />
          <InfoBlock data={data.description} className="region__desc-text-description" />
        </div>
        <div className='region__desc-gerb'>{data.gerb && <img src={`${BASE_PHOTO_URL}${data.gerb}`} alt={data.name} />}</div>
      </div>
    </div>
  )
}

export default Region