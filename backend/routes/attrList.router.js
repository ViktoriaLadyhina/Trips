const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/:entityPath", async (req, res) => {
  try {
    const { entityPath } = req.params;
    const lang = req.query.lang || "ru";

    const [parentRows] = await db.query(
      `
SELECT 
  c.id, c.type
FROM entities c
WHERE c.path = ?
LIMIT 1
      `,
      [entityPath]
    );

    if (!parentRows.length) {
      return res.status(404).json({
        message: "City not found"
      });
    }

    const parent = parentRows[0];
console.log("1 parent");
    const locationFields = {
      country: "country_id",
      region: "region_id",
      district: "district_id",
      city: "city_id"
    };

    const field = locationFields[parent.type];
    if (!field) {
      return res.status(400).json({
        message: `Unsupported parent type: ${parent.type}`
      });
    }

    const [attrList] = await db.query(
      `
SELECT 
    e.id,
    e.path
FROM entity_locations l
JOIN entities e
    ON e.id = l.entity_id
WHERE ${field} = ?
AND e.type = 'attraction'
      `,
      [parent.id]
    );

    if (!attrList.length) {
      return res.json({
        attractions: []
      });
    }
console.log("2 attrList");
    const attrIds = attrList.map(item => item.id);

    const placeholders = attrIds.map(() => "?").join(",");

    const [contentRows] = await db.query(
      `
SELECT 
    entity_id,
    block_key,
    content
FROM content
WHERE entity_id IN (${placeholders})
AND block_key IN ('name', 'short_description', 'subObjects_intro',  'status_note')
AND language = ?
      `,
      [lang]
    );
console.log("3 content");
    const contentByEntity = contentRows.reduce((acc, row) => {
      if (!acc[row.entity_id]) {
        acc[row.entity_id] = {};
      }

      acc[row.entity_id][row.block_key] = row.content;

      return acc;
    }, {});

    // ----------------- location
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
      attrIds
    );
console.log("4 location");
    const locationsByEntity = Object.fromEntries(
      locationRows.map(item => [
        item.entity_id,
        item
      ])
    );

    const locationIds = [
      ...new Set(
        locationRows.flatMap(item => [
          item.country_id,
          item.region_id,
          item.district_id,
          item.subRegion_id,
          item.city_id,
          item.cityDistrict_id
        ]).filter(Boolean)
      )
    ];

    let locationNamesRows = [];

    if (locationIds.length) {
      const locationPlaceholders = locationIds.map(() => "?").join(",");

      [locationNamesRows] = await db.query(
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
    }

    const locationNamesById = Object.fromEntries(
      locationNamesRows.map(item => [
        item.entity_id,
        item.content
      ])
    );
console.log("5 location names");

    // ----------------- coordinates
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
      coordinatesRows.map(item => [
        item.entity_id,
        {
          lat: Number(item.latitude),
          lng: Number(item.longitude)
        }
      ])
    );
console.log("6 coordinates");
    
    // ----------------- attributes
    const [attributesRows] = await db.query(
      `
SELECT *
FROM entity_attributes
WHERE entity_id IN (${placeholders})
      `,
      attrIds
    );

    const attributesByEntity = attributesRows.reduce((acc, row) => {
      if (!acc[row.entity_id]) {
        acc[row.entity_id] = {};
      }

      acc[row.entity_id][row.attribute_group] = row.value;

      return acc;
    }, {});
console.log("7 attributes");
    // ----------------- unesco
    const [unescoRows] = await db.query(
      `
SELECT 
      entity_id,
      year
FROM entity_unesco
WHERE entity_id IN (${placeholders})
      `,
      attrIds
    );

    const unescoByEntity = Object.fromEntries(
      unescoRows.map(item => [
        item.entity_id,
        {
          year: item.year
        }
      ])
    );
console.log("8 unesco");
    // ----------------- relations
    const [relationsRows] = await db.query(
      `
SELECT
    parent_id,
    child_id
FROM entity_relations
WHERE parent_id IN (${placeholders})
AND relation = 'contains'
`,
      [
        ...attrIds
      ]
    );
console.log("9 relations");
    const childIds = [
      ...new Set(
        relationsRows.map(item => item.child_id)
      )
    ];

    let childRows = [];
    let subObjectsByParent = {};

    if (childIds.length) {
      const childPlaceholders = childIds.map(() => "?").join(",");

      [childRows] = await db.query(
        `
    SELECT
        entity_id,
        content
    FROM content
    WHERE entity_id IN (${childPlaceholders})
    AND block_key = 'subObjects_desc'
    AND language = ?
    `,
        [
          ...childIds,
          lang
        ]
      );

      const childContentByEntity = Object.fromEntries(
        childRows.map(item => [
          item.entity_id,
          item.content
        ])
      );

      relationsRows.forEach(item => {
        if (!subObjectsByParent[item.parent_id]) {
          subObjectsByParent[item.parent_id] = [];
        }

        subObjectsByParent[item.parent_id].push({
          id: item.child_id,
          description: childContentByEntity[item.child_id] || null
        });
      });
    }


    // ----------------- photos
    const [photosRows] = await db.query(`
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
`, attrIds);

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
console.log("11 photos");
    // ----------------- СБОРКА
    const attractions = attrList.map(item => {
      const content = contentByEntity[item.id] || {};
      const attributes = attributesByEntity[item.id] || {};
      const location = locationsByEntity[item.id] || {};

      return {
        id: item.id,
        path: item.path,

        type: attributes.type || null,
        rating: attributes.rating || null,
        status: attributes.status || null,

        name: content.name || null,
        short_description: content.short_description || null,
        status_note: content.status_note || null,
        subObjects_intro: content.subObjects_intro || null,

        coord: coordinatesByEntity[item.id] || null,

        fotoCard: photosByEntity[item.id] || null,

        unesco_status: unescoByEntity[item.id] || null,

        loc: {
          country: locationNamesById[location.country_id] || null,
          region: locationNamesById[location.region_id] || null,
          district: locationNamesById[location.district_id] || null,
          subRegion: locationNamesById[location.subRegion_id] || null,
          city: locationNamesById[location.city_id] || null,
          cityDistrict: locationNamesById[location.cityDistrict_id] || null
        },

        paths: {
          country: location.country_path || null,
          region: location.region_path || null,
          district: location.district_path || null,
          subRegion: location.subRegion_path || null,
          city: location.city_path || null,
          cityDistrict: location.cityDistrict_path || null
        },

        subObjects: subObjectsByParent[item.id] || []

      };
    });

    // RESPONSE
    res.json({
      parent: {
        id: parent.id,
        type: parent.type
      },

      attractions: attractions
    });

  } catch (err) {
    console.error("ERROR:", err);
    console.error("MESSAGE:", err.message);
    console.error("SQL:", err.sql);
    console.error("SQL STATE:", err.sqlState);

    res.status(500).json({
        message: "Server error",
        error: err.message
    });
  }
});

module.exports = router;