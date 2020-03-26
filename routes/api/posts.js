const express = require("express");
const router = express.Router();

// @route:      GET api/post
// @access:     Public
router.get("/", (req, res) => {
    res.send('Posts get route...');
});

module.exports = router;