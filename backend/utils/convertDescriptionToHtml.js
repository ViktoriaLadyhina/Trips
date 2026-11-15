// Преобразование обычного текста в HTML
const convertDescriptionToHtml = (text, headings) => {
    if (typeof text !== "string" || !text.trim()) {
        return "";
    }

    const escapeHtml = (value) =>
        value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

    const formatLine = (line) =>
        escapeHtml(line.trim()).replace(
            /\*\*(.+?)\*\*/g,
            "<strong>$1</strong>"
        );

    return text
        .trim()
        .split(/\n\s*\n/)
        .map((paragraph) => {
            const cleanText = paragraph.trim();

            if (!cleanText) return "";

            const heading = headings.find(
                (item) =>
                    item.toLowerCase() === cleanText.toLowerCase()
            );

            if (heading) {
                return `<h2>${escapeHtml(heading)}</h2>`;
            }

            const lines = cleanText
                .split(/\r?\n/)
                .map(formatLine);

            return `<p>${lines.join("<br>")}</p>`;
        })
        .filter(Boolean)
        .join("\n");
};

module.exports = convertDescriptionToHtml;