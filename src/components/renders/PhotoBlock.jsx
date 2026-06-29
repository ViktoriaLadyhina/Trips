const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

export const PhotoBlock = ({ photo, lang, className }) => {
  if (!photo) return null;

  return (
    <img
      src={`${BASE_PHOTO_URL}${photo.path}`}
      className={className}
      alt={photo.title?.[lang] || ""}
    />
  );
};