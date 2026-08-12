const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");
const getAttractionCardData = require("../repositories/getAttractionCardData");

const router = express.Router();

router.get("/:routPath", async (req, res) => {

    try {

        const { routPath } = req.params;
        const lang = req.query.lang || "ru";

        // 1. MAIN ROUTES

        const [routRows] = await db.query(
            `
            SELECT
                e.id,
                e.type,
                e.path,
                e.parent_id,
                e.is_active,

                c.latitude,
                c.longitude

            FROM entities e

            LEFT JOIN entity_coordinates c
                ON c.entity_id = e.id

            WHERE e.path = ?
            LIMIT 1
            `,
            [routPath]
        );

        if (!routRows.length) {
            return res.json(null);
        }

        const rout = routRows[0];

        const blockType = "route";

        // 2. BLOCKS

        const blocks = await getBlocks(db, rout.id, lang, blockType);

        // 3. META
        const meta = await getMeta(db, rout.id, lang);

        // 4. PHOTOS
        const { photos, mainPhoto } = await getEntityPhotos(db, rout.id);

        // 5. ATTRIBUTES
        const [attributeRows] = await db.query(
            `
    SELECT
        attribute_group,
        value

    FROM entity_attributes

    WHERE entity_id = ?
    `,
            [rout.id]
        );

        const attributes = {
            mapOpen: null
        };

        for (const row of attributeRows) {

            if (row.attribute_group === "mapOpen") {
                attributes.mapOpen = row.value;
            }
        }

        // 6. LOCATION

        const [countryRows] = await db.query(
            `
    SELECT
        country.path AS countryPath,
        name.content AS countryName

    FROM entity_locations AS l

    LEFT JOIN entities AS country
        ON country.id = l.country_id

    LEFT JOIN content AS name
        ON name.entity_id = l.country_id
        AND name.block_key = 'name'
        AND name.language = ?

    WHERE l.entity_id = ?
    LIMIT 1
    `,
            [lang, rout.id]
        );

        const country = countryRows[0] || null;

        // 7. SUBOBJECT 

        const [routeAttractions] = await db.query(
            `
    SELECT entity_id
    FROM entity_attributes
    WHERE attribute_group = 'routes'
      AND value = ?
    `,
            [rout.path]
        );

        const attrIds = routeAttractions.map(row => row.entity_id);

        // 8. SUBOBJECT CARDS
        const subObjects = await getAttractionCardData(db, attrIds, lang);

        // 9. ADD SUBOBJECT PHOTOS
        const subObjectPhotos = subObjects
            .map(subObject => subObject.fotoCard)
            .filter(Boolean);

        const allPhotos = [
            ...photos.filter(photo => photo.sort_order !== 0),
            ...subObjectPhotos
        ].filter(
            (photo, index, array) =>
                index === array.findIndex(
                    item => item.id === photo.id
                )
        );

        const plan = photos.find(photo => photo.sort_order === 0) || null;

        // 10. RESPONSE

        res.json({

            id: rout.id,

            type: rout.type,
            path: rout.path,
            parent_id: rout.parent_id,
            is_active: Boolean(rout.is_active),

            coord:
                rout.latitude !== null &&
                    rout.longitude !== null
                    ? {
                        lat: Number(rout.latitude),
                        lng: Number(rout.longitude)
                    }
                    : null,

            blocks,

            meta,

            photos: allPhotos,
            mainPhoto,
            plan,

            mapOpen: attributes.mapOpen,

            countryName: country?.countryName || null,
            countryPath: country?.countryPath || null,

            subObjects

        });

    } catch (err) {
        console.error("ERROR:", err);
        console.error("MESSAGE:", err.message);

        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;