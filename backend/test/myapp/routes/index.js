const express = require('express');
const router = express.Router();
const appRoot = require('app-root-path');
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.path);
    readHtmlFile('index.html', res)
});

function readHtmlFile(fileName, res) {
    const fileStream = fs.createReadStream(path.resolve(appRoot.path, 'public', fileName));
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res);
}

module.exports = router;
