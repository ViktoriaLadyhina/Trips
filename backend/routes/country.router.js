const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");

const router = express.Router();

router.get("/:path", async (req, res) => {
  try {
    const { path } = req.params;
    const lang = req.query.lang || "ru";

    // 1. страна
    const [countryRows] = await db.query(
      "SELECT * FROM entities WHERE path = ? AND type = 'country' LIMIT 1",
      [path]
    );

    if (!countryRows.length) {
      return res.status(404).json({ message: "Country not found" });
    }

    const country = countryRows[0];

    // 2. blocks
    const blocks = await getBlocks(db, country.id, lang, "country");

    // 3. regions
    const [regionsRows] = await db.query(
      `
SELECT 
    e.id,
    e.path,
    e.type,
    e.is_active,
    c.content AS name
FROM entities e
LEFT JOIN content c
    ON c.entity_id = e.id
    AND c.block_key = 'name'
    AND c.language = ?
WHERE e.parent_id = ?
AND e.type != 'route'
`,
      [lang, country.id]
    );

    const regions = regionsRows.map(r => ({
      id: r.id,
      path: r.path,
      type: r.type,
      is_active: Boolean(r.is_active),
      name: r.name || ""
    }));

        // 4. routes
    const [routesRows] = await db.query(
        `
        SELECT
            e.id,
            e.path,
            e.is_active,

            name.content AS name,
            short_description.content AS short_description,
            routeLength.content AS routeLength

        FROM entities e

        LEFT JOIN content name
            ON name.entity_id = e.id
            AND name.block_key = 'name'
            AND name.language = ?

        LEFT JOIN content short_description
            ON short_description.entity_id = e.id
            AND short_description.block_key = 'short_description'
            AND short_description.language = ?

        LEFT JOIN content routeLength
            ON routeLength.entity_id = e.id
            AND routeLength.block_key = 'routeLength'
            AND routeLength.language = ?

        WHERE e.parent_id = ?
          AND e.type = 'route'
          AND e.is_active = 1
        `,
        [
            lang,
            lang,
            lang,
            country.id
        ]
    );

const routes = routesRows.map(r => ({
    id: r.id,
    path: r.path,
    is_active: Boolean(r.is_active),
    name: r.name || null,
    short_description: r.short_description || null,
    routeLength: r.routeLength || null
}));

    // 5. META
    const meta = await getMeta(db, country.id, lang);

    // 6. PHOTO
    const { photos, mainPhoto } = await getEntityPhotos(db, country.id);

    // 7. response
    res.json({
      ...country,
      blocks,
      regions,
      routes,
      meta,
      photos,
      mainPhoto
    });

  } catch (err) {
    console.error("ERROR:", err);
    console.error("MESSAGE:", err.message);
    console.error("STACK:", err.stack);

    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

module.exports = router;