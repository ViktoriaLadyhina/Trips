// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';
import nrwAttractions from './germany/nrw-attractions'

// Украина
import sumska from './ukraine/sumska'

export const regions = {
  germany: {
    countryName: "Deutschland",
    nrw,
    'nrw-city': nrwCity,
    'nrw-attractions': nrwAttractions
  },
  ukraine: {
    countryName: "Ukraine",
    sumska
  },

};