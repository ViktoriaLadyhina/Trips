import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Search.scss'
import { buildSearchIndex } from "./searchUtils";

const Search = ({ lang }) => {
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(null); // индекс для поиска
  const navigate = useNavigate();

  // Загружаем индекс при первом рендере
useEffect(() => {
  buildSearchIndex(lang).then(idx => setIndex(idx));
}, [lang]);

const handleSearch = () => {
  if (!value.trim()) return;
  navigate(`/search?query=${encodeURIComponent(value.trim())}`);
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const enterSearchWord = {ru: "Введите слово для поиска", ua: "Введіть слово для пошуку", de: "Geben Sie ein Wort für die Suche ein"};
  const searchButton = { ru: "Найти", ua: "Знайти", de: "Suchen" };

  return (
    <div className="search">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={enterSearchWord[lang] || enterSearchWord['ru']}
      />
      <button onClick={handleSearch}>{searchButton[lang]}</button>
    </div>
  );
};

export default Search;