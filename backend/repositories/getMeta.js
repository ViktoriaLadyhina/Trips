async function getMeta(db, entityId, lang) {
  const [rows] = await db.query(
    `
    SELECT
      em.title,
      em.description,
      em.og_title,
      em.og_description,
      ep.path AS og_image
    FROM entity_meta em
    LEFT JOIN entity_photos ep
      ON ep.id = em.og_image
    WHERE em.entity_id = ?
      AND em.language = ?
    LIMIT 1
    `,
    [entityId, lang]
  );

  return rows[0] || null;
}

module.exports = getMeta;