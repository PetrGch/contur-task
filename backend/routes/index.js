const express = require('express');
const router = express.Router();

const readHtmlFile = require('./stream');

/* GET home page. */
router.get('/', function(req, res) {
    readHtmlFile('index.html', res)
});

module.exports = router;
