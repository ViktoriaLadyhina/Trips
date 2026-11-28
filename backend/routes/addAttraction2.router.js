
const express = require("express");
const db = require("../db");
const router = express.Router();

const convertDescriptionToHtml = require("../utils/convertDescriptionToHtml");
const validateLanguages = require("../utils/validateLanguages");

//Продолжение добавления достопримечательности (форма 2)
router.post("/", async (req, res) => {
    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    let connection;
    let transactionStarted = false;

    try {
        const {
            attractionId,
            item_title_ru, item_title_uk, item_title_de,
            items,
            practical_info_ru, practical_info_uk, practical_info_de,
            interestingFacts_ru, interestingFacts_uk, interestingFacts_de
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
            !Array.isArray(items)
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

        // проверка на заполнение полей заголовка и элементов item на всех языках
        const languages = ["ru", "uk", "de"];

        const titleStatus = validateLanguages({
            ru: item_title_ru,
            uk: item_title_uk,
            de: item_title_de
        });

        if (titleStatus === "incomplete") {
            return res.status(400).json({
                error: "Item title must be filled in all languages"
            });
        }

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

            const itemStatus = validateLanguages({
                ru: item.item_ru,
                uk: item.item_uk,
                de: item.item_de
            });

            if (itemStatus === "incomplete") {
                return res.status(400).json({
                    error: "Item description must be filled in all languages"
                });
            }

            if (itemStatus === "empty") {
                continue;
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

        const practicalInfos = {
            ru: practical_info_ru,
            uk: practical_info_uk,
            de: practical_info_de
        };

        if (
            Object.values(practicalInfos).some(
                (info) =>
                    info != null &&
                    typeof info !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid practical information fields"
            });
        }

        const practicalInfoStatus = validateLanguages(practicalInfos);

        if (practicalInfoStatus === "incomplete") {
            return res.status(400).json({
                error: "Practical information must be filled in all languages"
            });
        }

        const interestingFacts = {
            ru: interestingFacts_ru,
            uk: interestingFacts_uk,
            de: interestingFacts_de
        };

        if (
            Object.values(interestingFacts).some(
                (fact) =>
                    fact != null &&
                    typeof fact !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid interesting facts fields"
            });
        }

        const interestingFactsStatus = validateLanguages(interestingFacts);
        console.log("Interesting facts validation:", interestingFacts);

        if (interestingFactsStatus === "incomplete") {
            return res.status(400).json({
                error: "Interesting facts must be filled in all languages"
            });
        }

        connection = await db.getConnection();
        await connection.beginTransaction();
        transactionStarted = true;

        const values = [];

        // Сохраняем заголовок только на всех трех языках
        if (titleStatus === "valid") {
            for (const language of languages) {
                values.push(
                    id,
                    "item_title",
                    language,
                    convertDescriptionToHtml(
                        titles[language].trim(),
                        [titles[language].trim()]
                    ),
                    null
                );
            }
        }

        // Сохраняем только полностью заполненные элементы item
        for (const item of items) {
            const itemStatus = validateLanguages({
                ru: item.item_ru,
                uk: item.item_uk,
                de: item.item_de
            });

            if (itemStatus === "empty") continue;

            const imageId =
                item.image_id == null || item.image_id === ""
                    ? null
                    : Number(item.image_id);

            for (const language of languages) {
                values.push(
                    id,
                    "item",
                    language,
                    convertDescriptionToHtml(
                        item[`item_${language}`].trim(),
                        []
                    ),
                    imageId
                );
            }
        }

        if (values.length > 0) {
            const placeholders = values
                .map(() => "?")
                .reduce((result, value, index) => {
                    if (index % 5 === 0) {
                        result.push("(?, ?, ?, ?, ?)");
                    }
                    return result;
                }, [])
                .join(", ");

            await connection.query(
                `INSERT INTO content
            (entity_id, block_key, language, content, image_id)
         VALUES ${placeholders}`,
                values
            );
        }

        // Сохранение практической информации
        if (practicalInfoStatus === "valid") {
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

                await connection.query(
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
        }

        // Сохранение интересных фактов
        console.log("Saving interesting facts to database");
        if (interestingFactsStatus === "valid") {
            const interestingFactsHeadings = {
                ru: ["Интересные факты"],
                uk: ["Цікаві факти"],
                de: ["Interessante Fakten"]
            };

            for (const [language, fact] of Object.entries(interestingFacts)) {
                const heading = interestingFactsHeadings[language][0];

                const htmlFacts = convertDescriptionToHtml(
                    `${heading}\n\n${fact.trim()}`,
                    [heading]
                );

                await connection.query(
                    `INSERT INTO content (entity_id, block_key, language, content)
                     VALUES (?, ?, ?, ?)`,
                    [
                        id,
                        "interestingFacts",
                        language,
                        htmlFacts
                    ]
                );
            }
        }

        await connection.commit();
        transactionStarted = false;

        res.status(201).json({
            message: "Attraction content saved",
            id
        });

    } catch (error) {
        if (connection && transactionStarted) {
            try {
                await connection.rollback();
            } catch (rollbackError) {
                console.error("Transaction rollback failed:", rollbackError);
            }
        }

        console.error("Failed to save attraction content:", error);

        res.status(500).json({
            error: "Server error"
        });
    } finally {
        if (connection) {
            connection.release();
        }
    }
});

module.exports = router;