async function getUnesco(db, entityId) {
    const [rows] = await db.query(
        `
        SELECT
            year,
            heritage_type,
            criteria,
            epoch
        FROM entity_unesco
        WHERE entity_id = ?
        LIMIT 1
        `,
        [entityId]
    );

    if (!rows.length) {
        return {
            included: false,
            year: null,
            type: null,
            criteria: null,
            epoch: null
        };
    }

    const unesco = rows[0];

    return {
        included: true,
        year: unesco.year || null,
        type: unesco.heritage_type || null,
        criteria: unesco.criteria || null,
        epoch: unesco.epoch || null
    };
}

module.exports = getUnesco;