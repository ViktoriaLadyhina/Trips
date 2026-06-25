const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-domain.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use((req, res, next) => {
  console.log("➡️ REQUEST:", req.method, req.url);
  next();
});

app.use(express.json());


// DB
let db;

if (process.env.DB_HOST) {
  const mysql = require("mysql2/promise");

  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    ssl: { rejectUnauthorized: false }
  });

db.query("SELECT 1")
  .then(() => console.log("DB CONNECTED"))
  .catch(err => {
    console.log("DB ERROR FULL:", {
      message: err.message,
      code: err.code,
      errno: err.errno,
      address: err.address,
      port: err.port,
      errors: err.errors
    });
  });
}

const getMeta = require("./services/getMeta");
const getEntityPhotos = require("./services/getPhotos");
const getBlocks = require("./services/getBlocks");

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
    const blocks = await getBlocks(db, country.id, lang, "country");

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
    const meta = await getMeta(db, country.id, lang);

    // PHOTO
    const { photos, mainPhoto } = await getEntityPhotos(db, country.id);

    // 4. response
    res.json({
      ...country,
      blocks,
      regions,
      meta,
      photos,
      mainPhoto
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
  console.error("COUNTRIES ERROR:", err);

  res.status(500).json({
    message: err.message,
    code: err.code,
    sqlMessage: err.sqlMessage
  });
}
});

// запуск сервера
const PORT = process.env.PORT || 8080;

console.log("🔥 BEFORE LISTEN");

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
})