const express = require("express");
const db = require("../db");
const { normalize } = require("../utils/normalize");

const router = express.Router();

router.get("/mysql", async (req, res) => {
  try {
    const lang = req.query.lang || "ru";

    const [rows] = await db.query(
      `
      SELECT
        e.id,
        e.type,
        e.path,
        e.parent_id,
        c.content as name,
        m.title,
        m.description,
        m.keywords,
        m.og_description
      FROM entities e

      LEFT JOIN content c
      ON c.entity_id = e.id
      AND c.block_key = 'name'
      AND c.language = ?

      LEFT JOIN entity_meta m
      ON m.entity_id = e.id
      AND m.language = ?

      WHERE e.is_active = 1
      `,
      [lang, lang]
    );

    const entityMap = Object.fromEntries(
      rows.map(r => [r.id, r])
    );

    function buildPaths(entity) {
      let current = entity;

      const result = {
        countryPath: null,
        regionPath: null,
        districtPath: null,
        cityPath: null,
      };

      const visited = new Set();

      while (current && !visited.has(current.id)) {
        visited.add(current.id);

        switch (current.type) {
          case "country":
            result.countryPath = current.path;
            break;
          case "region":
            result.regionPath = current.path;
            break;
          case "district":
            result.districtPath = current.path;
            break;
          case "city":
            result.cityPath = current.path;
            break;
        }

        current = current.parent_id
          ? entityMap[current.parent_id]
          : null;
      }

      return result;
    }

    const mysqlIndex = rows.map(item => {
      const paths = buildPaths(item);

      const searchText = normalize(`
    ${item.name || ""}
    ${item.title || ""}
    ${item.description || ""}
    ${item.keywords || ""}
    ${item.og_description || ""}
  `);

      return {
        id: item.id,
        type: item.type,
        name: item.name || item.title || "",
        description: item.description || item.og_description || "",
        keywords: item.keywords || "",
        path: item.path,
        searchText,
        ...paths,
        source: "mysql"
      };
    });

    res.json({
      results: mysqlIndex
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;