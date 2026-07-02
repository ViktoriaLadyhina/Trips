const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/:districtPath", async (req, res) => {
  try {
    const { subregionId } = req.params;
    const lang = req.query.lang || "ru";

    // 1. города внутри сабрегиона
    const [cityRows] = await db.query(
      `
      SELECT id, path, is_active
      FROM entities
      WHERE parent_id = ?
      `,
      [subregionId]
    );

    if (!cityRows.length) {
      return res.json([]);
    }

    const cityIds = cityRows.map(c => c.id);

    // 2. имена городов
    const [contentRows] = await db.query(
      `
      SELECT entity_id, content
      FROM content
      WHERE entity_id IN (?)
        AND block_key = 'name'
        AND language = ?
      `,
      [cityIds, lang]
    );

    // 3. map для быстрого доступа
    const nameMap = Object.fromEntries(
      contentRows.map(c => [c.entity_id, c.content])
    );

    // 4. сборка результата
    const cities = cityRows.map(city => ({
      id: city.id,
      path: city.path,
      is_active: city.is_active,
      name: nameMap[city.id] || ""
    }));

    res.json(cities);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});


module.exports = router;