import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { datas as ruCountries } from "../../datas/ru/Country.js";
import { datas as uaCountries } from "../../datas/ua/Country.js";
import { datas as deCountries } from "../../datas/de/Country.js";

import { regionsSearch as ruRegions, citySearch as ruCities, attractionsSearch as ruAttractions } from "../../datas/ru/index.js";
import { regionsSearch as uaRegions, citySearch as uaCities, attractionsSearch as uaAttractions } from "../../datas/ua/index.js";
import { regionsSearch as deRegions, citySearch as deCities, attractionsSearch as deAttractions } from "../../datas/de/index.js";

import {
    normalize,
    deepSearch,
    getCountryInfoByPath,
    getRegionInfoByPath,
    getDistrictInfoByPath,
    getCityInfoByPath,
    getAttractionsInfoByPath
} from "../../components/search/searchUtils.js";

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import './SearchPage.scss'

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

        const normalizedValue = normalize(query);

        // 1️⃣ страны
        const resultsCountriesRaw = deepSearch(allCountries, obj =>
            typeof obj === "string" && normalize(obj).includes(normalizedValue)
        );
        const countryGroups = {};
        resultsCountriesRaw.forEach(r => {
            const countryInfo = getCountryInfoByPath(r.path, allCountries);
            if (!countryInfo) return;
            const key = countryInfo.countryPath;
            if (!countryGroups[key]) countryGroups[key] = { ...countryInfo, matches: [] };
            if (r.value) countryGroups[key].matches.push(r.value);
        });
        setResultCountries(Object.values(countryGroups));

        // 2️⃣ регионы
        const resultsRegionsRaw = deepSearch(allRegions, obj =>
            typeof obj === "string" && normalize(obj).includes(normalizedValue)
        );
        const regionGroups = {};
        resultsRegionsRaw.forEach(r => {
            const regionInfo = getRegionInfoByPath(r.path, allRegions);
            if (!regionInfo) return;
            const key = `${regionInfo.countryKey}|${regionInfo.regionPath}`;
            if (!regionGroups[key]) regionGroups[key] = { ...regionInfo, matches: [] };
            if (r.value) regionGroups[key].matches.push(r.value);
        });
        setResultRegions(Object.values(regionGroups));

        // 3️⃣ районы
        const resultsDistrictsRaw = resultsRegionsRaw
            .map(r => getDistrictInfoByPath(r.path, allRegions))
            .filter(d => d && d.value);
        const districtGroups = {};
        resultsDistrictsRaw.forEach(d => {
            const key = `${d.countryKey}|${d.regionKey}|${d.districtPath}`;
            if (!districtGroups[key]) districtGroups[key] = { ...d, matches: [] };
            districtGroups[key].matches.push(d.value);
        });
        setResultDistricts(Object.values(districtGroups));

        // 4️⃣ города
        const resultsCitiesRaw = deepSearch(allCities, obj =>
            typeof obj === "string" && normalize(obj).includes(normalizedValue)
        );
        const cityGroups = {};
        resultsCitiesRaw.forEach(r => {
            const cityInfo = getCityInfoByPath(r.path, allCities, r.value);
            if (!cityInfo) return;
            const key = `${cityInfo.countryKey}|${cityInfo.regionKey}|${cityInfo.district}|${cityInfo.cityPath}`;
            if (!cityGroups[key]) cityGroups[key] = { ...cityInfo, matches: [] };
            if (r.value) cityGroups[key].matches.push(r.value);
        });
        setResultCity(Object.values(cityGroups));

        // 5️⃣ достопримечательности
        const resultsAttractionsRaw = deepSearch(allAttractions, obj =>
            typeof obj === "string" && normalize(obj).includes(normalizedValue)
        );
        const attractionGroups = {};
        resultsAttractionsRaw.forEach(r => {
            const attractionInfo = getAttractionsInfoByPath(r.path, allAttractions, r.value);
            if (!attractionInfo) return;
            const key = attractionInfo.attractionPath;
            if (!attractionGroups[key]) attractionGroups[key] = { ...attractionInfo, matches: [] };
            if (r.value) attractionGroups[key].matches.push(r.value);
        });
        setResultAttraction(Object.values(attractionGroups));
    }, [query, lang]);

        const searchResults = {
        ru: "Результаты поиска",
        ua: "Результати пошуку",
        de: "Suchergebnisse"
    }

        // BreadCrumbs
    const crumbs = [
        {
            label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
            path: '/'
        },
        { label: searchResults[lang]}
    ];

    return (

        <div className="search-results">
            <BreadCrumbs crumbs={crumbs} />
            <h2 className="search-results__title">{searchResults[lang]}: '{query}'</h2>

            <div>
                <span>Поиск по странам</span>
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

                <span>Поиск по землям/областям</span>
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

                <span>Поиск по краям/районам</span>
                <ul>
                    {resultDistricts?.map((d, i) => (
                        <li key={i}>
                            <Link to={`/${d.countryKey}/${d.regionKey}/${d.districtPath}`}>
                                {d.districtFullTitle || d.districtTitle}
                            </Link>
                            <ul>
                                {d.matches.map((m, j) => <li key={j}>{m}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>

                <span>Поиск по городам</span>
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

                <span>Поиск по достопримечательностям</span>
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