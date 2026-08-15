const BASE_URL = import.meta.env.VITE_API_URL;

const apiFetch = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
};

export const getCountries = (lang = "ru") =>
  apiFetch(`${BASE_URL}/api/countries?lang=${lang}`);

export const getCountry = (path, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/country/${path}?lang=${lang}`);

export const getRegion = (path, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/region/${path}?lang=${lang}`);

export const getDistrict = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/district/${path}?lang=${lang}`, { signal });

export const getMapCities = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/map/cities/${path}?lang=${lang}`, { signal });

export const getSubregions = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/subregions/${path}?lang=${lang}`, { signal });

export const getSubregionCities = (subregionId, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/subregionCities/${subregionId}?lang=${lang}`);

export const getMysqlSearch = (lang = "ru") =>
  apiFetch(`${BASE_URL}/api/search/mysql?lang=${lang}`);

export const getCity = (cityPath, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/city/${cityPath}?lang=${lang}`);

export const getAttractionsList = (entityPath, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/attractions/${entityPath}?lang=${lang}`);

export const getAllAttractions = (lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/attractions?lang=${lang}`, { signal });

export const getAttraction = ( attrPath, lang = "ru") =>
    apiFetch(`${BASE_URL}/api/attraction/${attrPath}?lang=${lang}`);

export const getRoute = (routePath, lang = "ru") =>
    apiFetch(`${BASE_URL}/api/route/${routePath}?lang=${lang}`);

export const getUnesco = (lang = "ru") =>
    apiFetch(`${BASE_URL}/api/unesco?lang=${lang}`);