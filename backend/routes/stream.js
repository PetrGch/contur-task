const appRoot = require('app-root-path');
const path = require('path');
const fs = require('fs');

function readHtmlFile(filePath, res) {
    const fileStream = fs.createReadStream(path.join(appRoot.path, filePath));
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res);
}

module.exports = readHtmlFile;
