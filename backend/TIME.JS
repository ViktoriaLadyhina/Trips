// REGION API
app.get("/api/region/:path", async (req, res) => {
  try {
    const { path } = req.params;
    const lang = req.query.lang || "ru";

    // 1. ИЩЕМ РЕГИОН
    const [regionRows] = await db.query(
      `
      SELECT *
      FROM entities
      WHERE path = ?
      LIMIT 1
      `,
      [path]
    );

    if (!regionRows.length) {
      return res.status(404).json({
        message: "Region not found"
      });
    }

    const region = regionRows[0];

    // 2. BLOCK TYPE LOGIC
    let blockType = region.type;

    if (
      region.type === "land" ||
      region.type === "oblast" ||
      region.type === "canton"
    ) {
      blockType = "land";
    }

    // 3. BLOCKS
    const blocks = await getBlocks(db, region.id, lang, blockType);

    // 4. META
    const meta = await getMeta(db, region.id, lang);

    // 5. CHILD ENTITIES
    const [childrenRows] = await db.query(
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
      ORDER BY c.content
      `,
      [lang, region.id]
    );

    // 6. REGIONS / CITIES
    const discriptRegions = childrenRows
      .filter(item => item.type === "district")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

    const cities = childrenRows
      .filter(item => item.type === "city")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

    const communes = childrenRows
      .filter(item => item.type === "commune")
      .map(item => ({
        id: item.id,
        path: item.path,
        type: item.type,
        is_active: Boolean(item.is_active),
        name: item.name || ""
      }));

    // 7. PHOTOS (NEW SYSTEM)
    const { photos, mainPhoto } = await getEntityPhotos(db, region.id);

    // 8. RESPONSE
    res.json({
      id: region.id,
      type: region.type,
      path: region.path,
      parent_id: region.parent_id,
      is_active: Boolean(region.is_active),

      blocks,

      discriptRegions,
      cities,
      communes,
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

// MAP CITIES LIST API
app.get("/api/map/cities/:path", async (req, res) => {
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

// DISCRIPT API
app.get("/api/district/:path", async (req, res) => {
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

// SUBREGIONS API
app.get("/api/subregions/:districtPath", async (req, res) => {
  try {
    const { districtPath } = req.params;
    const lang = req.query.lang || "ru";

    // 1. district
    const [districtRows] = await db.query(
      `
      SELECT id
      FROM entities
      WHERE path = ?
      LIMIT 1
      `,
      [districtPath]
    );

    if (!districtRows.length) {
      return res.status(404).json({
        message: "District not found"
      });
    }

    const districtId = districtRows[0].id;

    // 2. subregions
    const [subRegionRows] = await db.query(
      `
      SELECT id, path, type, is_active
      FROM entities
      WHERE parent_id = ?
      `,
      [districtId]
    );

    if (!subRegionRows.length) {
      return res.json([]);
    }

    const subRegionIds = subRegionRows.map(item => item.id);

    // 3. blocks template
    const [blockRows] = await db.query(
      `
      SELECT block_key, sort_order
      FROM blocks
      WHERE entity_type = 'subRegion'
      ORDER BY sort_order
      `
    );

    // 4. content
    const [contentRows] = await db.query(
      `
      SELECT entity_id, block_key, content
      FROM content
      WHERE entity_id IN (?)
      AND language = ?
      `,
      [subRegionIds, lang]
    );

    // 5. photos
    const [photosRows] = await db.query(
      `
  SELECT
    entity_id,
    id,
    path,
    title_ru,
    title_uk,
    title_de
  FROM entity_photos
  WHERE entity_id IN (?)
  `,
      [subRegionIds]
    );

    // 6. build result
    const subRegions = subRegionRows.map(subregion => {

      const entityContent = contentRows.filter(
        item => item.entity_id === subregion.id
      );

      const blocks = blockRows.map(block => {
        const found = entityContent.find(
          item => item.block_key === block.block_key
        );

        return {
          block_key: block.block_key,
          sort_order: block.sort_order,
          content: found ? found.content : ""
        };
      });

      const photosMap = Object.fromEntries(
        photosRows.map(photo => [
          photo.entity_id,
          {
            id: photo.id,
            path: photo.path,
            title: {
              ru: photo.title_ru,
              uk: photo.title_uk,
              de: photo.title_de
            }
          }
        ])
      );

      return {
        id: subregion.id,
        path: subregion.path,
        type: subregion.type,
        is_active: subregion.is_active,
        blocks,
        emblem: photosMap[subregion.id] || null
      };
    });
    res.json(subRegions);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// SUBREGION CITIES API 
app.get("/api/subregionCities/:subregionId", async (req, res) => {
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