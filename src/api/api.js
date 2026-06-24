const BASE_URL = import.meta.env.VITE_API_URL;

console.log("API FILE LOADED");
console.log(import.meta.env.VITE_API_URL);

const apiFetch = async (url, options = {}) => {
  console.log("🔥 apiFetch ENTER:", url);

  const response = await fetch(url, options);

  console.log("🔥 AFTER FETCH:", url);

  if (!response.ok) {
    console.log("❌ BAD STATUS:", response.status);
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  console.log("🔥 RESPONSE OK");

  return data;
};

export const getCountries = (lang = "ru") =>
  apiFetch(`${BASE_URL}/api/countries?lang=${lang}`);

export const getCountry = (path, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/country/${path}?lang=${lang}`);

export const getRegion = (path, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/region/${path}?lang=${lang}`);

export const getDistrict = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/district/${path}?lang=${lang}`, signal);

export const getMapCities = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/map/cities/${path}?lang=${lang}`, signal);

export const getSubregions = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/subregions/${path}?lang=${lang}`, signal);

export const getSubregionCities = (subregionId, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/subregionCities/${subregionId}?lang=${lang}`);