const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const { password } = req.body;

    if (!process.env.ADMIN_PASSWORD || typeof password !== "string" || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({
            error: "Invalid password"
        });
    }

    req.session.regenerate((err) => {
        if (err) {
            return res.status(500).json({
                error: "Session error"
            });
        }

        req.session.isAdmin = true;

        req.session.save((err) => {
            if (err) {
                return res.status(500).json({
                    error: "Session error"
                });
            }

            res.json({
                message: "Login successful"
            });
        });
    });
});

router.get("/check", (req, res) => {
    if (req.session.isAdmin) {
        return res.json({ isAdmin: true });
    }

    res.json({ isAdmin: false });
});

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                error: "Logout error"
            });
        }

        res.clearCookie("connect.sid", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });

        res.json({
            message: "Logout successful"
        });
    });
});

module.exports = router;