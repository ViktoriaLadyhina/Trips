import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getSearchIndex } from "../../components/search/searchService.js";
import { searchStatic } from "../../components/search/searchStatic.js";

import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs.jsx";
import { Helmet } from "react-helmet-async";
import { buildUrl } from "../../components/search/buildUrl.js";
import { getMysqlSearch } from "../../api/api.js";

import "./SearchPage.scss";

const searchResultsText = { ru: "Результаты поиска", uk: "Результати пошуку", de: "Suchergebnisse" };
const noResultsText = { ru: "По вашему запросу ничего не найдено.", uk: "За вашим запитом нічого не знайдено.", de: "Für Ihre Suche wurden keine Ergebnisse gefunden." };

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();

  const query =
    new URLSearchParams(location.search).get("query") || "";

  const [flatIndex, setFlatIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  function mergeSearchResults(staticIndex, mysqlIndex) {
    const map = new Map();

    // static — главный источник
    for (const item of staticIndex) {
      map.set(item.path, item);
    }

    // mysql добавляем только если нет static
    for (const item of mysqlIndex) {
      if (!map.has(item.path)) {
        map.set(item.id, item);
      }
    }

    return Array.from(map.values());
  }

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        setLoading(true);

        const [staticIndex, mysqlData] = await Promise.all([
          getSearchIndex(lang),
          getMysqlSearch(lang)
        ]);

        console.log("STATIC SAMPLE", staticIndex?.[0]);
        console.log("MYSQL SAMPLE", mysqlData?.results?.[0]);

        if (!alive) return;

        const mysqlIndex = mysqlData?.results || [];

        const merged = mergeSearchResults(staticIndex, mysqlIndex);

        setFlatIndex(merged);

      } catch (error) {
        console.error(error);
      } finally {
        if (alive) setLoading(false);
      }
    };

    load();

    return () => {
      alive = false;
    };
  }, [lang]);

  const results = useMemo(() => {
    if (!query || !flatIndex.length) return [];
    return searchStatic(query, flatIndex);
  }, [query, flatIndex]);

  if (loading) { return <p>Loading...</p> }


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