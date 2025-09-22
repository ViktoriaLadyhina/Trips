// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';

// Украина
import sumska from './ukraine/sumska'


export const regions = {
  germany: {
    countryName: "Германия",
    nrw,
    'nrw-city': nrwCity,
  },
  ukraine: {
    countryName: "Украина",
    sumska
  },

};