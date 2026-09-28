const loaders = {
    de: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/de/germany/nrw-attractions.js').then(m => m.default),
            }
        }
    },
    ru: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/ru/germany/nrw-attractions.js').then(m => m.default),
            }
        }
    },
    uk: {
        germany: {
            nrw: {
                attractions: () => import('../../datas/uk/germany/nrw-attractions.js').then(m => m.default),
            }
        }
    },
}

const searchIndexOld = {
  de: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.de.germany.nrw.attractions },
      }
    }
  },

  ru: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.ru.germany.nrw.attractions },
      }
    }
  },

  uk: {
    germany: {
      nrw: {
        attractions: { type: "attraction", loaders: loaders.uk.germany.nrw.attractions },
      }
    }
  },
};

export default searchIndexOld