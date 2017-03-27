'use strict';

const express = require('express');
const path = require('path');
const readHtmlFile = require('./stream');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    let filePath = path.join('public', 'index.html');
    readHtmlFile(filePath, res);
});

module.exports = router;
