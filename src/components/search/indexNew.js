const loaders = {
    germany: {
        nrw: {
            attractions: () => import('../../datas/germany/nrw-attractions.js').then(m => m.default),
            events: () => import('../../datas/germany/nrw-events.js').then(m => m.default),
        },

        rheinland_pfalz: {
            attractions: () => import('../../datas/germany/rheinland_pfalz-attractions.js').then(m => m.default),
            events: () => import('../../datas/germany/rheinland_pfalz-events.js').then(m => m.default),
        }
    },

    luxembourg: {
        luxembourg_canton: {
            attractions: () => import('../../datas/luxembourg/luxembourg_canton-attractions.js').then(m => m.default),
        }
    }
}

const searchIndexNew = {
  germany: {
    nrw: {
      attractions: { type: "attraction", loaders: loaders.germany.nrw.attractions  },
      events: { type: "event", loaders: loaders.germany.nrw.events },
    },
    rheinland_pfalz: {
      attractions: { type: "attraction", loaders: loaders.germany.rheinland_pfalz.attractions },
      events: { type: "event", loaders: loaders.germany.rheinland_pfalz.events },
    }
  },
  luxembourg: {
    luxembourg_canton: {
      attractions: { type: "attraction", loaders: loaders.luxembourg.luxembourg_canton.attractions },
    }
  }

};

export default searchIndexNew