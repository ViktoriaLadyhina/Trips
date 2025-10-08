import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { datas as ruCountries } from "../../datas/ru/Country.js";
import { datas as uaCountries } from "../../datas/ua/Country.js";
import { datas as deCountries } from "../../datas/de/Country.js";

import { regionsSearch as ruRegions, citySearch as ruCities, attractionsSearch as ruAttractions } from "../../datas/ru/index.js";
import { regionsSearch as uaRegions, citySearch as uaCities, attractionsSearch as uaAttractions } from "../../datas/ua/index.js";
import { regionsSearch as deRegions, citySearch as deCities, attractionsSearch as deAttractions } from "../../datas/de/index.js";

import { searchAll } from "../../components/search/searchUtils.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './SearchPage.scss';

const SearchPage = () => {
  const { lang } = useSelector(state => state.language);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const [resultCountries, setResultCountries] = useState([]);
  const [resultRegions, setResultRegions] = useState([]);
  const [resultDistricts, setResultDistricts] = useState([]);
  const [resultCity, setResultCity] = useState([]);
  const [resultAttraction, setResultAttraction] = useState([]);

  const allCountries = lang === "ua" ? uaCountries : lang === "de" ? deCountries : ruCountries;
  const allRegions = lang === "ua" ? uaRegions : lang === "de" ? deRegions : ruRegions;
  const allCities = lang === "ua" ? uaCities : lang === "de" ? deCities : ruCities;
  const allAttractions = lang === "ua" ? uaAttractions : lang === "de" ? deAttractions : ruAttractions;

  useEffect(() => {
    if (!query) return;

    const {
      countriesResult,
      regionsResult,
      districtsResult,
      citiesResult,
      attractionsResult
    } = searchAll(query, lang, allCountries, allRegions, allCities, allAttractions);

    setResultCountries(countriesResult);
    setResultRegions(regionsResult);
    setResultDistricts(districtsResult);
    setResultCity(citiesResult);
    setResultAttraction(attractionsResult);
  }, [query, lang, allCountries, allRegions, allCities, allAttractions]);

  const searchResults = { ru: "Результаты поиска", ua: "Результати пошуку", de: "Suchergebnisse" };
  const searchByCountries = { ru: "Поиск по странам", ua: "Пошук за країнами", de: "Suche nach Ländern" };
  const searchByRegions = { ru: "Поиск по землям/областям", ua: "Пошук за землями/областями", de: "Suche nach Bundesländern/Regionen" };
  const searchByDistricts = { ru: "Поиск по краям/районам", ua: "Пошук за краями/районами", de: "Suche nach Kreisen/Bezirken" };
  const searchByCities = { ru: "Поиск по городам", ua: "Пошук за містами", de: "Suche nach Städten" };
  const searchByAttractions = { ru: "Поиск по достопримечательностям", ua: "Пошук за пам’ятками", de: "Suche nach Sehenswürdigkeiten" };

  const crumbs = [
    {
      label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
      path: '/'
    },
    { label: searchResults[lang] }
  ];

  return (
    <div className="search-results">
      <BreadCrumbs crumbs={crumbs} />
      <h2 className="search-results__title">{searchResults[lang]}: '{query}'</h2>

      <div>
        <span>{searchByCountries[lang]}</span>
        <ul>
          {resultCountries?.map((c) => (
            <li key={c.countryPath}>
              <Link to={`/${c.countryPath}`}>{c.country}</Link>
              <ul>
                {c.matches.map((m, j) => <li key={j}>{m}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <span>{searchByRegions[lang]}</span>
        <ul>
          {resultRegions?.map((r, i) => (
            <li key={i}>
              <Link to={`/${r.countryKey}/${r.regionPath}`}>
                {r.regionName}
              </Link>
              <ul>
                {r.matches.map((m, j) => <li key={j}>{m}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <span>{searchByDistricts[lang]}</span>
        <ul>
          {resultDistricts?.map((d, i) => (
            <li key={i}>
              <Link to={`/${d.countryKey}/${d.regionKey}/${d.districtPath}`}>
                {d.districtFullTitle || d.districtTitle}
              </Link>
              <ul>
                {d.matches.map((m, j) => <li key={j}>{m.text}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <span>{searchByCities[lang]}</span>
        <ul>
          {resultCity?.map(c => (
            <li key={c.cityPath}>
              <Link to={`/${c.countryKey}/${c.regionPath}/${c.district}/${c.cityPath}`}>
                {c.cityTitle}
              </Link>
              <ul>
                {c.matches.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        <span>{searchByAttractions[lang]}</span>
        <ul>
          {resultAttraction?.map(a => (
            <li key={a.attractionPath}>
              <Link to={`/${a.countryKey}/${a.regionPath}/${a.district}/${a.cityPath}/attractions/${a.attractionPath}`}>
                {a.attractionTitle}
              </Link>
              <ul>
                {a.matches.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;