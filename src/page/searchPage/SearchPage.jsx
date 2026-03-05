import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { searchStructure } from "../../components/search/searchUtils"; // твоя функция поиска
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './SearchPage.scss';

const searchResultsText = { ru: "Результаты поиска", ua: "Результати пошуку", de: "Suchergebnisse" };
const noResultsText = { ru: "По вашему запросу ничего не найдено.", ua: "За вашим запитом нічого не знайдено.", de: "Für Ihre Suche wurden keine Ergebnisse gefunden." };

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const [results, setResults] = useState([]);

  // --- 1. Выполняем поиск при изменении query или lang ---
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const res = searchStructure({ lang, query });
    // Преобразуем результат в формат { title, url } для списка
const formatted = res.map(r => ({
  title: r.item.bold || r.item.text || "—",
  url: r.item.url || "#"
}));
setResults(formatted);

    document.title = `${searchResultsText[lang]}: "${query}"`;
  }, [query, lang]);

  const crumbs = [
    { label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна', path: '/' },
    { label: searchResultsText[lang] }
  ];

    return (
    <div className="search-results">
      <BreadCrumbs crumbs={crumbs} />
      <h2 className="search-results__title">{searchResultsText[lang]}: '{query}'</h2>

      {results.length === 0 ? (
        <p className="search-results__empty">{noResultsText[lang]}</p>
      ) : (
        <ul>
          {results.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;