const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("we are in posts");
});

router.get('/specific', (req, res) => {
    res.send("Specific post");
});

module.exports = router;
