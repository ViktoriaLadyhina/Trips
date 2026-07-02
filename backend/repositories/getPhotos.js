async function getEntityPhotos(db, entityId) {
  const [rows] = await db.query(
    `
    SELECT
      id,
      path,
      sort_order,
      is_main,
      title_ru,
      title_uk,
      title_de
    FROM entity_photos
    WHERE entity_id = ?
    ORDER BY sort_order ASC
    `,
    [entityId]
  );

  const photos = rows.map(photo => ({
    id: photo.id,
    path: photo.path,
    sort_order: photo.sort_order,
    is_main: Boolean(photo.is_main),
    title: {
      ru: photo.title_ru,
      uk: photo.title_uk,
      de: photo.title_de
    }
  }));

  const mainPhoto =
    photos.find(photo => photo.is_main) ||
    photos[0] ||
    null;

  return {
    photos,
    mainPhoto
  };
}

module.exports = getEntityPhotos;