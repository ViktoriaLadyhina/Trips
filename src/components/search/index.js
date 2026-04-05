// new
import country from '../../datas/country'

import germ_land from '../../datas/germany/lands'

import nrw_attr from '../../datas/germany/nrw-attractions'
import nrw_city from '../../datas/germany/nrw-city'
import nrw_events from '../../datas/germany/nrw-events'
import nrw_subRegions from '../../datas/germany/nrw-subRegions'
import nrw_districts from '../../datas/germany/nrw-districts'

import rp_districts from '../../datas/germany/rheinland_pfalz-districts'
import rp_subRegions from '../../datas/germany/rheinland_pfalz-subRegions'
import rp_city from '../../datas/germany/rheinland_pfalz-city'
import rp_events from '../../datas/germany/rheinland_pfalz-events'

import ukr_land from '../../datas/ukraine/lands'

import sum_city from '../../datas/ukraine/sumska-city'
import sum_events from '../../datas/ukraine/sumska-events'
import sum_districts from '../../datas/ukraine/sumska-districts'
import sum_subRegions from '../../datas/ukraine/sumska-subRegions'

//de
import nrw_attrDe from '../../datas/de/germany/nrw-attractions'
import rp_attrDe from '../../datas/de/germany/rheinland_pfalz-attractions'
import sum_attrDe from '../../datas/de/ukraine/sumska-attractions'

//ru
import nrw_attrRu from '../../datas/ru/germany/nrw-attractions'
import rp_attRu from '../../datas/ru/germany/rheinland_pfalz-attractions'
import sum_attrRu from '../../datas/ru/ukraine/sumska-attractions'

//ua
import nrw_attrUa from '../../datas/ua/germany/nrw-attractions'
import rp_attUa from '../../datas/ua/germany/rheinland_pfalz-attractions'
import sum_attrUa from '../../datas/ua/ukraine/sumska-attractions'


const searchIndex = {
    country: country,
    germany: {
        land: germ_land,
        nrw: {
            attractions: nrw_attr,
            subRegions: nrw_subRegions,
            districts: nrw_districts,
            city: nrw_city,
            events: nrw_events
        },
        rheinland_pfalz: {
            districts: rp_districts,
            subRegions: rp_subRegions,
            city: rp_city,
            events: rp_events
        }
    },
    ukraine: {
        land: ukr_land,
        sumska: {
            city: sum_city,
            events: sum_events,
            districts: sum_districts,
            subRegions: sum_subRegions,
        }

    },


    //old
    de: {
        germany: {
            nrw: {
                attractions: nrw_attrDe,
            },
            rheinland_pfalz: {
                attractions: rp_attrDe,
            }
        },
        ukraine: {
            sumska: {
                attractions: sum_attrDe,
            },
        }
    },
    ru: {
        germany: {
            nrw: {
                attractions: nrw_attrRu,
            },
            rheinland_pfalz: {
                attractions: rp_attRu,
            }
        },
        ukraine: {
            sumska: {
                attractions: sum_attrRu,
            },
        }
    },
    ua: {
        germany: {
            nrw: {
                attractions: nrw_attrUa,
            },
            rheinland_pfalz: {
                attractions: rp_attUa,
            }
        },
        ukraine: {
            sumska: {
                attractions: sum_attrUa,
            },
        }
    }
}

export default searchIndex