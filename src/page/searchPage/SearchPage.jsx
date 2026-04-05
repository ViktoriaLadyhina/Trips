import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import searchIndex from "../../components/search/index";
import { buildSearchIndex, searchStatic } from "../../components/search/searchUtils";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './SearchPage.scss';

const searchResultsText = {
  ru: "Результаты поиска",
  ua: "Результати пошуку",
  de: "Suchergebnisse"
};

const noResultsText = { ru: "По вашему запросу ничего не найдено.", ua: "За вашим запитом нічого не знайдено.", de: "Für Ihre Suche wurden keine Ergebnisse gefunden." };

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const flatIndex = buildSearchIndex(searchIndex, lang);
  const results = query
    ? searchStatic(query, flatIndex) 
    : [];


  useEffect(() => {
    document.title = searchResultsText[lang];
  }, [lang]);

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: searchResultsText[lang] }
  ];

  // console.log(flatIndex);


  return (
    <div className="search-results">
      <BreadCrumbs crumbs={crumbs} />
      <h2 className="search-results__title">
        {searchResultsText[lang]}: '{query}'
      </h2>

      <div className="search-results">
        {results.length === 0 ? (
          <p className="search-results__empty">{noResultsText[lang]}</p>
        ) : (
          <ul className="search-results__list">
            {results.map((item, i) => {
              const title = item.translations?.[lang]?.meta?.title || item.meta?.title || item.name || item.searchName || item.title;
              return (
                <li key={i} className="search-results__item">
                  <Link to={item.url || "#"} className="search-results__link">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;