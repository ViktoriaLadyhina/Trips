async function getCityRecommendations(db, entityId, lang) {
    const [rows] = await db.query(
        `
        SELECT
            e.id,
            e.path,
            c.content AS name,
            p.id AS photo_id,
            p.path AS photo
        FROM entities e

        JOIN content c
            ON c.entity_id = e.id
            AND c.block_key = 'name'
            AND c.language = ?

        JOIN entity_photos p
            ON p.entity_id = e.id
            AND p.is_main = 1

        WHERE e.parent_id = ?
            AND e.type = 'attraction'
            AND e.is_active = 1

        ORDER BY RAND()
        LIMIT 9
        `,
        [lang, entityId]
    );

    return rows;
}

module.exports = getCityRecommendations;