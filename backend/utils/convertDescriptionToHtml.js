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

    const normalizedHeadings = headings.map((item) =>
        item.toLowerCase()
    );

    const lines = text.trim().split(/\r?\n/);
    const result = [];
    let paragraph = [];
    let listItems = [];

    const flushParagraph = () => {
        if (!paragraph.length) return;

        result.push(
            `<p>${paragraph.map(formatLine).join("<br>")}</p>`
        );
        paragraph = [];
    };

    const flushList = () => {
        if (!listItems.length) return;

        result.push(
            `<ul>${listItems.map((item) => `<li>${formatLine(item)}</li>`).join("")}</ul>`
        );
        listItems = [];
    };

    for (const line of lines) {
        const cleanLine = line.trim();

        if (!cleanLine) {
            flushParagraph();
            flushList();
            continue;
        }

        const headingIndex = normalizedHeadings.indexOf(
            cleanLine.toLowerCase()
        );

        if (headingIndex !== -1) {
            flushParagraph();
            flushList();

            result.push(
                `<h2>${escapeHtml(headings[headingIndex])}</h2>`
            );
            continue;
        }

        if (cleanLine.startsWith("- ")) {
            flushParagraph();
            listItems.push(cleanLine.slice(2));
            continue;
        }

        flushList();
        paragraph.push(cleanLine);
    }

    flushParagraph();
    flushList();

    return result.join("\n\n");
};

module.exports = convertDescriptionToHtml;