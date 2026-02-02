// Германия
import nrw from './germany/nrw';
import nrwCity from './germany/nrw-city';
import nrwAttractions from './germany/nrw-attractions'
import rheinlandPfalz from './germany/rhineland-pfalz'

// Украина
import sumska from './ukraine/sumska';
import sumskaCity from './ukraine/sumska-city';
import sumskaAttractions from './ukraine/sumska-attractions'


export const regions = {
  germany: {
    countryName: "Германия",
    nrw,
    'nrw-city': nrwCity,
    'nrw-attractions': nrwAttractions,
    'rhineland-pfalz': rheinlandPfalz
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
    'rhineland-pfalz': rheinlandPfalz
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
    'sumska-city': sumskaCity,
  },
}

export const attractionsSearch = {
  germany: {
    'nrw-attractions': nrwAttractions
  },
  ukraine: {
    'sumska-attractions': sumskaAttractions
  },
}