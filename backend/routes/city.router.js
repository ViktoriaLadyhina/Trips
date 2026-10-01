const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");
const getCityRecommendations = require("../repositories/getCityRecommendations");

const router = express.Router();

router.get("/:cityPath", async (req, res) => {
  try {
    const { cityPath } = req.params;
    const lang = req.query.lang || "ru";

    // 1. ИЩЕМ город
    const [cityRows] = await db.query(
      `
SELECT 
  c.*,
  p.id AS parent_id,
  p.path AS parent_path
FROM entities c
LEFT JOIN entities p
  ON c.parent_id = p.id
WHERE c.path = ?
LIMIT 1
      `,
      [cityPath]
    );

    if (!cityRows.length) {
      return res.status(404).json({
        message: "City not found"
      });
    }

    const city = cityRows[0];
    const blockType = city.type || "city";

    // 2. BLOCKS
    const blocks = await getBlocks(db, city.id, lang, blockType);

    // 3. META
    const meta = await getMeta(db, city.id, lang);

    // 4. PHOTOS
    const { photos, mainPhoto } = await getEntityPhotos(db, city.id);

    // 5. RECOMMENDATIONS
    const recommendations = await getCityRecommendations(db, city.id, lang);

    // 6. EVENTS
   const [eventRows] = await db.query(
    `
    SELECT
        e.id,
        e.path
    FROM entities e
    JOIN entity_locations l
        ON l.entity_id = e.id
    WHERE l.city_id = ?
        AND e.type = 'event'
        AND e.is_active = 1

    UNION

    SELECT
        e.id,
        e.path
    FROM entity_relations r
    JOIN entities e
        ON e.id = r.child_id
    WHERE r.parent_id = ?
        AND r.relation = 'region_event'
        AND e.type = 'event'
        AND e.is_active = 1
    `,
    [city.id, city.id]
);

const eventIds = eventRows.map(row => row.id);

let eventContentRows = [];

if (eventIds.length) {

    const placeholders = eventIds.map(() => "?").join(",");

    [eventContentRows] = await db.query(
        `
        SELECT
            entity_id,
            block_key,
            content
        FROM content
        WHERE entity_id IN (${placeholders})
            AND language = ?
            AND block_key IN (
                'name',
                'short_description',
                'date'
            )
        `,
        [...eventIds, lang]
    );
}

const eventData = {};

for (const row of eventContentRows) {

    if (!eventData[row.entity_id]) {
        eventData[row.entity_id] = {};
    }

    eventData[row.entity_id][row.block_key] = row.content;
}

const cityEvents = eventRows.map(event => ({
    id: event.id,
    path: event.path,
    name: eventData[event.id]?.name || "",
    short_description: eventData[event.id]?.short_description || "",
    date: eventData[event.id]?.date || ""
}));

    // 7. RESPONSE
    res.json({
      id: city.id,
      type: city.type,
      path: city.path,
      parent_id: city.parent_id,
      parent_path: city.parent_path,
      is_active: Boolean(city.is_active),

      blocks,
      meta,

      photos,
      mainPhoto,

      recommendations,
      cityEvents
    });

  } catch (err) {
    console.error("ERROR:", err);
    console.error("MESSAGE:", err.message);

    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

module.exports = router;