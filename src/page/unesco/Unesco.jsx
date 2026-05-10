import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import useAllAttractions from "../../hooks/useAllAttractions";
import './Unesco.scss';
import { Link } from "react-router";

const Unesco_Title = { ru: "Достопримечательности ЮНЕСКО", ua: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }
const unescoTableHead = {
  ru: { name: "Название", type: "Тип", location: "Местоположение", year: "Год", criteria: "Критерии", epoch: "Эпоха" },
  de: { name: "Name", type: "Typ", location: "Standort", year: "Jahr", criteria: "Kriterien", epoch: "Epoche" },
  ua: { name: "Назва", type: "Тип", location: "Місцезнаходження", year: "Рік", criteria: "Критерії", epoch: "Епоха" }
};
const Unesco_NoSeries = { ru: "Без серии", de: "Ohne Serie", ua: "Без серії" };
const Unesco_Description = {
  ru: "Список объектов Всемирного наследия ЮНЕСКО: достопримечательности, города и исторические памятники.",
  ua: "Список об’єктів Світової спадщини ЮНЕСКО: пам’ятки, міста та історичні місця.",
  de: "Liste der UNESCO-Welterbestätten: Sehenswürdigkeiten, Städte und historische Orte."
};

export const Unesco = () => {
  const { lang } = useSelector((state) => state.language);
  const { attractions } = useAllAttractions();

  const unescoData = attractions.filter(
    (item) => item.unesco_status?.included
  );

  const groupBySeries = (data) => {
    return data.reduce((acc, item) => {
      const key = item.unesco_status?.series || "no-series";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  };
  const grouped = groupBySeries(unescoData);
  const t = unescoTableHead[lang];

  // BreadCrumbs
  const crumbs = [
    {
      label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
      path: '/'
    },
    { label: Unesco_Title[lang] }
  ];

  return (
    <div className="unesco">

      <Helmet>
        <title>{Unesco_Title[lang]}</title>

        <meta name="description" content={Unesco_Description[lang]} />

        <meta property="og:title" content={Unesco_Title[lang]} />
        <meta property="og:description" content={Unesco_Description[lang]} />
      </Helmet>

      <BreadCrumbs crumbs={crumbs} />
      <h1 className="unesco__title">🌍 {Unesco_Title[lang]}</h1>
      {Object.entries(grouped).map(([series, items]) => (
        <div key={series} className="unesco__series">
          <h2 className="unesco__series-title">{series === "no-series" ? Unesco_NoSeries[lang] : `${series} (${items[0].unesco_status?.year})`}</h2>

          {/* карточки для мобильных */}
          <div className="unesco-cards">
            {items.map(item => (
              <div key={item.id} className="unesco-card">
                <div className="unesco-card-row"><strong>{t.name}:</strong> <a href={`/${item.countryPath}/${item.regionPath}/${item.districtPath}/${item.cityPath}/attractions/${item.path}`}>{item.name}</a></div>
                <div className="unesco-card-row"><strong>{t.type}:</strong> {item.unesco_status?.type}</div>
                <div className="unesco-card-row"><strong>{t.location}:</strong> {item.location}</div>
                {series === "no-series" && (
                  <div className="unesco-card-row"><strong>{t.year}:</strong> {item.unesco_status?.year}</div>
                )}
                <div className="unesco-card-row"><strong>{t.criteria}:</strong> {item.unesco_status?.criteria}</div>
                <div className="unesco-card-row"><strong>{t.epoch}:</strong> {item.unesco_status?.epoch}</div>
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
                  <td className="unesco__name">
                    <Link
                      to={`/${item.countryPath}/${item.regionPath}/${item.districtPath}/${item.cityPath}/attractions/${item.path}`}
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.unesco_status?.type}</td>
                  <td>{item.location}</td>
                  {series === "no-series" && <td>{item.unesco_status?.year}</td>}
                  <td>{item.unesco_status?.criteria}</td>
                  <td>{item.unesco_status?.epoch}</td>
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
