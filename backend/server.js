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

// запрос 
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

    // 2. blocks (ГЛАВНОЕ ИЗМЕНЕНИЕ)
    const [blocksRows] = await db.query(
      `
SELECT
    b.block_key,
    b.sort_order,
    b.settings,
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

    const blocks = blocksRows.map(b => {
      let settings = null;

      try {
        settings =
          typeof b.settings === "string"
            ? JSON.parse(b.settings)
            : b.settings;
      } catch {
        settings = null;
      }

      return {
        block_key: b.block_key,
        content: b.content,
        sort_order: b.sort_order,
        settings
      };
    });

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
  SELECT title, description, og_title, og_description, og_image
  FROM entity_meta
  WHERE entity_id = ?
    AND language = ?
  LIMIT 1
  `,
  [country.id, lang]
);

const meta = metaRows[0] || null;

    // 4. response
    res.json({
      ...country,
      blocks,
      regions,
      meta
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

// запуск сервера
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});