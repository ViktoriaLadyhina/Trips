const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");
const getLocation = require("../repositories/getLocation");
const getUnesco = require("../repositories/getUnesco");
const getAttractionCardData = require("../repositories/getAttractionCardData");

const router = express.Router();

router.get("/:attrPath", async (req, res) => {

    try {

        const { attrPath } = req.params;
        const lang = req.query.lang || "ru";

        // 1. MAIN ATTRACTION

        const [attrRows] = await db.query(
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
            [attrPath]
        );

        if (!attrRows.length) {
            return res.status(404).json({
                message: "Attraction not found"
            });
        }

        const attr = attrRows[0];

        const blockType = "attraction";

        // 2. BLOCKS

        const blocks = await getBlocks(db, attr.id, lang, blockType);

        // 3. META

        const meta = await getMeta(db, attr.id, lang);

        // 4. PHOTOS

        const { photos, mainPhoto } = await getEntityPhotos(db, attr.id);

        // 5. ATTRIBUTES

        const [attributeRows] = await db.query(
            `
            SELECT
                attribute_group,
                value

            FROM entity_attributes

            WHERE entity_id = ?
            `,
            [attr.id]
        );

        const attributes = {
            type: [],
            rating: null,
            status: null
        };

        for (const row of attributeRows) {

            if (row.attribute_group === "type") {
                attributes.type.push(row.value);
            }

            if (row.attribute_group === "rating") {
                attributes.rating = row.value;
            }

            if (row.attribute_group === "status") {
                attributes.status = row.value;
            }
        }

        // 6. LOCATION + UNESCO

        const location = await getLocation(db, attr.id, lang);

        const unesco_status = await getUnesco(db, attr.id);

        // 7. SUBOBJECT RELATIONS

        const [relationsRows] = await db.query(
            `
            SELECT
                child_id

            FROM entity_relations

            WHERE parent_id = ?
              AND relation = 'contains'
            `,
            [attr.id]
        );

        const childIds = relationsRows.map(row => row.child_id);

        // 8. SUBOBJECT CARDS

        const subObjects = await getAttractionCardData(db, childIds, lang);

        // 9. ADD SUBOBJECT PHOTOS

        const subObjectPhotos = subObjects
            .map(subObject => subObject.fotoCard)
            .filter(Boolean);

        const allPhotos = [
            ...photos,
            ...subObjectPhotos
        ].filter(
            (photo, index, array) =>
                index === array.findIndex(
                    item => item.id === photo.id
                )
        );

        // 10. RESPONSE

        res.json({

            id: attr.id,

            type: attr.type,
            path: attr.path,
            parent_id: attr.parent_id,
            is_active: Boolean(attr.is_active),

            coord:
                attr.latitude !== null &&
                    attr.longitude !== null
                    ? {
                        lat: Number(attr.latitude),
                        lng: Number(attr.longitude)
                    }
                    : null,

            blocks,

            meta,

            photos: allPhotos,
            mainPhoto,

            attributes,

            location,

            unesco_status,

            subObjects

        });

    } catch (err) {
        console.error("ERROR:", err);
        console.error("MESSAGE:", err.message);

        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;