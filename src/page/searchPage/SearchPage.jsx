import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { buildSearchIndex, searchAll } from "../../components/search/searchUtils";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './SearchPage.scss';

const searchResults = { ru: "Результаты поиска", ua: "Результати пошуку", de: "Suchergebnisse" };

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const [index, setIndex] = useState(null);
  const [results, setResults] = useState([]);

  // Загружаем индекс
  useEffect(() => {
    buildSearchIndex(lang).then(idx => {
      setIndex(idx);
    });
  }, [lang]);

  // Поиск
  useEffect(() => {
    if (!query || !index) return;

    const res = searchAll(query, lang, index);
    setResults(res);
  }, [query, lang, index]);

  // Обновляем title
  useEffect(() => {
    document.title = searchResults[lang];
  }, [lang]);

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: searchResults[lang] }
  ];

  return (
    <div className="search-results">
      <BreadCrumbs crumbs={crumbs} />
      <h2 className="search-results__title">
        {searchResults[lang]}: '{query}'
      </h2>

      {results.length === 0 ? (
        <p className="search-results__empty">
          {lang === "ru" ? "По вашему запросу ничего не найдено." :
            lang === "ua" ? "За вашим запитом нічого не знайдено." :
              "Für Ihre Suche wurden keine Ergebnisse gefunden."}
        </p>
      ) : (
        <ul>
          {results.map((item, i) => (
            <li key={i}>
              <Link to={item.url || "#"}>{item.title}</Link>
              {item.matches?.length > 0 && (
                <ul>
                  {item.matches.map((m, j) => <li key={j}>{m}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;