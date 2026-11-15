const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

//преобразует путь к фотографии в полный URL, чтобы браузер мог её показать.
export const toFullUrl = (path) => {
    if (!path) return null;
    if (path.startsWith("http")) return path;

    const base = BASE_PHOTO_URL.replace(/\/$/, ""); // убираем /
    const cleanPath = path.replace(/^\//, "");      // убираем /

    return `${base}/${cleanPath}`;
};

// исправляет пути к изображениям внутри HTML-контента
export const fixHtmlImages = (html) => {
        return html.replace(
            /src="([^"]+)"/g,
            (match, src) => {

                // если уже полный путь — не трогаем
                if (src.startsWith('http')) {
                    return match;
                }

                return `src="${BASE_PHOTO_URL}/${src}"`;
            }
        );
    };