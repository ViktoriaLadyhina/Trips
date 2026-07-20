// repositories/getUnescoList.js

async function getUnescoList(db, entityIds) {

    if (!entityIds.length) {
        return {};
    }

    const placeholders = entityIds
        .map(() => "?")
        .join(",");

    const [rows] = await db.query(
        `
        SELECT
            entity_id,
            year,
            heritage_type,
            criteria,
            epoch

        FROM entity_unesco

        WHERE entity_id IN (${placeholders})
        `,
        entityIds
    );

    const unescoByEntity = Object.fromEntries(
        entityIds.map(entityId => [
            entityId,
            {
                included: false,
                year: null,
                type: null,
                criteria: null,
                epoch: null
            }
        ])
    );

    for (const row of rows) {

        unescoByEntity[row.entity_id] = {
            included: true,
            year: row.year || null,
            type: row.heritage_type || null,
            criteria: row.criteria || null,
            epoch: row.epoch || null
        };
    }

    return unescoByEntity;
}

module.exports = getUnescoList;