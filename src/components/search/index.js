//de
import countryDe from '../../datas/de/Country'
import germ_landDe from '../../datas/de/germany/lands'
import nrw_districtsDe from '../../datas/de/germany/nrw-districts'
import nrw_subRegionsDe from '../../datas/de/germany/nrw-subRegions'
import nrw_cityDe from '../../datas/de/germany/nrw-city'
import nrw_attrDe from '../../datas/de/germany/nrw-attractions'
import nrw_eventsDe from '../../datas/de/germany/nrw-events'

import rp_districtsDe from '../../datas/de/germany/rheinland-pfalz-districts'
import rp_subRegionsDe from '../../datas/de/germany/rheinland-pfalz-subRegions'
import rp_cityDe from '../../datas/de/germany/rheinland-pfalz-city'
import rp_attrDe from '../../datas/de/germany/rheinland-pfalz-attractions'
import rp_eventsDe from '../../datas/de/germany/rheinland-pfalz-events'

import ukr_landDe from '../../datas/de/ukraine/lands'
import sum_districtsDe from '../../datas/de/ukraine/sumska-districts'
import sum_subRegionsDe from '../../datas/de/ukraine/sumska-subRegions'
import sum_cityDe from '../../datas/de/ukraine/sumska-city'
import sum_attrDe from '../../datas/de/ukraine/sumska-attractions'
import sum_eventsDe from '../../datas/de/ukraine/sumska-events'

//ru
import countryRu from '../../datas/ru/Country'
import germ_landRu from '../../datas/ru/germany/lands'
import nrw_districtsRu from '../../datas/ru/germany/nrw-districts'
import nrw_subRegionsRu from '../../datas/ru/germany/nrw-subRegions'
import nrw_cityRu from '../../datas/ru/germany/nrw-city'
import nrw_attrRu from '../../datas/ru/germany/nrw-attractions'
import nrw_eventsRu from '../../datas/ru/germany/nrw-events'

import rp_districtsRu from '../../datas/ru/germany/rheinland-pfalz-districts'
import rp_subRegionsRu from '../../datas/ru/germany/rheinland-pfalz-subRegions'
import rp_cityRu from '../../datas/ru/germany/rheinland-pfalz-city'
import rp_attRu from '../../datas/ru/germany/rheinland-pfalz-attractions'
import rp_eventsRu from '../../datas/ru/germany/rheinland-pfalz-events'

import ukr_landRu from '../../datas/ru/ukraine/lands'
import sum_districtsRu from '../../datas/ru/ukraine/sumska-districts'
import sum_subRegionsRu from '../../datas/ru/ukraine/sumska-subRegions'
import sum_cityRu from '../../datas/ru/ukraine/sumska-city'
import sum_attrRu from '../../datas/ru/ukraine/sumska-attractions'
import sum_eventsRu from '../../datas/ru/ukraine/sumska-events'

//ua
import countryUa from '../../datas/ua/Country'
import germ_landUa from '../../datas/ua/germany/lands'
import nrw_districtsUa from '../../datas/ua/germany/nrw-districts'
import nrw_subRegionsUa from '../../datas/ua/germany/nrw-subRegions'
import nrw_cityUa from '../../datas/ua/germany/nrw-city'
import nrw_attrUa from '../../datas/ua/germany/nrw-attractions'
import nrw_eventsUa from '../../datas/ua/germany/nrw-events'

import rp_districtsUa from '../../datas/ua/germany/rheinland-pfalz-districts'
import rp_subRegionsUa from '../../datas/ua/germany/rheinland-pfalz-subRegions'
import rp_cityUa from '../../datas/ua/germany/rheinland-pfalz-city'
import rp_attUa from '../../datas/ua/germany/rheinland-pfalz-attractions'
import rp_eventsUa from '../../datas/ua/germany/rheinland-pfalz-events'

import ukr_landUa from '../../datas/ua/ukraine/lands'
import sum_districtsUa from '../../datas/ua/ukraine/sumska-districts'
import sum_subRegionsUa from '../../datas/ua/ukraine/sumska-subRegions'
import sum_cityUa from '../../datas/ua/ukraine/sumska-city'
import sum_attrUa from '../../datas/ua/ukraine/sumska-attractions'
import sum_eventsUa from '../../datas/ua/ukraine/sumska-events'

const searchIndex = {
    de: {
        country: countryDe,
        germany: {
            land: germ_landDe,
            nrw: {
                districts: nrw_districtsDe,
                subRegions: nrw_subRegionsDe,
                city: nrw_cityDe,
                attractions: nrw_attrDe,
                events: nrw_eventsDe
            },
            "rheinland-pfalz": {
                districts: rp_districtsDe,
                subRegions: rp_subRegionsDe,
                city: rp_cityDe,
                attractions: rp_attrDe,
                events: rp_eventsDe
            }
        },
        ukraine: {
            land: ukr_landDe,
            sumska: {
                districts: sum_districtsDe,
                subRegions: sum_subRegionsDe,
                city: sum_cityDe,
                attractions: sum_attrDe,
                events: sum_eventsDe
            },
        }
    },
    ru: {
        country: countryRu,
        germany: {
            land: germ_landRu,
            nrw: {
                districts: nrw_districtsRu,
                subRegions: nrw_subRegionsRu,
                city: nrw_cityRu,
                attractions: nrw_attrRu,
                events: nrw_eventsRu
            },
            "rheinland-pfalz": {
                districts: rp_districtsRu,
                subRegions: rp_subRegionsRu,
                city: rp_cityRu,
                attractions: rp_attRu,
                events: rp_eventsRu
            }
        },
        ukraine: {
            land: ukr_landRu,
            sumska: {
                districts: sum_districtsRu,
                subRegions: sum_subRegionsRu,
                city: sum_cityRu,
                attractions: sum_attrRu,
                events: sum_eventsRu
            },
        }
    },
    ua: {
        country: countryUa,
        germany: {
            land: germ_landUa,
            nrw: {
                districts: nrw_districtsUa,
                subRegions: nrw_subRegionsUa,
                city: nrw_cityUa,
                attractions: nrw_attrUa,
                events: nrw_eventsUa
            },
            "rheinland-pfalz": {
                districts: rp_districtsUa,
                subRegions: rp_subRegionsUa,
                city: rp_cityUa,
                attractions: rp_attUa,
                events: rp_eventsUa
            }
        },
        ukraine: {
            land: ukr_landUa,
            sumska: {
                districts: sum_districtsUa,
                subRegions: sum_subRegionsUa,
                city: sum_cityUa,
                attractions: sum_attrUa,
                events: sum_eventsUa
            },
        }
    }
}

export default searchIndex