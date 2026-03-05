import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.scss';

const enterSearchWord = {
  ru: "Введите слово для поиска",
  ua: "Введіть слово для пошуку",
  de: "Geben Sie ein Wort für die Suche ein"
};

const searchButton = {
  ru: "Найти",
  ua: "Знайти",
  de: "Suchen"
};

const Search = ({ lang }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();


  const handleSearch = () => {
    if (!value.trim()) return;
    navigate(`/search?query=${encodeURIComponent(value.trim())}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

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