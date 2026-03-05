import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { buildStaticSearchIndex, searchStatic } from "../../components/search/searchUtils";
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



const index = buildStaticSearchIndex(lang);
const results = query ? searchStatic(query, lang, index) : [];

  // обновляем title
  useEffect(() => {
    document.title = searchResultsText[lang];
  }, [lang]);

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: searchResultsText[lang] }
  ];

  return (
    <div className="search-results">
      <BreadCrumbs crumbs={crumbs} />
      <h2 className="search-results__title">
        {searchResultsText[lang]}: '{query}'
      </h2>

      {results.length === 0 ? (
 <p className="search-results__empty">{noResultsText[lang]}</p>
      ) : (
        <ul className="search-results__list">
          {results.map((item, i) => (
            <li key={i} className="search-results__item">
              <Link to={item.url || "#"} className="search-results__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;