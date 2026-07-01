const loaders = {
    de: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/de/germany/nrw-attractions.js').then(m => m.default),
            },
            rheinland_pfalz: {
                attractions: () => import('../../datas/de/germany/rheinland_pfalz-attractions.js').then(m => m.default),
            },
        },
        ukraine: {
            sumska: {
                attractions: () => import('../../datas/de/ukraine/sumska-attractions.js').then(m => m.default),
            },
        },
    },
    ru: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/ru/germany/nrw-attractions.js').then(m => m.default),
            },
            rheinland_pfalz: {
                attractions: () => import('../../datas/ru/germany/rheinland_pfalz-attractions.js').then(m => m.default),
            },
        },
        ukraine: {
            sumska: {
                attractions: () => import('../../datas/ru/ukraine/sumska-attractions.js').then(m => m.default),
            },
        },
    },
    uk: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/uk/germany/nrw-attractions.js').then(m => m.default),
            },
            rheinland_pfalz: {
                attractions: () => import('../../datas/uk/germany/rheinland_pfalz-attractions.js').then(m => m.default),
            },
        },
        ukraine: {
            sumska: {
                attractions: () => import('../../datas/uk/ukraine/sumska-attractions.js').then(m => m.default),
            },
        },
    },
}

const searchIndexOld = {
  de: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.de.germany.nrw.attractions },
      },
      rheinland_pfalz: {
        attractions: { type: "attraction", loaders: loaders.de.germany.rheinland_pfalz.attractions },
      },
    },
    ukraine: {  
      sumska: {
        attractions: { type: "attraction", loaders: loaders.de.ukraine.sumska.attractions },
      },
    },
  },

  ru: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.ru.germany.nrw.attractions },
      },
      rheinland_pfalz: {
        attractions: { type: "attraction", loaders: loaders.ru.germany.rheinland_pfalz.attractions },
      },
    },
    ukraine: {
      sumska: {
        attractions: { type: "attraction", loaders: loaders.ru.ukraine.sumska.attractions },
      },
    },
  },

  uk: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.uk.germany.nrw.attractions },
      },
      rheinland_pfalz: {
        attractions: { type: "attraction", loaders: loaders.uk.germany.rheinland_pfalz.attractions },
      },
    },
    ukraine: {
      sumska: {
        attractions: { type: "attraction", loaders: loaders.uk.ukraine.sumska.attractions },
      },
    },
  },
};

export default searchIndexOld