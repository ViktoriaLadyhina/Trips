const loaders = {
    germany: {
        nrw: {
            attractions: () => import('../../datas/germany/nrw-attractions.js').then(m => m.default),
        },
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
    }
  },
  luxembourg: {
    luxembourg_canton: {
      attractions: { type: "attraction", loaders: loaders.luxembourg.luxembourg_canton.attractions },
    }
  }

};

export default searchIndexNew