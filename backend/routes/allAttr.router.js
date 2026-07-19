const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const lang = req.query.lang || "ru";

    const [attractionRows] = await db.query(
      `
  SELECT
      e.id,
      e.path,

      m.title,
      m.description,
      m.keywords,

      c.latitude,
      c.longitude,

      a.value AS status,

      p.id AS photo_id,
      p.path AS photo_path,
      p.title_ru,
      p.title_uk,
      p.title_de,

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

  FROM entities e

  LEFT JOIN entity_meta m
      ON m.entity_id = e.id
      AND m.language = ?

  LEFT JOIN entity_coordinates c
      ON c.entity_id = e.id

  LEFT JOIN entity_attributes a
      ON a.entity_id = e.id
      AND a.attribute_group = 'status'

  LEFT JOIN entity_photos p
      ON p.id = m.og_image

  LEFT JOIN entity_locations l
      ON l.entity_id = e.id

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

  WHERE e.type = 'attraction'
  `,
      [lang]
    );

    if (!attractionRows.length) {
      return res.status(404).json({
        message: "Attractions not found"
      });
    }

    const attractions = attractionRows.map(row => ({
      id: row.id,
      path: row.path,

      meta: {
        title: row.title || null,
        description: row.description || null,
        keywords: row.keywords || null,
        ogImage: row.photo_path || null
      },

      status: row.status || null,

      coord:
        row.latitude !== null && row.longitude !== null
          ? {
            lat: Number(row.latitude),
            lng: Number(row.longitude)
          }
          : null,

countryPath: row.country_path || null,
regionPath: row.region_path || null,
districtPath: row.district_path || 'city',
subRegionPath: row.subRegion_path || null,
cityPath: row.city_path || null,
cityDistrictPath: row.cityDistrict_path || null,
    }));

    // RESPONSE
    res.json({
      attractions
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