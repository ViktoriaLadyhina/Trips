import { useMemo } from "react";


export default function useAttractionFilters({
    attractions,
    filters,
    cityPath,
    districtPath,
    attrMap
}) {

    const unescoChildIds = useMemo(() => {
        const set = new Set();

        (attractions || []).forEach(a => {
            a.subObjects?.forEach(id => {
                const sub = attrMap.get(id);
                if (sub?.unesco_status?.included) {
                    set.add(id);
                }
            });
        });

        return set;
    }, [attractions, attrMap]);


    return useMemo(() => {
        if (!attractions) return [];

        return attractions.filter(attr => {
            if (!attr) return false;

            if (cityPath && attr.cityPath !== cityPath) return false;
            if (districtPath && attr.districtPath !== districtPath) return false;

            const allTypes = [
                ...(attr.type || []),
                ...(attr.subObjects || [])
                    .map(id => attrMap.get(id)?.type || [])
                    .flat()
            ];

            if (filters.type !== 'all' && !allTypes.includes(filters.type)) return false;

            if (filters.rating !== 'all' && attr.rating !== filters.rating) {
                return false;
            }

            if (filters.unesco === 'yes') {
                const isDirect = attr.unesco_status?.included;
                const isChild = unescoChildIds.has(attr.id);

                if (!isDirect && !isChild) return false;
            }

            const status = attr.status ?? 'active';
            if (filters.status.length && !filters.status.includes(status)) {
                return false;
            }

            return true;
        });

    }, [
        attractions,
        cityPath,
        districtPath,
        filters.type,
        filters.rating,
        filters.unesco,
        attrMap,
        unescoChildIds,
        filters.status
    ]);



}