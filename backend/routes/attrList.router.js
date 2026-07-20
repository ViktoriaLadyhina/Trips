const express = require("express");
const db = require("../db");

const getAttractionCardData = require("../repositories/getAttractionCardData");

const router = express.Router();

router.get("/:entityPath", async (req, res) => {

    try {

        const { entityPath } = req.params;
        const lang = req.query.lang || "ru";

        // 1. PARENT

        const [parentRows] = await db.query(
            `
            SELECT
                id,
                type
            FROM entities
            WHERE path = ?
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

        let parentType = parent.type;

        if (
            parent.type === "land" ||
            parent.type === "oblast" ||
            parent.type === "canton"
        ) {
            parentType = "region";
        }

        const locationFields = {
            country: "country_id",
            region: "region_id",
            district: "district_id",
            city: "city_id"
        };

        const field = locationFields[parentType];

        if (!field) {
            return res.status(400).json({
                message: `Unsupported parent type: ${parent.type}`
            });
        }

        // 2. ATTRACTION IDS

        const [attrRows] = await db.query(
            `
            SELECT
                e.id

            FROM entity_locations l

            JOIN entities e
                ON e.id = l.entity_id

            WHERE ${field} = ?
              AND e.type = 'attraction'
            `,
            [parent.id]
        );

        if (!attrRows.length) {
            return res.json({
                parent: {
                    id: parent.id,
                    type: parent.type
                },
                attractions: []
            });
        }

        const attrIds =
            attrRows.map(row => row.id);

        // 3. ATTRACTION CARD DATA

        const attractions = await getAttractionCardData( db, attrIds, lang );

        // 4. RELATIONS / SUBOBJECTS

        const placeholders = attrIds.map(() => "?").join(",");

        const [relationsRows] = await db.query(
            `
            SELECT
                parent_id,
                child_id

            FROM entity_relations

            WHERE parent_id IN (${placeholders})
              AND relation = 'contains'
            `,
            attrIds
        );

        const childIds = [
            ...new Set(
                relationsRows.map(row => row.child_id)
            )
        ];

        let subObjectsByParent = {};

        if (childIds.length) {

            const childPlaceholders =
                childIds
                    .map(() => "?")
                    .join(",");

            const [childRows] = await db.query(
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

            const childContentByEntity =
                Object.fromEntries(
                    childRows.map(row => [
                        row.entity_id,
                        row.content
                    ])
                );

            for (const relation of relationsRows) {

                if (!subObjectsByParent[relation.parent_id]) {
                    subObjectsByParent[relation.parent_id] = [];
                }

                subObjectsByParent[relation.parent_id].push({
                    id: relation.child_id,

                    description:
                        childContentByEntity[
                            relation.child_id
                        ] || null
                });
            }
        }

        // 5. ADD SUBOBJECTS

        const attractionsWithSubObjects =
            attractions.map(attraction => ({

                ...attraction,

                subObjects:
                    subObjectsByParent[attraction.id] || []

            }));


        // RESPONSE

        res.json({

            parent: {
                id: parent.id,
                type: parent.type
            },

            attractions:
                attractionsWithSubObjects

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