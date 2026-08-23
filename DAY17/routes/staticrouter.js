const express = require("express");
const router = express.Router();

const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth");


// Admin: Show ALL URLs
router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    const allurls = await URL.find({});

    return res.render("home", {
        urls: allurls,
    });
});


// Normal User: Show only OWN URLs
router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {

    const allurls = await URL.find({
        createdBy: req.user._id
    });

    return res.render("home", {
        urls: allurls,
    });
});


// Signup
router.get("/signup", (req, res) => {
    return res.render("signup");
});


// Login
router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;