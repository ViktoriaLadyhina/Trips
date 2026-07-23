import { useState, useRef, useEffect } from 'react';
import './AttractionsFilters.scss';

// === Типы достопримечательностей ===
const attractionTypes = [
  { value: 'all', ru: 'Все типы', uk: 'Усі типи', de: 'Alle Typen' },
  { value: 'museum', ru: 'Музеи', uk: 'Музеї', de: 'Museen' },
  { value: 'cathedral', ru: 'Соборы, церкви и монастыри', uk: 'Собори, церкви та монастирі', de: 'Kathedralen, Kirchen und Klöster' },
  { value: 'palace_or_castle', ru: 'Дворцы и замки', uk: 'Палаци та замки', de: 'Schlösser und Burgen' },
  { value: 'amusement_park', ru: 'Парки развлечений', uk: 'Парки розваг', de: 'Freizeitparks' },
  { value: 'historical_building', ru: 'Исторические сооружения', uk: ' Історичні споруди', de: 'Historische Bauwerke' },
  { value: 'historical_area', ru: 'Исторические районы', uk: 'Історичні райони', de: 'Historische Viertel' },
  { value: 'landmark', ru: 'Знаковые места', uk: 'Знакові місця', de: 'Wahrzeichen' },
  { value: 'technical_structure', ru: 'Технические сооружения', uk: 'Технічні споруди', de: 'Technische Bauwerke' },
  { value: 'nature', ru: 'Природа', uk: 'Природа', de: 'Natur' },
  { value: 'monument_or_fountain', ru: 'Памятники и фонтаны', uk: 'Пам’ятники та фонтани', de: 'Denkmäler und Brunnen' },
  { value: 'square', ru: 'Площадь', uk: 'Площа', de: 'Platz' }
];

// === Особенности ===
const featureOptions = [
  { value: 'all', ru: 'Все особенности', uk: 'Усі особливості', de: 'Alle Merkmale' },
  { value: 'landmark', ru: 'Знаковые места', uk: 'Знакові місця', de: 'Wahrzeichen' },
  { value: 'viewpoint', ru: 'Смотровые площадки', uk: 'Оглядові майданчики', de: 'Aussichtspunkte' },
  { value: 'free_entry', ru: 'Бесплатный вход', uk: 'Безкоштовний вхід', de: 'Kostenloser Eintritt' },
];

// === Рейтинг ===
const topOptions = [
  { value: 'all', ru: 'Рейтинг: все', uk: 'Рейтинг: усі', de: 'Bewertung: alle' },
  { value: 'top', ru: 'Топовые', uk: 'Топові', de: 'Top' },
  { value: 'popular', ru: 'Популярные', uk: 'Популярні', de: 'Beliebt' },
  { value: 'local', ru: 'Локальные', uk: 'Локальні', de: 'Lokal' },
];

// === ЮНЕСКО ===
const unescoOptions = [
  { value: 'all', ru: 'ЮНЕСКО: все', uk: 'ЮНЕСКО: усі', de: 'UNESCO: alle' },
  { value: 'yes', ru: 'Только ЮНЕСКО', uk: 'Лише ЮНЕСКО', de: 'Nur UNESCO' },
  { value: 'no', ru: 'Без ЮНЕСКО', uk: 'Без ЮНЕСКО', de: 'Ohne UNESCO' },
];

// === Сортировка ===
const sortOptions = [
  { value: 'rating', ru: 'Сортировка по рейтингу', uk: 'Сортування за рейтингом', de: 'Sortierung nach Bewertung' },
  { value: 'name-asc', ru: 'По названию A–Z', uk: 'За назвою A–Z', de: 'Nach Name A–Z' },
  { value: 'name-desc', ru: 'По названию Z–A', uk: 'За назвою Z–A', de: 'Nach Name Z–A' }
];

