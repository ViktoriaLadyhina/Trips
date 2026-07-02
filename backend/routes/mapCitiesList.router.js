const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/:path", async (req, res) => {
  try {
    const { path } = req.params;
    const lang = req.query.lang || "ru";

    // 1. НАХОДИМ РОДИТЕЛЯ (district / region / land)
    const [parentRows] = await db.query(
      `
      SELECT id
      FROM entities
      WHERE path = ?
      LIMIT 1
      `,
      [path]
    );

    if (!parentRows.length) {
      return res.status(404).json({
        message: "Parent entity not found"
      });
    }

    const parentId = parentRows[0].id;

    // 2. БЕРЁМ ГОРОДА ПО parent_id
    const [rows] = await db.query(
      `
      SELECT
          e.id,
          e.path,
          e.is_active,
          c.content AS name
      FROM entities e
      LEFT JOIN content c
        ON c.entity_id = e.id
       AND c.block_key = 'name'
       AND c.language = ?
      WHERE e.parent_id = ?
        AND e.type = 'city'
      ORDER BY c.content
      `,
      [lang, parentId]
    );

    const cities = rows.map(r => ({
      id: r.id,
      path: r.path,
      name: r.name || "",
      is_active: Boolean(r.is_active)
    }));

    res.json({ cities });

  } catch (err) {
    console.error("MAP CITIES ERROR:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

module.exports = router;