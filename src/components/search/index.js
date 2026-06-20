// new

import nrw_attr from '../../datas/germany/nrw-attractions.js'
import nrw_city from '../../datas/germany/nrw-city.js'
import nrw_events from '../../datas/germany/nrw-events.js'
import nrw_subRegions from '../../datas/germany/nrw-subRegions.js'
import nrw_districts from '../../datas/germany/nrw-districts.js'

import rp_attr from '../../datas/germany/rheinland_pfalz-attractions.js'
import rp_districts from '../../datas/germany/rheinland_pfalz-districts.js'
import rp_subRegions from '../../datas/germany/rheinland_pfalz-subRegions.js'
import rp_city from '../../datas/germany/rheinland_pfalz-city.js'
import rp_events from '../../datas/germany/rheinland_pfalz-events.js'

import luxembourg_land from '../../datas/luxembourg/lands.js'
import lu_routes from '../../datas/luxembourg/routes.js'
import capellen_city from '../../datas/luxembourg/capellen-city.js'
import luxembourg_canton_city from '../../datas/luxembourg/luxembourg_canton-city.js'
import mersch_city from '../../datas/luxembourg/mersch-city.js'
import mersch_attr from '../../datas/luxembourg/mersch-attractions.js'
import capellen_attr from '../../datas/luxembourg/capellen-attractions.js'
import luxembourg_canton_attr from '../../datas/luxembourg/luxembourg_canton-attractions.js'

import ukr_land from '../../datas/ukraine/lands.js'
import sum_city from '../../datas/ukraine/sumska-city.js'
import sum_events from '../../datas/ukraine/sumska-events.js'
import sum_districts from '../../datas/ukraine/sumska-districts.js'
import sum_subRegions from '../../datas/ukraine/sumska-subRegions.js'
import sum_attr from '../../datas/ukraine/sumska-attractions.js'

//de
import nrw_attrDe from '../../datas/de/germany/nrw-attractions.js'
import rp_attrDe from '../../datas/de/germany/rheinland_pfalz-attractions.js'
import sum_attrDe from '../../datas/de/ukraine/sumska-attractions.js'

//ru
import nrw_attrRu from '../../datas/ru/germany/nrw-attractions.js'
import rp_attRu from '../../datas/ru/germany/rheinland_pfalz-attractions.js'
import sum_attrRu from '../../datas/ru/ukraine/sumska-attractions.js'

//ua
import nrw_attrUa from '../../datas/uk/germany/nrw-attractions.js'
import rp_attUa from '../../datas/uk/germany/rheinland_pfalz-attractions.js'
import sum_attrUa from '../../datas/uk/ukraine/sumska-attractions.js'


const searchIndex = {
    germany: {
        nrw: {
            attractions: nrw_attr,
            subRegions: nrw_subRegions,
            districts: nrw_districts,
            city: nrw_city,
            events: nrw_events
        },
        rheinland_pfalz: {
            attractions: rp_attr,
            districts: rp_districts,
            subRegions: rp_subRegions,
            city: rp_city,
            events: rp_events
        }
    },
    luxembourg: {
        routes: lu_routes,
        land: luxembourg_land,
        mersch: {
            attractions: mersch_attr,
            city: mersch_city,
        },
        capellen: {
            attractions: capellen_attr,
            city: capellen_city,
        },
        luxembourg_canton: {
            attractions: luxembourg_canton_attr,
            city: luxembourg_canton_city,
        },
        
    },
    ukraine: {
        land: ukr_land,
        sumska: {
            city: sum_city,
            events: sum_events,
            districts: sum_districts,
            subRegions: sum_subRegions,
            attractions: sum_attr,
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
    uk: {
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