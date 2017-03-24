const appRoot = require('app-root-path');
const path = require('path');
const fs = require('fs');

function readHtmlFile(fileName, res) {
    const fileStream = fs.createReadStream(path.resolve(appRoot.path, 'public', fileName));
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res);
}

module.exports = readHtmlFile;
