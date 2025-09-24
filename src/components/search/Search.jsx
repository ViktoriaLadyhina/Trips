import { Link } from "react-router"; // или react-router-dom
import { useSearchRegions } from "../../hooks/useSearchRegions";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { search } = useSearchRegions();

  function handleSearch() {
    setResults(search(query));
  }

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Найти</button>

      <ul>
        {results.map((r, i) => (
          <li key={i}>
            <Link to={r.link}>
              {r.country && `${r.country} → `}
              {r.region && `${r.region} → `}
              {r.city && `${r.city}: `}
            </Link>
            {r.value}
          </li>
        ))}
      </ul>
    </div>
  );
}