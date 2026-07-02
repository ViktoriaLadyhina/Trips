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
    const blocks = await getBlocks(db, region.id, lang, blockType);

    // 4. META
    const meta = await getMeta(db, region.id, lang);

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

    // 6. REGIONS / CITIES
    const discriptRegions = childrenRows
      .filter(item => item.type === "district")
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
    const { photos, mainPhoto } = await getEntityPhotos(db, region.id);

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

module.exports = router;