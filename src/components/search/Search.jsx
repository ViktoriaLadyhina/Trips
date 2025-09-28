import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value.trim()) {
      navigate(`/search?query=${encodeURIComponent(value.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Введите слово для поиска"
      />
      <button onClick={handleSearch}>Найти</button>
    </div>
  );
};

export default Search;