// === Статус сохранности ===
const statusOptions = [
  { value: 'active', ru: 'Сохранившиеся', uk: 'Збережені', de: 'Erhalten' },
  { value: 'partial', ru: 'Руины', uk: 'Руїни', de: 'Ruinen' },
  { value: 'lost', ru: 'Утраченные', uk: 'Втрачені', de: 'Verloren' },
];

const AttractionsFilters = ({ lang, filters, setFilters }) => {

  const [statusOpen, setStatusOpen] = useState(false);
  const statusRef = useRef(null);

  const [featureOpen, setFeatureOpen] = useState(false);
  const featureRef = useRef(null);

  const handleChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Закрытие выпадающего списка статуса
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target)
      ) {
        setStatusOpen(false);
      }

      if (
        featureRef.current &&
        !featureRef.current.contains(event.target)
      ) {
        setFeatureOpen(false);
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

        {/* Тип */}
        <div className="select-wrapper">
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

        {/* Особенности */}
        <div className="custom-select" ref={featureRef}>

          <div
            className="custom-select__control"
            onClick={() => setFeatureOpen(prev => !prev)}
          >
            <span>
              {lang === 'ru' && 'Особенности'}
              {lang === 'uk' && 'Особливості'}
              {lang === 'de' && 'Merkmale'}
            </span>

            <span
              className={`custom-select__arrow ${featureOpen ? 'open' : ''
                }`}
            />
          </div>

          {featureOpen && (
            <div className="custom-select__dropdown">

              {featureOptions.map(opt => (
                <label
                  key={opt.value}
                  className="custom-select__option"
                >
                  <input
                    type="checkbox"
                    checked={filters.feature.includes(opt.value)}
                    onChange={() => {
                      setFilters(prev => {

                        const current = prev.feature;

                        // Нажали «Все особенности»
                        if (opt.value === 'all') {
                          return {
                            ...prev,
                            feature: ['all']
                          };
                        }

                        let updated = current.filter(
                          feature => feature !== 'all'
                        );

                        if (updated.includes(opt.value)) {
                          updated = updated.filter(
                            feature => feature !== opt.value
                          );
                        } else {
                          updated = [...updated, opt.value];
                        }

                        if (updated.length === 0) {
                          updated = ['all'];
                        }

                        return {
                          ...prev,
                          feature: updated
                        };
                      });
                    }}
                  />

                  {opt[lang]}
                </label>
              ))}

            </div>
          )}

        </div>

        {/* Рейтинг */}
        <div className="select-wrapper">
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

        {/* ЮНЕСКО */}
        <div className="select-wrapper">
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

        {/* Сортировка */}
        <div className="select-wrapper">
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

        {/* Статус сохранности */}
        <div className="custom-select" ref={statusRef}>

          <div
            className="custom-select__control"
            onClick={() => setStatusOpen(prev => !prev)}
          >
            <span>
              {lang === 'ru' && 'Статус'}
              {lang === 'uk' && 'Статус'}
              {lang === 'de' && 'Status'}
            </span>

            <span
              className={`custom-select__arrow ${statusOpen ? 'open' : ''}`}
            />
          </div>

          {statusOpen && (
            <div className="custom-select__dropdown">

              {statusOptions.map(opt => (
                <label
                  key={opt.value}
                  className="custom-select__option"
                >
                  <input
                    type="checkbox"
                    checked={filters.status.includes(opt.value)}
                    onChange={() => {
                      setFilters(prev => {
                        const current = prev.status;

                        if (current.includes(opt.value)) {

                          // Не даём убрать последний статус
                          if (current.length === 1) {
                            return prev;
                          }

                          return {
                            ...prev,
                            status: current.filter(
                              status => status !== opt.value
                            )
                          };
                        }

                        return {
                          ...prev,
                          status: [
                            ...current,
                            opt.value
                          ]
                        };
                      });
                    }}
                  />

                  {opt[lang]}
                </label>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AttractionsFilters;