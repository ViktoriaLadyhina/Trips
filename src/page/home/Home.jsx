
import { useSelector } from "react-redux";
import './Home.scss'
import { Link } from "react-router";
import { useMeta } from '../../hooks/useMeta';

import { datas as datasUa } from '../../datas/ua/home'
import { datas as datasRu } from '../../datas/ru/home'
import { datas as datasDe } from '../../datas/de/home'
import { datas as countriesUa } from '../../datas/ua/country';
import { datas as countriesRu } from '../../datas/ru/country';
import { datas as countriesDe } from '../../datas/de/country';

const Home = () => {
  const { lang } = useSelector((state) => state.language);

  // выбираем данные в зависимости от языка
  const homeData = lang === 'ua' ? datasUa : lang === 'de' ? datasDe : datasRu;
  const countries = lang === 'ua' ? countriesUa : lang === 'de' ? countriesDe : countriesRu;
  useMeta(homeData.meta);

  return (
    <div className="home">
      <h1 className="home__title">{homeData?.title}</h1>
      <h2 className="home__subtitle">{homeData?.subtitle_1}</h2>
      <p className="home__desc">{homeData?.description_1}</p>
      <ul className="home__countries">
        {countries?.map((c) => (
          <li key={c.id}>
            <Link to={`/${c.path}`} className="home__countries-btn">
              <div className="home__countries-btn-image">
                <img src={c.imagePath} alt={c.country} />
              </div>
              <span className="home__countries-btn-title">{c.country}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="home__section">{homeData?.subtitle_2}</h3>
      <img src="/world-map.gif" alt="World map" className="home__worldMap" />

      <p className="home__desc">{homeData?.description_2}</p>
      <p className="home__desc">{homeData?.description_3}</p>
      <p className="home__desc">{homeData?.description_4}</p>
      <p className="home__desc">{homeData?.description_5}</p>
      <p className="home__desc">{homeData?.description_6}</p>
      <p className="home__desc">{homeData?.description_7}</p>
      <p className="home__desc2">{homeData?.description_8}</p>
      <h3 className="home__section">{homeData?.subtitle_3}</h3>
    </div>
  )
}

export default Home