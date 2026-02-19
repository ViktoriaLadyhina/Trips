// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';
import nrwAttractions from './germany/nrw-attractions'
import rheinlandPfalz from './germany/rheinland-pfalz'
import rheinlandPfalzCity from './germany/rheinland-pfalz-city'
import rheinlandPfalzAttractions from './germany/rheinland-pfalz-attractions'
import nrwEvents from './germany/nrw-events';

// Украина
import sumska from './ukraine/sumska';
import sumskaCity from './ukraine/sumska-city';
import sumskaAttractions from './ukraine/sumska-attractions'


export const regions = {
  germany: {
    countryName: "Германия",
    nrw,
    'nrw-city': nrwCity,
    'nrw-events': nrwEvents,
    'nrw-attractions': nrwAttractions,
    'rheinland-pfalz': rheinlandPfalz,
    'rheinland-pfalz-city': rheinlandPfalzCity
  },
  ukraine: {
    countryName: "Украина",
    sumska,
    'sumska-city': sumskaCity,
    'sumska-attractions': sumskaAttractions
  },
};

export const regionsSearch = {
  germany: {
    nrw,
    'rheinland-pfalz': rheinlandPfalz
  },
  ukraine: {
    sumska,
  },
}

export const citySearch = {
  germany: {
    'nrw-city': nrwCity,
    'rheinland-pfalz-city': rheinlandPfalzCity
  },
  ukraine: {
    'sumska-city': sumskaCity,
  },
}

export const attractionsSearch = {
  germany: {
    'nrw-attractions': nrwAttractions,
    'rheinland-pfalz-attractions': rheinlandPfalzAttractions
  },
  ukraine: {
    'sumska-attractions': sumskaAttractions
  },
}