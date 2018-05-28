const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'Hi from a JSON obj'})
});

module.exports = router;