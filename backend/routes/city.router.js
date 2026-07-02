const express = require("express");
const db = require("../db");

const getBlocks = require("../repositories/getBlocks");
const getMeta = require("../repositories/getMeta");
const getEntityPhotos = require("../repositories/getPhotos");

const router = express.Router();

router.get("/:cityPath", async (req, res) => {
 try {
    const { cityPath } = req.params;
    const lang = req.query.lang || "ru";

    // 1. ИЩЕМ РЕГИОН
    const [cityRows] = await db.query(
      `
      SELECT *
      FROM entities
      WHERE path = ?
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

    // 3. BLOCKS
    const blocks = await getBlocks(db, city.id, lang, blockType);

    // 4. META
    const meta = await getMeta(db, city.id, lang);

    // 5. PHOTOS (NEW SYSTEM)
    const { photos, mainPhoto } = await getEntityPhotos(db, city.id);

    // 8. RESPONSE
    res.json({
      id: city.id,
      type: city.type,
      path: city.path,
      parent_id: city.parent_id,
      is_active: Boolean(city.is_active),

      blocks,
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