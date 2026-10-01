const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");
const getLocation = require("../repositories/getLocation");

const router = express.Router();

router.get("/:eventPath", async (req, res) => {

    try {

        const { eventPath } = req.params;
        const lang = req.query.lang || "ru";

        // 1. MAIN EVENT

        const [eventRows] = await db.query(
            `
            SELECT
                e.id,
                e.path,
                e.is_active
            FROM entities e
            WHERE e.path = ?
                AND e.type = 'event'
                AND e.is_active = 1
            LIMIT 1
            `,
            [eventPath]
        );

        if (!eventRows.length) {
            return res.json(null);
        }

        const event = eventRows[0];

        const blockType = "event";

        // 2. BLOCKS

        const blocks = await getBlocks(db, event.id, lang, blockType);

        // 3. META

        const meta = await getMeta(db, event.id, lang);

        // 4. PHOTOS

        const { photos, mainPhoto } = await getEntityPhotos(db, event.id);

        // 5. ATTRIBUTES

        const [attributeRows] = await db.query(
            `
    SELECT
        attribute_group,
        value

    FROM entity_attributes

    WHERE entity_id = ?
    `,
            [event.id]
        );

        const attributes = {
            type: null,
            season: null
        };

        for (const row of attributeRows) {

            if (row.attribute_group === "type") {
                attributes.type = row.value;
            }

            if (row.attribute_group === "season") {
                attributes.season = row.value;
            }
        }

        // 6. LOCATION
        const location = await getLocation(db, event.id, lang);

        // 7. RESPONSE

        res.json({

            id: event.id,
            path: event.path,
            is_active: Boolean(event.is_active),

            blocks,

            meta,

            photos, 
            mainPhoto,

            type: attributes.type,
            season: attributes.season,

            location

        });

    } catch (err) {
        console.error("ERROR:", err);
        console.error("MESSAGE:", err.message);

        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;