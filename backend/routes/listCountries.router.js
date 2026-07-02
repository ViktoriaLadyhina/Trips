const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
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

    if (!Array.isArray(countryIds) || countryIds.length === 0) {
  return res.json([]);
}

    const placeholders = countryIds.map(() => '?').join(',');

    const [photosRows] = await db.query(`
  SELECT
    id,
    entity_id,
    path,
    is_main
  FROM entity_photos
  WHERE entity_id IN (${placeholders})
    AND is_main = 1
`, countryIds);

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
  console.error("COUNTRIES ERROR FULL:", err);
  console.error("STACK:", err.stack);
  console.log("DB EXISTS:", !!db);
console.log("DB TYPE:", typeof db);

  res.status(500).json({
    message: err.message,
    code: err.code,
    sqlMessage: err.sqlMessage,
    stack: err.stack
  });
}
});

module.exports = router;