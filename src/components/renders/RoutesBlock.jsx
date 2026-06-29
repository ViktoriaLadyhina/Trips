import { Link } from "react-router";

export const RoutesBlock = ({ routes, lang, countryPath }) => {
  if (!routes) return <div>loading routes...</div>;
  if (!routes.length) return null;

  return (
    <div className="country__routes">

      <h2 className="country__routes-title">
        {lang === "ru"
          ? "Маршруты"
          : lang === "de"
          ? "Routen"
          : "Маршрути"}
      </h2>

      <table className="country__routes-table">
        <thead>
          <tr>
            <th>{lang === "ru" ? "Название" : lang === "de" ? "Name" : "Назва"}</th>
            <th>{lang === "ru" ? "Короткое описание" : lang === "de" ? "Kurze Beschreibung" : "Короткий опис"}</th>
            <th>{lang === "ru" ? "Длина маршрута" : lang === "de" ? "Routenlänge" : "Довжина маршруту"}</th>
          </tr>
        </thead>

        <tbody>
          {routes.map(r => (
            <tr key={r.id}>
              <td>
                <Link to={`/${countryPath}/routes/${r.path}`}>
                  {r.translations?.[lang]?.name}
                </Link>
              </td>
              <td>{r.translations?.[lang]?.short_description}</td>
              <td>{r.translations?.[lang]?.routeLength}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="country__routes-cards">
        {routes.map(r => (
          <div key={r.id} className="country__routes-card">

            <div className="country__routes-row">
              <strong>
                {lang === "ru"
                  ? "Название:"
                  : lang === "de"
                  ? "Name:"
                  : "Назва:"}
              </strong>{" "}
              <Link to={`/${countryPath}/routes/${r.path}`}>
                {r.translations?.[lang]?.name}
              </Link>
            </div>

            <div className="country__routes-row">
              {r.translations?.[lang]?.short_description}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};