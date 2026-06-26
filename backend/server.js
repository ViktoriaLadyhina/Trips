const express = require("express");
const cors = require("cors");
if (!process.env.RAILWAY_ENVIRONMENT) {
  require("dotenv").config();
}

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-domain.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log("🔥 GLOBAL HIT");
  next();
});

app.get("/ping", (req, res) => {
  console.log("PING HIT");
  res.send("ok");
});


// DB
let db;

  const mysql = require("mysql2/promise");

  db = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: Number(process.env.MYSQLPORT)
  });


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
   console.log("🔥 COUNTRIES ROUTE HIT");
  try {
    const lang = req.query.lang || "ru";
    console.log("req.query.lang - ", req.query.lang);

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

// запуск сервера
const PORT = process.env.PORT;
console.log("ENV PORT =", process.env.PORT);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
})