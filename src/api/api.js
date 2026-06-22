const BASE_URL = import.meta.env.VITE_API_URL;

const apiFetch = async (url, signal) => {
  const response = await fetch(url, signal ? { signal } : {});

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
  apiFetch(`${BASE_URL}/api/district/${path}?lang=${lang}`, signal);

export const getMapCities = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/map/cities/${path}?lang=${lang}`, signal);

export const getSubregions = (path, lang = "ru", signal) =>
  apiFetch(`${BASE_URL}/api/subregions/${path}?lang=${lang}`, signal);

export const getSubregionCities = (subregionId, lang = "ru") =>
  apiFetch(`${BASE_URL}/api/subregionCities/${subregionId}?lang=${lang}`);