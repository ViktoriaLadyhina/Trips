// repositories/getLocations.js

async function getLocations(db, entityIds, lang) {

    if (!entityIds.length) {
        return {};
    }

    const placeholders = entityIds
        .map(() => "?")
        .join(",");

    // 1. Получаем location всех достопримечательностей
    const [locationRows] = await db.query(
        `
        SELECT
            l.entity_id,

            l.country_id,
            country.path AS country_path,

            l.region_id,
            region.path AS region_path,

            l.district_id,
            district.path AS district_path,

            l.subRegion_id,
            subRegion.path AS subRegion_path,

            l.city_id,
            city.path AS city_path,

            l.cityDistrict_id,
            cityDistrict.path AS cityDistrict_path

        FROM entity_locations l

        LEFT JOIN entities country
            ON country.id = l.country_id

        LEFT JOIN entities region
            ON region.id = l.region_id

        LEFT JOIN entities district
            ON district.id = l.district_id

        LEFT JOIN entities subRegion
            ON subRegion.id = l.subRegion_id

        LEFT JOIN entities city
            ON city.id = l.city_id

        LEFT JOIN entities cityDistrict
            ON cityDistrict.id = l.cityDistrict_id

        WHERE l.entity_id IN (${placeholders})
        `,
        entityIds
    );

    if (!locationRows.length) {

        return Object.fromEntries(
            entityIds.map(id => [
                id,
                {
                    loc: {
                        country: null,
                        region: null,
                        district: null,
                        subRegion: null,
                        city: null,
                        cityDistrict: null
                    },

                    countryPath: null,
                    regionPath: null,
                    districtPath: "city",
                    subRegionPath: null,
                    cityPath: null,
                    cityDistrictPath: null
                }
            ])
        );
    }

    // 2. Собираем все ID географических сущностей
    const locationIds = [
        ...new Set(
            locationRows.flatMap(location => [
                location.country_id,
                location.region_id,
                location.district_id,
                location.subRegion_id,
                location.city_id,
                location.cityDistrict_id
            ])
        )
    ].filter(Boolean);

    // 3. Получаем названия географических сущностей
    let locationNamesById = {};

    if (locationIds.length) {

        const locationPlaceholders = locationIds
            .map(() => "?")
            .join(",");

        const [locationNamesRows] = await db.query(
            `
            SELECT
                entity_id,
                content

            FROM content

            WHERE entity_id IN (${locationPlaceholders})
              AND block_key = 'name'
              AND language = ?
            `,
            [
                ...locationIds,
                lang
            ]
        );

        locationNamesById = Object.fromEntries(
            locationNamesRows.map(item => [
                item.entity_id,
                item.content
            ])
        );
    }

    // 4. Собираем результат по entity_id
    return Object.fromEntries(
        locationRows.map(location => [

            location.entity_id,

            {
                loc: {
                    country: locationNamesById[location.country_id] || null,
                    region: locationNamesById[location.region_id] || null,
                    district: locationNamesById[location.district_id] || null,
                    subRegion: locationNamesById[location.subRegion_id] || null,
                    city: locationNamesById[location.city_id] || null,
                    cityDistrict: locationNamesById[location.cityDistrict_id] || null
                },

                countryPath: location.country_path || null,
                regionPath: location.region_path || null,
                districtPath: location.district_path || "city",
                subRegionPath: location.subRegion_path || null,
                cityPath: location.city_path || null,
                cityDistrictPath: location.cityDistrict_path || null
            }
        ])
    );
}

module.exports = getLocations;