// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';
import nrwAttractions from './germany/nrw-attractions'

// Украина
import sumska from './ukraine/sumska'

export const regions = {
  germany: {
    countryName: "Германия",
    nrw,
    'nrw-city': nrwCity,
    'nrw-attractions': nrwAttractions
  },
  ukraine: {
    countryName: "Украина",
    sumska,
  },
};

export const regionsSearch = {
    germany: {
    nrw,
  },
  ukraine: {
    sumska,
  },
}

export const citySearch = {
    germany: {
    'nrw-city': nrwCity,
  },
  ukraine: {

  },
}

export const attractionsSearch = {
    germany: {
    'nrw-attractions': nrwAttractions
  },
  ukraine: {

  },
}