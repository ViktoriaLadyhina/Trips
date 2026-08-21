async function getChildRelations(db, parentIds) {
    if (!parentIds.length) {
        return [];
    }

    const placeholders = parentIds
        .map(() => "?")
        .join(",");

    const [rows] = await db.query(
        `
        SELECT
            parent_id,
            child_id
        FROM entity_relations
        WHERE parent_id IN (${placeholders})
          AND relation = 'contains'
        `,
        parentIds
    );

    return rows;
}

module.exports = getChildRelations;