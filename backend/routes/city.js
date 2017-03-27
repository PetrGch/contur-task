'use strict';

const express = require('express');
const path = require('path');
const url = require('url');
const readHtmlFile = require('./stream');
const router = express.Router();


/* GET city data. */
router.get('/city', function(req, res) {
    var urlPars = url.parse(req.url, true);
    if (urlPars.query.data === 'city') {
        let filePath = path.join('backend', 'data', 'kladr.json');
        res.statusCode = 200;
        readHtmlFile(filePath, res);
    } else {
        res.statusCode = 404;
        res.end('data is not found');
    }

});

module.exports = router;
