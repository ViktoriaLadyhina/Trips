const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// DB
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise();

// COUNTRY API
app.get("/api/country/:path", async (req, res) => {
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
    const [blocksRows] = await db.query(
      `
SELECT
    b.block_key,
    b.sort_order,
    (
        SELECT c.content
        FROM content c
        WHERE c.block_key = b.block_key
          AND c.entity_id = ?
          AND c.language = ?
        LIMIT 1
    ) AS content
FROM blocks b
WHERE b.entity_type = 'country'
ORDER BY b.sort_order ASC
`,
      [country.id, lang]
    );

const blocks = blocksRows.map(b => ({
  block_key: b.block_key,
  content: b.content,
  sort_order: b.sort_order
}));

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

    // META
    const [metaRows] = await db.query(
      `
SELECT
    em.title,
    em.description,
    em.og_title,
    em.og_description,
    ep.path AS og_image
FROM entity_meta em
LEFT JOIN entity_photos ep
    ON ep.id = em.og_image
WHERE em.entity_id = ?
  AND em.language = ?
LIMIT 1;
      `,
      [country.id, lang]
    );

    const meta = metaRows[0] || null;
console.log(metaRows);
    // PHOTO
    const [photosRows] = await db.query(
      `
  SELECT
    id,
    entity_id,
    path,
    sort_order,
    title_ru,
    title_uk,
    title_de,
    is_main
  FROM entity_photos
  WHERE entity_id = ?
  ORDER BY sort_order ASC
  `,
      [country.id]
    );

    const photos = photosRows.map(p => ({
      id: p.id,
      path: p.path,
      sort_order: p.sort_order,
      is_main: Boolean(p.is_main),
      title: {
        ru: p.title_ru,
        uk: p.title_uk,
        de: p.title_de
      }
    }));

    // 4. response
    res.json({
      ...country,
      blocks,
      regions,
      meta,
      photos
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

// COUNTRY LIST API
app.get("/api/countries", async (req, res) => {
  try {
    const lang = req.query.lang || "ru";

    const [rows] = await db.query(`
      SELECT
        e.id,
        e.path,
        c.content AS name
      FROM entities e
      LEFT JOIN content c
        ON c.entity_id = e.id
        AND c.block_key = 'name'
        AND c.language = ?
      WHERE e.type = 'country'
      ORDER BY e.id
    `, [lang]);

    const countryIds = rows.map(r => r.id);

    if (!countryIds.length) return res.json([]);

    const [photosRows] = await db.query(`
SELECT
  id,
  entity_id,
  path,
  is_main
FROM entity_photos
WHERE entity_id IN (?)
  AND is_main = 1
    `, [countryIds]);

    // группируем фото по стране
    const photosMap = {};

    for (const p of photosRows) {
      if (!photosMap[p.entity_id]) {
        photosMap[p.entity_id] = [];
      }

      photosMap[p.entity_id].push({
        id: p.id,
        path: p.path,
        is_main: Boolean(p.is_main)
      });
    }

    const result = rows.map(c => ({
      ...c,
      photos: photosMap[c.id] || []
    }));

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// REGION API
app.get("/api/region/:path", async (req, res) => {
  try {
    const { path } = req.params;
    const lang = req.query.lang || "ru";

    // 1. ИЩЕМ РЕГИОН
    const [regionRows] = await db.query(
      `
      SELECT *
      FROM entities
      WHERE path = ?
      LIMIT 1
      `,
      [path]
    );

    if (!regionRows.length) {
      return res.status(404).json({
        message: "Region not found"
      });
    }

    const region = regionRows[0];

    // 2. BLOCK TYPE LOGIC
    let blockType = region.type;

    if (
      region.type === "land" ||
      region.type === "oblast" ||
      region.type === "canton"
    ) {
      blockType = "land";
    }

    // 3. BLOCKS
    const [blocksRows] = await db.query(
      `
      SELECT
          b.block_key,
          b.sort_order,
          (
              SELECT c.content
              FROM content c
              WHERE c.entity_id = ?
                AND c.block_key = b.block_key
                AND c.language = ?
              LIMIT 1
          ) AS content
      FROM blocks b
      WHERE b.entity_type = ?
      ORDER BY b.sort_order
      `,
      [region.id, lang, blockType]
    );

const blocks = blocksRows.map(b => ({
  block_key: b.block_key,
  content: b.content,
  sort_order: b.sort_order
}));

    // 4. META
    const [metaRows] = await db.query(
      `
SELECT
    em.title,
    em.description,
    em.og_title,
    em.og_description,
    ep.path AS og_image
FROM entity_meta em
LEFT JOIN entity_photos ep
    ON ep.id = em.og_image
WHERE em.entity_id = ?
  AND em.language = ?
LIMIT 1;
      `,
      [region.id, lang]
    );

    const meta = metaRows[0] || null;

    // 5. CHILD ENTITIES
    const [childrenRows] = await db.query(
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
      ORDER BY c.content
      `,
      [lang, region.id]
    );

    // 6. SPLIT REGIONS / CITIES
    const discriptRegions = childrenRows
      .filter(item => item.type === "discript")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

    const cities = childrenRows
      .filter(item => item.type === "city")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

      const communes = childrenRows
      .filter(item => item.type === "commune")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

    // 7. PHOTOS (NEW SYSTEM)
    const [photosRows] = await db.query(
      `
      SELECT
        id,
        entity_id,
        path,
        sort_order,
        is_main,
        title_ru,
        title_uk,
        title_de
      FROM entity_photos
      WHERE entity_id = ?
      ORDER BY sort_order ASC
      `,
      [region.id]
    );

    const photos = photosRows.map(p => ({
      id: p.id,
      path: p.path,
      sort_order: p.sort_order,
      is_main: Boolean(p.is_main),
      title: {
        ru: p.title_ru,
        uk: p.title_uk,
        de: p.title_de
      }
    }));

    const mainPhoto =
      photos.find(p => p.is_main) ||
      photos[0] ||
      null;

    // 8. RESPONSE
    res.json({
      id: region.id,
      type: region.type,
      path: region.path,
      parent_id: region.parent_id,
      is_active: Boolean(region.is_active),

      blocks,

      discriptRegions,
      cities,
      communes,
      meta,

      photos,
      mainPhoto
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

// запуск сервера
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});