// Возвращает блоки страницы с переведенным контентом для одной сущности.

async function getBlocks(db, entityId, lang, blockType) {
  const [rows] = await db.query(
    `
SELECT
  b.block_key,
  b.sort_order,
  c.content
FROM blocks b
LEFT JOIN content c
  ON c.block_key = b.block_key
  AND c.entity_id = ?
  AND c.language = ?
WHERE b.entity_type = ?
ORDER BY b.sort_order
    `,
    [entityId, lang, blockType]
  );

  return rows.map(row => ({
    block_key: row.block_key,
    sort_order: row.sort_order,
    content: row.content || ""
  }));
}

module.exports = getBlocks;