import { useSelector } from "react-redux";
import searchIndex from "../../components/search/index";
import './Unesco.scss';

const Unesco_Title = { ru: "Достопримечательности ЮНЕСКО", ua: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }
const unescoTableHead = {
  ru: { name: "Название", type: "Тип", location: "Город, страна", year: "Год", criteria: "Критерии", epoch: "Эпоха" },
  de: { name: "Name", type: "Typ", location: "Stadt, Land", year: "Jahr", criteria: "Kriterien", epoch: "Epoche" },
  ua: { name: "Назва", type: "Тип", location: "Місто, країна", year: "Рік", criteria: "Критерії", epoch: "Епоха" }
};
const Unesco_NoSeries = { ru: "Без серии", de: "Ohne Serie", ua: "Без серії" };

export const Unesco = () => {
  const { lang } = useSelector((state) => state.language);

  const getUnescoData = () => {
    const results = [];

    const countries = searchIndex[lang];
    for (const countryKey in countries) {
      if (countryKey === "country") continue; // пропускаем meta

      const countryData = countries[countryKey];
      for (const regionKey in countryData) {
        const region = countryData[regionKey];
        if (!region.attractions) continue;

        (region.attractions || []).forEach(attraction => {
          if (attraction.unesco_status?.included) {
            results.push({
              id: attraction.id,
              name: attraction.name || "Достопримечательность",
              type: attraction.unesco_status.type,
              location: attraction.location,
              country: countryKey === "germany" ? "Germany" : "Ukraine",
              year: attraction.unesco_status.year,
              criteria: attraction.unesco_status.criteria,
              epoch: attraction.unesco_status.epoch,
              series: attraction.unesco_status.series,
              url: `/${countryKey}/${regionKey}/${attraction.districtPath}/${attraction.cityPath}/attractions/${attraction.path}`
            });
          }
        });
      }
    }

    return results;
  }

  const unescoData = getUnescoData();

  const groupBySeries = (data) => {
    return data.reduce((acc, item) => {
      const key = item.series || "no-series";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  };
  const grouped = groupBySeries(unescoData);
  const t = unescoTableHead[lang];

  return (
 <div className="unesco">
  <h1 className="unesco__title">🌍 {Unesco_Title[lang]}</h1>
  {Object.entries(grouped).map(([series, items]) => (
    <div key={series} className="unesco__series">
      <h2 className="unesco__series-title">{series === "no-series" ? Unesco_NoSeries[lang] : `${series} (${items[0].year})`}</h2>

      {/* карточки для мобильных */}
      <div className="unesco-cards">
        {items.map(item => (
          <div key={item.id} className="unesco-card">
            <div className="unesco-card-row"><strong>{t.name}:</strong> <a href={item.url}>{item.name}</a></div>
            <div className="unesco-card-row"><strong>{t.type}:</strong> {item.type}</div>
            <div className="unesco-card-row"><strong>{t.location}:</strong> {item.location}</div>
            {series === "no-series" && (
              <div className="unesco-card-row"><strong>{t.year}:</strong> {item.year}</div>
            )}
            <div className="unesco-card-row"><strong>{t.criteria}:</strong> {item.criteria}</div>
            <div className="unesco-card-row"><strong>{t.epoch}:</strong> {item.epoch}</div>
          </div>
        ))}
      </div>

      {/* обычная таблица для больших экранов */}
      <table className="unesco__table">
        <thead>
          <tr>
            <th>{t.name}</th>
            <th>{t.type}</th>
            <th>{t.location}</th>
            {series === "no-series" && <th>{t.year}</th>}
            <th>{t.criteria}</th>
            <th>{t.epoch}</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="unesco__name"><a href={item.url}>{item.name}</a></td>
              <td>{item.type}</td>
              <td>{item.location}</td>
              {series === "no-series" && <td>{item.year}</td>}
              <td>{item.criteria}</td>
              <td>{item.epoch}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  ))}
</div>
  )
}

export default Unesco
