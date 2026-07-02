const express = require("express");
const db = require("../db");
const { normalize } = require("../utils/normalize");

const router = express.Router();

router.get("/mysql", async (req, res) => {
  try {
    const lang = req.query.lang || "ru";

    // 1. GRAPH 
    const [entities] = await db.query(`
      SELECT
        id,
        type,
        path,
        parent_id,
        is_active
      FROM entities
      WHERE is_active = 1
    `);

    // 2. CONTENT 
    const [contentRows] = await db.query(
      `
      SELECT
        e.id,
        c.content as name,
        m.title,
        m.description,
        m.og_description,
        m.keywords
      FROM entities e
      LEFT JOIN content c
        ON c.entity_id = e.id
        AND c.block_key = 'name'
        AND c.language = ?
      LEFT JOIN entity_meta m
        ON m.entity_id = e.id
        AND m.language = ?
    `,
      [lang, lang]
    );

    // 3. maps
    const entityMap = Object.fromEntries(
      entities.map(e => [e.id, e])
    );

    const contentMap = Object.fromEntries(
      contentRows.map(r => [r.id, r])
    );

      const normalizeType = (type) => {
    switch (type) {
      case "oblast":
      case "canton":
      case "land":
        return "region";
      default:
        return type;
    }
  };
  
    // 4. buildPaths
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

    const type = normalizeType(current.type);

    switch (type) {
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

    const parent = current.parent_id
      ? entityMap[current.parent_id]
      : null;

    if (!parent && current.parent_id) {
      console.warn("BROKEN CHAIN:", current.parent_id);
    }

    current = parent;
  }

  return result;
}

    // 5. merge
    const mysqlIndex = entities.map(entity => {
      const content = contentMap[entity.id] || {};
      const paths = buildPaths(entity);

      const name = content.title || content.name || "";
      const description = content.description || content.og_description || "";
      const keywords = content.keywords || "";
      const searchText = normalize(
        `${name} ${content.title || ""} ${description} ${keywords}`
      );

      return {
        id: entity.id,
        type: normalizeType(entity.type),
        path: entity.path,

        name,
        description,
        keywords,

        searchText,

        ...paths,

        source: "mysql"
      };
    });

    res.json({ results: mysqlIndex });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;