import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchStatic } from "../../components/search/searchUtils.js";
import { getSearchIndex } from "../../components/search/searchService.js";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import './SearchPage.scss';
import { Helmet } from "react-helmet-async";
import { buildUrl } from "../../components/search/buildUrl.js";
import { getMysqlSearch } from "../../api/api.js";

const searchResultsText = { ru: "Результаты поиска", uk: "Результати пошуку", de: "Suchergebnisse" };
const noResultsText = { ru: "По вашему запросу ничего не найдено.", uk: "За вашим запитом нічого не знайдено.", de: "Für Ihre Suche wurden keine Ergebnisse gefunden."};

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const [flatIndex, setFlatIndex] = useState([]);

useEffect(() => {
  let alive = true;

  const load = async () => {
    const [staticIndex, mysqlData] = await Promise.all([
      getSearchIndex(lang),
      getMysqlSearch(lang)
    ]);

    if (!alive) return;

    const mysqlIndex = mysqlData.results || [];

    setFlatIndex([
      ...staticIndex,
      ...mysqlIndex
    ]);
  };

  load();

  return () => {
    alive = false;
  };
}, [lang]);

  const results = query ? searchStatic(query, flatIndex) : [];

  useEffect(() => {
    document.title = searchResultsText[lang];
  }, [lang]);

  const crumbs = [
    {
      label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
      path: '/'
    },
    { label: searchResultsText[lang] }
  ];

  return (
    <div className="search-results">

      <Helmet>
        <title>{searchResultsText[lang]}</title>
      </Helmet>

      <BreadCrumbs crumbs={crumbs} />

      <h2 className="search-results__title">
        {searchResultsText[lang]}: '{query}'
      </h2>

      {results.length === 0 ? (
        <p className="search-results__empty">
          {noResultsText[lang]}
        </p>
      ) : (
        <ul className="search-results__list">
          {results.map((item, i) => {
            const title =
              item.name ||
              item.searchName ||
              item.title;

            return (
              <li key={i} className="search-results__item">
                <Link to={buildUrl(item)} className="search-results__link">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;