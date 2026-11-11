const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {

    if (!req.session.isAdmin) {
        return res.status(401).json({
            error: "Unauthorized"
        });
    }

    try {
        const { path, parent_id } = req.body;

        if (!path || !parent_id) {
            return res.status(400).json({
                error: "Path and parent_id are required"
            });
        }

        const [city] = await db.query(
            "SELECT id FROM entities WHERE id = ? AND type = 'city' AND is_active = 1",
            [parent_id]
        );

        if (city.length === 0) {
            return res.status(400).json({
                error: "City not found"
            });
        }

        const [result] = await db.query(
            "INSERT INTO entities (path, parent_id, type, is_active) VALUES (?, ?, 'attraction', 1)",
            [path, parent_id]
        );

        res.status(201).json({
            id: result.insertId,
            path: path,
            parent_id: parent_id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;