// Возвращает блоки страницы с переведенным контентом
// и связанной фотографией, если она есть.

async function getBlocks(db, entityId, lang, blockType) {

    const [rows] = await db.query(
        `
        SELECT
            b.block_key,
            b.sort_order,

            c.content,

            p.id AS photo_id,
            p.path AS photo_path,
            p.title_ru,
            p.title_uk,
            p.title_de

        FROM blocks b

        LEFT JOIN content c
            ON c.block_key = b.block_key
            AND c.entity_id = ?
            AND c.language = ?

        LEFT JOIN entity_photos p
            ON p.id = c.image_id

        WHERE b.entity_type = ?

        ORDER BY b.sort_order
        `,
        [
            entityId,
            lang,
            blockType
        ]
    );

    return rows.map(row => ({

        block_key: row.block_key,

        sort_order: row.sort_order,

        content: row.content || "",

        image: row.photo_id
            ? {
                id: row.photo_id,
                path: row.photo_path,

                title: {
                    ru: row.title_ru,
                    uk: row.title_uk,
                    de: row.title_de
                }
            }
            : null

    }));
}

module.exports = getBlocks;