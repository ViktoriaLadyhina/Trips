// new
import country from '../../datas/country'
import nrw_attr from '../../datas/germany/nrw-attractions'
import germ_land from '../../datas/germany/lands'
import ukr_land from '../../datas/ukraine/lands'
import nrw_districts from '../../datas/germany/nrw-districts'
import nrw_subRegions from '../../datas/germany/nrw-subRegions'
import rp_districts from '../../datas/germany/rheinland-pfalz-districts'
import rp_subRegions from '../../datas/germany/rheinland-pfalz-subRegions'

//de
import nrw_cityDe from '../../datas/de/germany/nrw-city'
import nrw_attrDe from '../../datas/de/germany/nrw-attractions'
import nrw_eventsDe from '../../datas/de/germany/nrw-events'

import rp_cityDe from '../../datas/de/germany/rheinland-pfalz-city'
import rp_attrDe from '../../datas/de/germany/rheinland-pfalz-attractions'
import rp_eventsDe from '../../datas/de/germany/rheinland-pfalz-events'

import sum_cityDe from '../../datas/de/ukraine/sumska-city'
import sum_attrDe from '../../datas/de/ukraine/sumska-attractions'
import sum_eventsDe from '../../datas/de/ukraine/sumska-events'

//ru
import nrw_cityRu from '../../datas/ru/germany/nrw-city'
import nrw_attrRu from '../../datas/ru/germany/nrw-attractions'
import nrw_eventsRu from '../../datas/ru/germany/nrw-events'

import rp_cityRu from '../../datas/ru/germany/rheinland-pfalz-city'
import rp_attRu from '../../datas/ru/germany/rheinland-pfalz-attractions'
import rp_eventsRu from '../../datas/ru/germany/rheinland-pfalz-events'

import sum_cityRu from '../../datas/ru/ukraine/sumska-city'
import sum_attrRu from '../../datas/ru/ukraine/sumska-attractions'
import sum_eventsRu from '../../datas/ru/ukraine/sumska-events'

//ua
import nrw_cityUa from '../../datas/ua/germany/nrw-city'
import nrw_attrUa from '../../datas/ua/germany/nrw-attractions'
import nrw_eventsUa from '../../datas/ua/germany/nrw-events'

import rp_cityUa from '../../datas/ua/germany/rheinland-pfalz-city'
import rp_attUa from '../../datas/ua/germany/rheinland-pfalz-attractions'
import rp_eventsUa from '../../datas/ua/germany/rheinland-pfalz-events'

import sum_cityUa from '../../datas/ua/ukraine/sumska-city'
import sum_attrUa from '../../datas/ua/ukraine/sumska-attractions'
import sum_eventsUa from '../../datas/ua/ukraine/sumska-events'

const searchIndex = {
    country: country,
    germany: {
        land: germ_land,
        nrw: {
            attractions: nrw_attr,
            subRegions: nrw_subRegions,
            districts: nrw_districts,
        }
    },
    "rheinland-pfalz": {
        districts: rp_districts,
        subRegions: rp_subRegions,
    },
    ukraine: {
        land: ukr_land,
    },

    de: {
        germany: {
            nrw: {
                city: nrw_cityDe,
                attractions: nrw_attrDe,
                events: nrw_eventsDe
            },
            "rheinland-pfalz": {
                city: rp_cityDe,
                attractions: rp_attrDe,
                events: rp_eventsDe
            }
        },
        ukraine: {
            sumska: {
                city: sum_cityDe,
                attractions: sum_attrDe,
                events: sum_eventsDe
            },
        }
    },
    ru: {
        germany: {
            nrw: {
                city: nrw_cityRu,
                attractions: nrw_attrRu,
                events: nrw_eventsRu
            },
            "rheinland-pfalz": {
                city: rp_cityRu,
                attractions: rp_attRu,
                events: rp_eventsRu
            }
        },
        ukraine: {
            sumska: {
                city: sum_cityRu,
                attractions: sum_attrRu,
                events: sum_eventsRu
            },
        }
    },
    ua: {
        germany: {
            nrw: {
                city: nrw_cityUa,
                attractions: nrw_attrUa,
                events: nrw_eventsUa
            },
            "rheinland-pfalz": {
                city: rp_cityUa,
                attractions: rp_attUa,
                events: rp_eventsUa
            }
        },
        ukraine: {
            sumska: {
                city: sum_cityUa,
                attractions: sum_attrUa,
                events: sum_eventsUa
            },
        }
    }
}

export default searchIndex