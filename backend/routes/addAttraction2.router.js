
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
            interestingFacts_ru, interestingFacts_uk, interestingFacts_de,
            sculptors_ru, sculptors_uk, sculptors_de,
            architects_ru, architects_uk, architects_de,
            founder_ru, founder_uk, founder_de,
            construction_period_ru, construction_period_uk, construction_period_de
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

        if (interestingFactsStatus === "incomplete") {
            return res.status(400).json({
                error: "Interesting facts must be filled in all languages"
            });
        }


        const sculptors = {
            ru: sculptors_ru,
            uk: sculptors_uk,
            de: sculptors_de
        };

        const architects = {
            ru: architects_ru,
            uk: architects_uk,
            de: architects_de
        };

        const founder = {
            ru: founder_ru,
            uk: founder_uk,
            de: founder_de
        };

        const constructionPeriod = {
            ru: construction_period_ru,
            uk: construction_period_uk,
            de: construction_period_de
        };


        if (
            Object.values(sculptors).some(
                (value) => value != null && typeof value !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid sculptors fields"
            });
        }

        if (
            Object.values(architects).some(
                (value) => value != null && typeof value !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid architects fields"
            });
        }

        if (
            Object.values(founder).some(
                (value) => value != null && typeof value !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid founder fields"
            });
        }

        if (
            Object.values(constructionPeriod).some(
                (value) => value != null && typeof value !== "string"
            )
        ) {
            return res.status(400).json({
                error: "Invalid construction period fields"
            });
        }


        const sculptorsStatus = validateLanguages(sculptors);
        const architectsStatus = validateLanguages(architects);
        const founderStatus = validateLanguages(founder);
        const constructionPeriodStatus = validateLanguages(constructionPeriod);

        if (sculptorsStatus === "incomplete") {
            return res.status(400).json({
                error: "Sculptors must be filled in all languages"
            });
        }

        if (architectsStatus === "incomplete") {
            return res.status(400).json({
                error: "Architects must be filled in all languages"
            });
        }

        if (founderStatus === "incomplete") {
            return res.status(400).json({
                error: "Founder must be filled in all languages"
            });
        }

        if (constructionPeriodStatus === "incomplete") {
            return res.status(400).json({
                error: "Construction period must be filled in all languages"
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

                const heading = practicalInfoHeadings[language][0];

                const htmlInfo = convertDescriptionToHtml(
                    `${heading}\n\n${info.trim()}`,
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

        // Сохранение блоков про скульпторов, архитекторов, основателя и период строительства
        const optionalBlocks = [
            { key: "sculptors", values: sculptors, status: sculptorsStatus },
            { key: "architects", values: architects, status: architectsStatus },
            { key: "founder", values: founder, status: founderStatus },
            { key: "construction_period", values: constructionPeriod, status: constructionPeriodStatus }
        ];

        for (const block of optionalBlocks) {
            if (block.status !== "valid") continue;

            for (const language of languages) {
                const htmlContent = convertDescriptionToHtml(
                    block.values[language].trim(),
                    []
                );

                await connection.query(
                    `INSERT INTO content
                    (entity_id, block_key, language, content)
                    VALUES (?, ?, ?, ?)`,
                    [id, block.key, language, htmlContent]
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