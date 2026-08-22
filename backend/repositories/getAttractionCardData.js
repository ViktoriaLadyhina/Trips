// repositories/getAttractionCardData.js

const getLocations = require("./getLocations");
const getUnescoList = require("./getUnescoList");

async function getAttractionCardData(db, attrIds, lang) {

    if (!attrIds.length) {
        return [];
    }

    const placeholders = attrIds
        .map(() => "?")
        .join(",");

    // -------------------------
    // 1. ENTITIES + META
    // -------------------------

    const [entityRows] = await db.query(
    `
    SELECT
        e.id,
        e.path,
        e.is_active,

        m.title,
        m.description,

        p.path AS og_image

    FROM entities e

    LEFT JOIN entity_meta m
        ON m.entity_id = e.id
        AND m.language = ?

    LEFT JOIN entity_photos p
        ON p.id = m.og_image

    WHERE e.id IN (${placeholders})
    `,
    [
        lang,
        ...attrIds
    ]
);

    // -------------------------
    // 2. CONTENT
    // -------------------------

    const [contentRows] = await db.query(
        `
        SELECT
            entity_id,
            block_key,
            content

        FROM content

        WHERE entity_id IN (${placeholders})
          AND block_key IN (
              'name',
              'short_description',
              'subObjects_intro',
              'subObjects_desc',
              'status_note'
          )
          AND language = ?
        `,
        [
            ...attrIds,
            lang
        ]
    );

    const contentByEntity = contentRows.reduce(
        (acc, row) => {

            if (!acc[row.entity_id]) {
                acc[row.entity_id] = {};
            }

            acc[row.entity_id][row.block_key] = row.content;

            return acc;
        },
        {}
    );

    // -------------------------
    // 3. ATTRIBUTES
    // -------------------------

   const [attributeRows] = await db.query(
    `
    SELECT
        entity_id,
        attribute_group,
        value
    FROM entity_attributes
    WHERE entity_id IN (${placeholders})
    `,
    attrIds
);

const attributesByEntity = {};

for (const row of attributeRows) {

    if (!attributesByEntity[row.entity_id]) {
        attributesByEntity[row.entity_id] = {
            type: [],
            feature: [],
            map: [],
            rating: null,
            status: null
        };
    }

    const attributes = attributesByEntity[row.entity_id];

    switch (row.attribute_group) {
        case 'type':
            attributes.type.push(row.value);
            break;

        case 'feature':
            attributes.feature.push(row.value);
            break;

        case 'map':
            attributes.map.push(row.value);
            break;

        case 'rating':
            attributes.rating = row.value;
            break;

        case 'status':
            attributes.status = row.value;
            break;
    }
}

    // -------------------------
    // 4. COORDINATES
    // -------------------------

    const [coordinatesRows] = await db.query(
        `
        SELECT
            entity_id,
            latitude,
            longitude

        FROM entity_coordinates

        WHERE entity_id IN (${placeholders})
        `,
        attrIds
    );

const coordinatesByEntity = Object.fromEntries(
    coordinatesRows.map(row => [
        row.entity_id,
        {
            lat: row.latitude !== null
                ? Number(row.latitude)
                : null,

            lng: row.longitude !== null
                ? Number(row.longitude)
                : null
        }
    ])
);

    // -------------------------
    // 5. PHOTOS
    // -------------------------

    // только основная фотография
    const [photosRows] = await db.query(
        `
        SELECT
            id,
            entity_id,
            path,
            is_main,
            title_ru,
            title_uk,
            title_de

        FROM entity_photos

        WHERE entity_id IN (${placeholders})
          AND is_main = 1
        `,
        attrIds
    );

    const photosByEntity = Object.fromEntries(
        photosRows.map(photo => [
            photo.entity_id,
            {
                id: photo.id,
                path: photo.path,
                is_main: Boolean(photo.is_main),

                title: {
                    ru: photo.title_ru,
                    uk: photo.title_uk,
                    de: photo.title_de
                }
            }
        ])
    );

    // -------------------------
    // 6, 7. LOCATIONS + UNESCO
    // -------------------------

     const locationsByEntity =
        await getLocations(db, attrIds, lang);

    const unescoByEntity =
        await getUnescoList(db, attrIds);

    // ...

    return entityRows.map(item => {
        const attributes =
        attributesByEntity[item.id] || {
                type: [],
                feature: null,
                map: [],
                rating: null,
                status: null
        };

        const content =
            contentByEntity[item.id] || {};

        const location =
            locationsByEntity[item.id] || {};

        return {

            id: item.id,
            path: item.path,
            is_active: Boolean(item.is_active),

            type: attributes.type,
            feature: attributes.feature,
            rating: attributes.rating,
            status: attributes.status,
            map: attributes.map,

            name: content.name || null,
            short_description: content.short_description || null,
            status_note: content.status_note || null,
            subObjects_intro: content.subObjects_intro || null,
            subObjects_desc: content.subObjects_desc || null,

            coord: coordinatesByEntity[item.id] || null,

            fotoCard: photosByEntity[item.id] || null,

            unesco_status: unescoByEntity[item.id] || null,

            meta: {
                title: item.title || null,
                description: item.description || null,
                ogImage: item.og_image || null
            },

            ...location
        };
    });
}

module.exports = getAttractionCardData;