const express = require("express");
const router = express.Router();

// @route:      GET api/users
// @access:     Public
router.get("/", (req, res) => {
    res.send('Users get route...');
});

module.exports = router;