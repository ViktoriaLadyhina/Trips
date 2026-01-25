import './AttractionsFilters.scss';

// === Типы достопримечательностей ===
const attractionTypes = [
  { value: 'all', ru: 'Все типы', ua: 'Усі типи', de: 'Alle Typen' },
  { value: 'museum', ru: 'Музеи', ua: 'Музеї', de: 'Museen' },
  { value: 'cathedral', ru: 'Соборы и церкви', ua: 'Собори та церкви', de: 'Kathedralen und Kirchen' },
  { value: 'palace_or_castle', ru: 'Дворцы и замки', ua: 'Палаци та замки', de: 'Schlösser und Burgen' },
  { value: 'amusement_park', ru: 'Парки развлечений', ua: 'Парки розваг', de: 'Freizeitparks' },
  { value: 'historical_building', ru: 'Исторические здания', ua: 'Ісоричні будівлі', de: 'Historische Gebäude' },
  { value: 'technical_structure', ru: 'Технические сооружения', ua: 'Технічні споруди', de: 'Technische Bauwerke' },
  { value: 'nature', ru: 'Природа', ua: 'Природа', de: 'Natur' },
  { value: 'monument_or_fountain', ru: 'Памятники и фонтаны', ua: 'Пам’ятники та фонтани', de: 'Denkmäler und Brunnen' },
  { value: 'square', ru: 'Площадь', ua: 'Площа', de: 'Platz' },
];

// === ЮНЕСКО фильтр ===
const unescoOptions = [
  { value: 'all', ru: 'Все достопримечательности', ua: 'Усі пам’ятки', de: 'Alle Sehenswürdigkeiten' },
  { value: 'yes', ru: 'Только ЮНЕСКО', ua: 'Лише ЮНЕСКО', de: 'Nur UNESCO' },
  { value: 'no', ru: 'Без ЮНЕСКО', ua: 'Без ЮНЕСКО', de: 'Ohne UNESCO' },
];

// === Сортировка ===
const sortOptions = [
  { value: 'name-asc', ru: 'По названию A–Z', ua: 'За назвою A–Z', de: 'Nach Name A–Z' },
  { value: 'name-desc', ru: 'По названию Z–A', ua: 'За назвою Z–A', de: 'Nach Name Z–A' }
];

const AttractionsFilters = ({ lang, filters, setFilters }) => {

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="attractions-filters">
      {/* Типы достопримечательностей */}
      <select
        value={filters.type}
        onChange={e => handleChange('type', e.target.value)}
      >
        {attractionTypes.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt[lang]}
          </option>
        ))}
      </select>

      {/* ЮНЕСКО */}
      <select
        value={filters.unesco}
        onChange={e => handleChange('unesco', e.target.value)}
      >
        {unescoOptions.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt[lang]}
          </option>
        ))}
      </select>

      {/* Сортировка */}
      <select
        value={filters.sort}
        onChange={e => handleChange('sort', e.target.value)}
      >
        {sortOptions.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AttractionsFilters;