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

    // 1. DISTRICT
    const [districtRows] = await db.query(
      `
      SELECT *
      FROM entities
      WHERE path = ?
        AND type = 'district'
      LIMIT 1
      `,
      [path]
    );

    if (!districtRows.length) {
      return res.status(404).json({ message: "District not found" });
    }

    const district = districtRows[0];

    // 2. BLOCKS
   const blocks = await getBlocks(db, district.id, lang, "district");
   
    // 3. META
    const meta = await getMeta(db, district.id, lang);

    // 4. PHOTOS
    const { photos, mainPhoto } = await getEntityPhotos(db, district.id);

    // 5. RESPONSE (CLEAN)
    res.json({
      id: district.id,
      type: district.type,
      path: district.path,
      parent_id: district.parent_id,
      is_active: Boolean(district.is_active),

      blocks,
      meta,
      photos,
      mainPhoto
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

module.exports = router;