async function getCityRecommendations(db, entityId, lang) {
    const [rows] = await db.query(
        `
        SELECT
    e.id,
    e.path,
    c.content AS name,
    p.path AS photo,
    JSON_ARRAYAGG(a.value) AS types -- собирает несколько значений в одно
FROM entities e

JOIN content c
    ON c.entity_id = e.id
    AND c.block_key = 'name'
    AND c.language = ?

JOIN entity_photos p
    ON p.entity_id = e.id
    AND p.is_main = 1

LEFT JOIN entity_attributes a
    ON a.entity_id = e.id
    AND a.attribute_group = 'type'

WHERE e.parent_id = ?
    AND e.type = 'attraction'
    AND e.is_active = 1

GROUP BY
    e.id,
    e.path,
    c.content,
    p.path;
        `,
        [lang, entityId]
    );

    return rows;
}

module.exports = getCityRecommendations;