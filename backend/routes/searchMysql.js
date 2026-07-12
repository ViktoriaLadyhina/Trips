const express = require("express");
const db = require("../db");
const { normalize } = require("../utils/normalize");

const router = express.Router();


const normalizeType = (type) => {
    switch (type) {
        case "oblast":
        case "canton":
        case "land":
            return "region";

        default:
            return type;
    }
};

router.get("/mysql", async (req, res) => {

    try {
        const lang = req.query.lang || "ru";

        const [rows] = await db.query(
            `
            SELECT
                e.id, e.type, e.path,

                country.path AS countryPath,
                region.path AS regionPath,
                district.path AS districtPath,
                city.path AS cityPath,

                c.content AS name,

                m.title,
                m.description,
                m.og_description,
                m.keywords

            FROM entities e

            LEFT JOIN entity_locations l
                ON l.entity_id = e.id

            LEFT JOIN entities country
                ON country.id = l.country_id

            LEFT JOIN entities region
                ON region.id = l.region_id

            LEFT JOIN entities district
                ON district.id = l.district_id

            LEFT JOIN entities city
                ON city.id = l.city_id

            LEFT JOIN content c
                ON c.entity_id = e.id
                AND c.block_key = 'name'
                AND c.language = ?

            LEFT JOIN entity_meta m
                ON m.entity_id = e.id
                AND m.language = ?

            WHERE e.is_active = 1

            `,
            [ lang, lang ]
        );

        const mysqlIndex = rows.map(item => {
            const type = normalizeType(item.type);
            const name = item.title || item.name ||  "";
            const description = item.description || item.og_description || "";
            const keywords = item.keywords || "";

            return {
                id: item.id,
                path: item.path,
                type,
                name,
                description,
                keywords,
                countryPath: item.type === "country"  ? item.path : item.countryPath || null,
                regionPath: item.regionPath || null,
                districtPath: item.districtPath || null,
                cityPath: item.cityPath || null,
                searchText: normalize(`${name} ${description} ${keywords}` )
            };
        });

        res.json({
            results: mysqlIndex
        });

    } catch(error) {
        console.error(error);
        res.status(500).json({
            message:"Server error"
        });
    }
});


module.exports = router;