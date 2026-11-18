
const express = require("express");
const db = require("../db");
const router = express.Router();

const convertDescriptionToHtml = require("../utils/convertDescriptionToHtml");

//Продолжение добавления достопримечательности (форма 2)
router.post("/", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const {
            attractionId,
            item_title_ru, item_title_uk, item_title_de,
            items,
            practical_info_ru, practical_info_uk, practical_info_de,
        } = req.body;

        const id = Number(attractionId);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "Invalid attraction ID"
            });
        }

        // заголовок item и сам блок
        if (
            typeof item_title_ru !== "string" ||
            typeof item_title_uk !== "string" ||
            typeof item_title_de !== "string" ||
            !Array.isArray(items) ||
            items.length === 0
        ) {
            return res.status(400).json({
                error: "Invalid content fields"
            });
        }

        const [attraction] = await db.query(
            "SELECT id FROM entities WHERE id = ? AND type = 'attraction'",
            [id]
        );

        if (attraction.length === 0) {
            return res.status(400).json({
                error: "Attraction not found"
            });
        }

        const languages = ["ru", "uk", "de"];

        for (const item of items) {
            if (
                !item ||
                typeof item.item_ru !== "string" ||
                typeof item.item_uk !== "string" ||
                typeof item.item_de !== "string"
            ) {
                return res.status(400).json({
                    error: "Invalid item fields"
                });
            }

            // фото в блоке item
            if (
                item.image_id != null &&
                item.image_id !== "" &&
                (!Number.isInteger(Number(item.image_id)) ||
                    Number(item.image_id) <= 0)
            ) {
                return res.status(400).json({
                    error: "Invalid image ID"
                });
            }

            if (item.image_id != null && item.image_id !== "") {
                const [photo] = await db.query(
                    "SELECT id FROM entity_photos WHERE id = ? AND entity_id = ?",
                    [Number(item.image_id), id]
                );

                if (photo.length === 0) {
                    return res.status(400).json({
                        error: "Photo not found for this attraction"
                    });
                }
            }
        }

        const titles = {
            ru: item_title_ru,
            uk: item_title_uk,
            de: item_title_de
        };

        const values = [];

        for (const language of languages) {
            values.push(
                id,
                "item_title",
                language,
                convertDescriptionToHtml(
                    titles[language],
                    [titles[language].trim()]
                ),
                null
            );

            for (const item of items) {
                const imageId =
                    item.image_id == null || item.image_id === ""
                        ? null
                        : Number(item.image_id);

                values.push(
                    id,
                    "item",
                    language,
                    convertDescriptionToHtml(item[`item_${language}`], []),
                    imageId
                );
            }
        }

        const placeholders = values
            .map(() => "?")
            .reduce((result, value, index) => {
                if (index % 5 === 0) {
                    result.push("(?, ?, ?, ?, ?)");
                }
                return result;
            }, [])
            .join(", ");

        await db.query(
            `INSERT INTO content
                (entity_id, block_key, language, content, image_id)
             VALUES ${placeholders}`,
            values
        );

        // Сохранение практической информации
        const practicalInfos = {
            ru: practical_info_ru,
            uk: practical_info_uk,
            de: practical_info_de
        };

        const practicalInfoHeadings = {
            ru: ["Практическая информация"],
            uk: ["Практична інформація"],
            de: ["Praktische Informationen"]
        };

        for (const [language, info] of Object.entries(practicalInfos)) {
            const htmlInfo = convertDescriptionToHtml(
                info,
                practicalInfoHeadings[language]
            );

            if (!htmlInfo) continue;

            await db.query(
                `INSERT INTO content (entity_id, block_key, language, content)
         VALUES (?, ?, ?, ?)`,
                [
                    id,
                    "practical_info",
                    language,
                    htmlInfo
                ]
            );
        }

        res.status(201).json({
            message: "Attraction content saved",
            id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Server error"
        });
    }
});

module.exports = router;