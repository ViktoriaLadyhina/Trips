import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageData } from "../../store/features/languageSlice";
import Loader from "../../components/loader/Loader";
import ErrorBox from "../../components/error/ErrorBox";
import './Home.scss'
import { Link } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const { lang, status, error, homeData, countries } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(fetchPageData({ lang, page: "Home" }));
    dispatch(fetchPageData({ lang, page: "Country" }));
  }, [lang, dispatch]);

  useEffect(() => {
    if (status === "failed") console.error(error);
  }, [status, error]);

  return (
    <div className="home">
      {status === "loading" && <Loader />}
      {status === "failed" && <ErrorBox />}

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
      <img src="/world-map.gif" alt="World map" className="home__worldMap"/>
      
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