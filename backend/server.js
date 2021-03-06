'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const url = require('url');
const appRoot = require('app-root-path');

//routers
const index = require('./routes/index');
const city = require('./routes/city');

const app = express();

// view engine setup
app.set('views', path.join(appRoot.path, '/views/components/error'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', index);
app.get('/city', city);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = 3002;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function() {
    console.log('Server started on ' +  port);
});




