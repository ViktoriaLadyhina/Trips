const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/:districtPath", async (req, res) => {
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

module.exports = router;