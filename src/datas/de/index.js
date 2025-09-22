// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';

// Украина
import sumska from './ukraine/sumska'

export const regions = {
  germany: {
    countryName: "Deutschland",
    nrw,
    'nrw-city': nrwCity,
  },
  ukraine: {
    countryName: "Ukraine",
    sumska
  },

};