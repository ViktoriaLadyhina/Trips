const express = require("express");
const db = require("../db");
const router = express.Router();

const getLocation = async (cityId) => {
    const location = {
        country_id: null,
        region_id: null,
        district_id: null,
        subRegion_id: null,
        city_id: cityId
    };

    const [cityRows] = await db.query(
        "SELECT id, type, parent_id FROM entities WHERE id = ? AND type = 'city'",
        [cityId]
    );

    if (cityRows.length === 0) {
        return null;
    }

    let parentId = cityRows[0].parent_id;
    let levelsChecked = 0;

    while (parentId !== null && levelsChecked < 10) {
        const [rows] = await db.query(
            "SELECT id, type, parent_id FROM entities WHERE id = ?",
            [parentId]
        );

        if (rows.length === 0) {
            break;
        }

        const parent = rows[0];

        switch (parent.type) {
            case "country":
                location.country_id = parent.id;
                break;
            case "land":
            case "oblast":
            case "canton":
                location.region_id = parent.id;
                break;
            case "district":
                location.district_id = parent.id;
                break;
            case "subRegion":
                location.subRegion_id = parent.id;
                break;
        }

        parentId = parent.parent_id;
        levelsChecked++;
    }

    return location;
};

router.get("/location/:cityId", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const cityId = Number(req.params.cityId);

        if (!Number.isInteger(cityId) || cityId <= 0) {
            return res.status(400).json({
                error: "Invalid city ID"
            });
        }

        const location = await getLocation(cityId);

        if (!location) {
            return res.status(404).json({
                error: "City not found"
            });
        }

        res.json(location);

    } catch (error) {
        console.error("Error fetching location:", error);
        res.status(500).json({
            error: "Server error"
        });
    }
});

router.get("/cityDistricts/:cityId", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const cityId = Number(req.params.cityId);

        if (!Number.isInteger(cityId) || cityId <= 0) {
            return res.status(400).json({
                error: "Invalid city ID"
            });
        }

        const [rows] = await db.query(
            `SELECT e.id, c.content AS name
            FROM entities e
            LEFT JOIN content c
                ON c.entity_id = e.id
                AND c.block_key = 'name'
                AND c.language = 'ru'
            WHERE e.type = 'cityDistrict'
                AND e.parent_id = ?
            ORDER BY c.content`,
            [cityId]
        );

        res.json(rows);

    } catch (error) {
        console.error("Error fetching city districts:", error);
        res.status(500).json({
            error: "Server error"
        });
    }
});


router.post("/cityDistrict", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const { parent_id, name_ru, name_uk, name_de } = req.body;

        if (!parent_id || !name_ru?.trim() || !name_uk?.trim() || !name_de?.trim()) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        const cityId = Number(parent_id);

        if (!Number.isInteger(cityId) || cityId <= 0) {
            return res.status(400).json({
                error: "Invalid city ID"
            });
        }

        const [cities] = await db.query(
            "SELECT id FROM entities WHERE id = ? AND type = 'city' AND is_active = 1",
            [cityId]
        );

        if (cities.length === 0) {
            return res.status(400).json({
                error: "City not found"
            });
        }

        const path = `${name_de.trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "")}_${cityId}`;

        const [existingPath] = await db.query(
            "SELECT id FROM entities WHERE path = ?",
            [path]
        );

        if (existingPath.length > 0) {
            return res.status(400).json({
                error: "This path already exists"
            });
        }

        const [result] = await db.query(
            "INSERT INTO entities (type, path, parent_id, is_active) VALUES ('cityDistrict', ?, ?, 0)",
            [path, cityId]
        );

        const districtId = result.insertId;

        await db.query(
            `INSERT INTO content (entity_id, block_key, language, content)
            VALUES
            (?, 'name', 'ru', ?),
            (?, 'name', 'uk', ?),
            (?, 'name', 'de', ?)`,
            [
                districtId, name_ru.trim(),
                districtId, name_uk.trim(),
                districtId, name_de.trim()
            ]
        );

        res.status(201).json({
            id: districtId,
            parent_id: cityId,
            path
        });

    } catch (error) {
        console.error("Error creating city district:", error);
        res.status(500).json({
            error: "Server error"
        });
    }
});

router.post("/", async (req, res) => {

    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const { path, parent_id,
            name_ru, name_uk, name_de, cityDistrict_ids,
            short_description_ru, short_description_uk, short_description_de
        } = req.body;

        if (!path || !parent_id
            || !name_ru || !name_uk || !name_de
            || !short_description_ru || !short_description_uk || !short_description_de) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }


        const [existingPath] = await db.query(
            "SELECT id FROM entities WHERE path = ?",
            [path]
        );

        if (existingPath.length > 0) {
            return res.status(400).json({
                error: "This path already exists"
            });
        }

        const [city] = await db.query(
            "SELECT id FROM entities WHERE id = ? AND type = 'city' AND is_active = 1",
            [parent_id]
        );

        if (city.length === 0) {
            return res.status(400).json({
                error: "City not found"
            });
        }


        let cityDistrictId = null;
        let extraCityDistrictIds = null;

        if (cityDistrict_ids !== undefined && !Array.isArray(cityDistrict_ids)) {
            return res.status(400).json({
                error: "Invalid city district list"
            });
        }

        const districtIds = cityDistrict_ids || [];

        if (districtIds.length > 0) {
            const ids = districtIds.map(Number);

            if (ids.some(id => !Number.isInteger(id) || id <= 0)) {
                return res.status(400).json({
                    error: "Invalid city district ID"
                });
            }

            if (new Set(ids).size !== ids.length) {
                return res.status(400).json({
                    error: "Duplicate city district IDs"
                });
            }

            const placeholders = ids.map(() => "?").join(", ");

            const [districts] = await db.query(
                `SELECT id FROM entities
                WHERE type = 'cityDistrict'
                AND parent_id = ?
                AND id IN (${placeholders})`,
                [city[0].id, ...ids]
            );

            if (districts.length !== ids.length) {
                return res.status(400).json({
                    error: "One or more city districts do not belong to this city"
                });
            }

            cityDistrictId = ids[0];

            if (ids.length > 1) {
                extraCityDistrictIds = ids.slice(1).join(",");
            }
        }

        const location = await getLocation(city[0].id);

        const [result] = await db.query(
            "INSERT INTO entities (path, parent_id, type, is_active) VALUES (?, ?, 'attraction', 1)",
            [path, parent_id]
        );

        await db.query(
            `INSERT INTO content (entity_id, block_key, language, content)
            VALUES
            (?, 'name', 'ru', ?),
            (?, 'name', 'uk', ?),
            (?, 'name', 'de', ?)`,
            [
                result.insertId, name_ru,
                result.insertId, name_uk,
                result.insertId, name_de
            ]
        );

        await db.query(
            `INSERT INTO content (entity_id, block_key, language, content)
            VALUES
            (?, 'short_description', 'ru', ?),
            (?, 'short_description', 'uk', ?),
            (?, 'short_description', 'de', ?)`,
            [
                result.insertId, short_description_ru,
                result.insertId, short_description_uk,
                result.insertId, short_description_de
            ]
        );


        await db.query(
            `INSERT INTO entity_locations
            (entity_id, country_id, region_id, district_id, subRegion_id, city_id, cityDistrict_id, extra_cityDistrict_ids)
            VALUES
            (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                result.insertId,
                location.country_id,
                location.region_id,
                location.district_id,
                location.subRegion_id,
                location.city_id,
                cityDistrictId,
                extraCityDistrictIds
            ]
        );

        res.status(201).json({
            id: result.insertId,
            path: path,
            parent_id: parent_id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;