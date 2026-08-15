import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import './Unesco.scss';
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getUnesco } from "../../api/api.js";
import SkeletonRenderer from "../../components/skeleton/SkeletonRenderer.jsx";

const Unesco_Title = { ru: "Достопримечательности ЮНЕСКО", uk: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }
const unescoTableHead = {
  ru: { name: "Название", type: "Тип", location: "Местоположение", year: "Год", criteria: "Критерии", epoch: "Эпоха" },
  de: { name: "Name", type: "Typ", location: "Standort", year: "Jahr", criteria: "Kriterien", epoch: "Epoche" },
  uk: { name: "Назва", type: "Тип", location: "Місцезнаходження", year: "Рік", criteria: "Критерії", epoch: "Епоха" }
};
const Unesco_NoSeries = { ru: "Без серии", de: "Ohne Serie", uk: "Без серії" };
const Unesco_Description = {
  ru: "Список объектов Всемирного наследия ЮНЕСКО: достопримечательности, города и исторические памятники.",
  uk: "Список об’єктів Світової спадщини ЮНЕСКО: пам’ятки, міста та історичні місця.",
  de: "Liste der UNESCO-Welterbestätten: Sehenswürdigkeiten, Städte und historische Orte."
};

const SkeletonList = [
  { type: "sidebar", props: { items: 10 } },
  {
    type: "content", props: {
      blocks: [
        { type: "title" },
        { type: "text", props: { hasTitle: true, lines: 6 } }
      ]
    }
  }
];


export const Unesco = () => {
  const { lang } = useSelector((state) => state.language);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unesco, setUnesco] = useState(null);

  useEffect(() => {

    setLoading(true);
    setError(null);

    getUnesco(lang)
      .then(data => {
        setUnesco(data.unescoAttractions);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

  }, [lang]);

  if (error) return <p>{error}</p>;

  if (loading) {
    return (
      <SkeletonRenderer blocks={SkeletonList} />
    );
  }

  const getLink = (data) =>
    data.type === 'attraction'
      ? `/${data.countryPath}/${data.regionPath}/${data.districtPath}/${data.cityPath}/attractions/${data.path}`
      : `/${data.countryPath}/routes/${data.path}`

      const getLocation = (item) =>
  item.cityName
    ? `${item.countryName}, ${item.cityName}`
    : item.countryName;

  const groupBySeries = (data) => {
    return data.reduce((acc, item) => {
      const key = item.series || "no-series";

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(item);

      return acc;
    }, {});
  };
  const grouped = groupBySeries(unesco);
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
          <h2 className="unesco__series-title">
            {series === "no-series"
              ? Unesco_NoSeries[lang]
              : `${series} (${items[0].year})`}
          </h2>

          {/* карточки для мобильных */}
          <div className="unesco-cards">
            {items.map(item => (
              <div key={item.id} className="unesco-card">
                <div className="unesco-card-row"><strong>{t.name}:</strong>{" "}<Link to={getLink(item)}>{item.name}</Link></div>
                <div className="unesco-card-row"><strong>{t.type}:</strong> {item.heritage_type}</div>
                <div className="unesco-card-row"><strong>{t.location}:</strong> {getLocation(item)}</div>
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
                  <td className="unesco__name"><Link to={getLink(item)}> {item.name}</Link></td>
                  <td>{item.heritage_type}</td>
                  <td>{getLocation(item)}</td>

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
