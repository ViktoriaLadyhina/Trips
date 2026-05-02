import { useState, useRef, useEffect } from 'react';
import './AttractionsFilters.scss';

// === Типы достопримечательностей ===
const attractionTypes = [
  { value: 'all', ru: 'Все типы', ua: 'Усі типи', de: 'Alle Typen' },
  { value: 'museum', ru: 'Музеи', ua: 'Музеї', de: 'Museen' },
  { value: 'cathedral', ru: 'Соборы, церкви и монастыри', ua: 'Собори, церкви та монастирі', de: 'Kathedralen, Kirchen und Klöster' },
  { value: 'palace_or_castle', ru: 'Дворцы и замки', ua: 'Палаци та замки', de: 'Schlösser und Burgen' },
  { value: 'amusement_park', ru: 'Парки развлечений', ua: 'Парки розваг', de: 'Freizeitparks' },
  { value: 'historical_building', ru: 'Исторические сооружения', ua: ' Історичні споруди', de: 'Historische Bauwerke' },
  { value: 'historical_area', ru: 'Исторические районы', ua: 'Історичні райони', de: 'Historische Viertel' },
  { value: 'technical_structure', ru: 'Технические сооружения', ua: 'Технічні споруди', de: 'Technische Bauwerke' },
  { value: 'nature', ru: 'Природа', ua: 'Природа', de: 'Natur' },
  { value: 'monument_or_fountain', ru: 'Памятники и фонтаны', ua: 'Пам’ятники та фонтани', de: 'Denkmäler und Brunnen' },
  { value: 'square', ru: 'Площадь', ua: 'Площа', de: 'Platz' },
];

// === Рейтинг фильтр ===
const topOptions = [
  { value: 'all', ru: 'Рейтинг: все', ua: 'Рейтинг: усі', de: 'Bewertung: alle' },
  { value: 'top', ru: 'Топовые', ua: 'Топові', de: 'Top' },
  { value: 'popular', ru: 'Популярные', ua: 'Популярні', de: 'Beliebt' },
  { value: 'local', ru: 'Локальные', ua: 'Локальні', de: 'Lokal' },
];

// === ЮНЕСКО фильтр ===
const unescoOptions = [
  { value: 'all', ru: 'ЮНЕСКО: все', ua: 'ЮНЕСКО: усі', de: 'UNESCO: all' },
  { value: 'yes', ru: 'Только ЮНЕСКО', ua: 'Лише ЮНЕСКО', de: 'Nur UNESCO' },
  { value: 'no', ru: 'Без ЮНЕСКО', ua: 'Без ЮНЕСКО', de: 'Ohne UNESCO' },
];

// === Сортировка ===
const sortOptions = [
  { value: 'rating', ru: 'Сортировка по рейтингу', ua: ' Сортування за рейтингом', de: ' Sortierung nach Bewertung' },
  { value: 'name-asc', ru: 'По названию A–Z', ua: 'За назвою A–Z', de: 'Nach Name A–Z' },
  { value: 'name-desc', ru: 'По названию Z–A', ua: 'За назвою Z–A', de: 'Nach Name Z–A' }
];

// статус сохранности
const statusOptions = [
  { value: 'active', ru: 'Сохранившиеся', ua: 'Збережені', de: 'Erhalten' },
  { value: 'partial', ru: 'Руины', ua: 'Руїни', de: 'Ruinen' },
  { value: 'lost', ru: 'Утраченные', ua: 'Втрачені', de: 'Verloren' },
];

const AttractionsFilters = ({ lang, filters, setFilters }) => {

  const [statusOpen, setStatusOpen] = useState(false);
  const statusRef = useRef(null);

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        setStatusOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="attractions-filters">

        <div className="select-wrapper">
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
        </div>

        <div className="select-wrapper">
          {/* Рейтинг */}
          <select
            value={filters.rating}
            onChange={e => handleChange('rating', e.target.value)}
          >
            {topOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt[lang]}
              </option>
            ))}
          </select>
        </div>

        <div className="select-wrapper">
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
        </div>

        <div className="select-wrapper">

          {/* Сортировка */}
          <select
            value={filters.sort}
            onChange={e => handleChange('sort', e.target.value)}
          >
            {sortOptions.map(opt => (
              <option key={opt.value || 'label'} value={opt.value} disabled={opt.disabled}>
                {opt[lang]}
              </option>
            ))}
          </select>
        </div>


        {/* Статус сохранности */}
        <div className="custom-select" ref={statusRef}>
          <div
            className="custom-select__control"
            onClick={() => setStatusOpen(prev => !prev)}
          >
            <span>
              {lang === 'ru' && 'Статус'}
              {lang === 'ua' && 'Статус'}
              {lang === 'de' && 'Status'}
            </span>

            <span className={`custom-select__arrow ${statusOpen ? 'open' : ''}`} />

          </div>

          {statusOpen && (
            <div className="custom-select__dropdown">
              {statusOptions.map(opt => (
                <label key={opt.value} className="custom-select__option">
                  <input
                    type="checkbox"
                    checked={filters.status.includes(opt.value)}
                    onChange={() => {
                      const current = filters.status;

                      let updated;

                      if (current.includes(opt.value)) {
                        // если пытаемся убрать последний — не даём
                        if (current.length === 1) return;

                        updated = current.filter(s => s !== opt.value);
                      } else {
                        updated = [...current, opt.value];
                      }

                      setFilters({ ...filters, status: updated });
                    }}
                  />
                  {opt[lang]}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div >
  )
};

export default AttractionsFilters;