const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const lang = req.query.lang || "ru";

        const [unescoRows] = await db.query(
            `
  SELECT
    e.id,
    e.type,
    e.path,

    c_object.content AS name,

    u.year,
    u.heritage_type,
    u.criteria,
    u.epoch,
    u.series,

    l.country_id,
    country.path AS countryPath,
    c_country.content AS countryName,

    l.region_id,
    region.path AS regionPath,

    l.district_id,
    district.path AS districtPath,

    l.city_id,
    city.path AS cityPath,
    c_city.content AS cityName

FROM entity_unesco u

LEFT JOIN entities e
    ON e.id = u.entity_id

LEFT JOIN content c_object
    ON c_object.entity_id = u.entity_id
    AND c_object.block_key = 'name'
    AND c_object.language = ?

LEFT JOIN entity_locations l
    ON l.entity_id = u.entity_id

LEFT JOIN entities country
    ON country.id = l.country_id

LEFT JOIN content c_country
    ON c_country.entity_id = l.country_id
    AND c_country.block_key = 'name'
    AND c_country.language = ?

LEFT JOIN entities region
    ON region.id = l.region_id

LEFT JOIN entities district
    ON district.id = l.district_id

LEFT JOIN entities city
    ON city.id = l.city_id

LEFT JOIN content c_city
    ON c_city.entity_id = l.city_id
    AND c_city.block_key = 'name'
    AND c_city.language = ?

WHERE u.language = ?
  `,
            [lang, lang, lang, lang]
        );

        if (!unescoRows.length) {
            return res.status(404).json({
                message: "Attractions not found"
            });
        }

        const unescoAttractions = unescoRows.map(row => ({
            id: row.id,
            type: row.type,
            path: row.path,

            name: row.name || null,
            year: row.year || null,
            heritage_type: row.heritage_type || null,
            criteria: row.criteria || null,
            epoch: row.epoch || null,
            series: row.series || null,

            countryPath: row.countryPath || null,
            regionPath: row.regionPath || null,
            districtPath: row.districtPath || 'city',
            cityPath: row.cityPath || null,

            countryName: row.countryName || null,
            cityName: row.cityName || null,

        }));

        // RESPONSE
        res.json({
            unescoAttractions
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