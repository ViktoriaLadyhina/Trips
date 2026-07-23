import { useMemo } from "react";


export default function useAttractionFilters({
    attractions,
    filters,
    cityPath,
    districtPath,
}) {

    return useMemo(() => {
        if (!attractions) return [];

        return attractions.filter(attr => {
            if (!attr) return false;

            const attrCityPath =
                attr.cityPath ||
                attr.paths?.city;

            const attrDistrictPath =
                attr.districtPath ||
                attr.paths?.district ||
                (attrCityPath ? 'city' : null);

            if (cityPath && attrCityPath !== cityPath) {
                return false;
            }

            if (districtPath && attrDistrictPath !== districtPath) {
                return false;
            }

            if (
                filters.type !== 'all' &&
                !attr.type?.includes(filters.type)
            ) {
                return false;
            }

            if (
                filters.feature?.length > 0 &&
                !filters.feature.includes('all') &&
                !filters.feature.some(feature =>
                    attr.feature?.includes(feature)
                )
            ) {
                return false;
            }

            if (
                filters.rating !== 'all' &&
                attr.rating !== filters.rating
            ) {
                return false;
            }

            if (
                filters.unesco === 'yes' &&
                !attr.unesco_status?.included
            ) {
                return false;
            }

            if (
                filters.unesco === 'no' &&
                attr.unesco_status?.included
            ) {
                return false;
            }

            const status = attr.status ?? 'active';

            if (
                filters.status?.length &&
                !filters.status.includes(status)
            ) {
                return false;
            }

            return true;
        });

    }, [
        attractions,
        cityPath,
        districtPath,
        filters.type,
        filters.feature,
        filters.rating,
        filters.unesco,
        filters.status
    ]);
}