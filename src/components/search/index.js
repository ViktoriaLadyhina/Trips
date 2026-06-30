const loaders = {
    germany: {
        nrw: {
            attractions: () => import('../../datas/germany/nrw-attractions.js').then(m => m.default),
            city: () => import('../../datas/germany/nrw-city.js').then(m => m.default),
            events: () => import('../../datas/germany/nrw-events.js').then(m => m.default),
        },

        rheinland_pfalz: {
            attractions: () => import('../../datas/germany/rheinland_pfalz-attractions.js').then(m => m.default),
            city: () => import('../../datas/germany/rheinland_pfalz-city.js').then(m => m.default),
            events: () => import('../../datas/germany/rheinland_pfalz-events.js').then(m => m.default),
        }
    },

    luxembourg: {
        routes: () => import('../../datas/luxembourg/routes.js').then(m => m.default),
        mersch: {
            attractions: () => import('../../datas/luxembourg/mersch-attractions.js').then(m => m.default),
            city: () => import('../../datas/luxembourg/mersch-city.js').then(m => m.default),
        },
        capellen: {
            attractions: () => import('../../datas/luxembourg/capellen-attractions.js').then(m => m.default),
            city: () => import('../../datas/luxembourg/capellen-city.js').then(m => m.default),
        },
        luxembourg_canton: {
            attractions: () => import('../../datas/luxembourg/luxembourg_canton-attractions.js').then(m => m.default),
            city: () => import('../../datas/luxembourg/luxembourg_canton-city.js').then(m => m.default),
        }
    },

    ukraine: {
        sumska: {
            city: () => import('../../datas/ukraine/sumska-city.js').then(m => m.default),
            events: () => import('../../datas/ukraine/sumska-events.js').then(m => m.default),
            attractions: () => import('../../datas/ukraine/sumska-attractions.js').then(m => m.default),
        }
    },

    // old
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

const searchIndex = {
  germany: {
    nrw: {
      attractions: { type: "attraction", loaders: loaders.germany.nrw.attractions  },
      city: { type: "city", loaders: loaders.germany.nrw.city },
      events: { type: "event", loaders: loaders.germany.nrw.events },
    },
    rheinland_pfalz: {
      attractions: { type: "attraction", loaders: loaders.germany.rheinland_pfalz.attractions },
      city: { type: "city", loaders: loaders.germany.rheinland_pfalz.city },
      events: { type: "event", loaders: loaders.germany.rheinland_pfalz.events },
    }
  },
  luxembourg: {
    routes: { type: "routes", loaders: loaders.luxembourg.routes },
    mersch: {
      attractions: { type: "attraction", loaders: loaders.luxembourg.mersch.attractions },
      city: { type: "city", loaders: loaders.luxembourg.mersch.city },
    },
    capellen: {
      attractions: { type: "attraction", loaders: loaders.luxembourg.capellen.attractions },
      city: { type: "city", loaders: loaders.luxembourg.capellen.city },
    },
    luxembourg_canton: {
      attractions: { type: "attraction", loaders: loaders.luxembourg.luxembourg_canton.attractions },
      city: { type: "city", loaders: loaders.luxembourg.luxembourg_canton.city },
    }
  },
  ukraine: {
    sumska: {
      city: { type: "city", loaders: loaders.ukraine.sumska.city },
      events: { type: "event", loaders: loaders.ukraine.sumska.events  },
      attractions: { type: "attraction", loaders: loaders.ukraine.sumska.attractions },
    }
  },

  // old
  de: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.de.germany.nrw.attractions },
      },
      rheinland_pfalz: {
        attractions: { type: "attraction", loaders: loaders.de.germany.rheinland_pfalz.attractions },
      },
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
      sumska: {
        attractions: { type: "attraction", loaders: loaders.uk.ukraine.sumska.attractions },
      },
    },
  },
};

export default searchIndex