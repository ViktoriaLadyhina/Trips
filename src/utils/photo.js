const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

export const toFullUrl = (path, baseUrl) => {
    if (!path) return null;
    if (path.startsWith("http")) return path;
    return `${baseUrl}/${path}`;
};

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