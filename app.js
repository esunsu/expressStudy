var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var viewsRouter = require('./server/routes/viewsRouter');
var apiRouter = require('./server/routes/apisRouter');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'client/views'));

app.use(express.static(path.join(__dirname, 'client/public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', viewsRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log("-------------------------------------------------------------------------");
  console.log("status : ", err.status || 500);
  console.log("message : ", err.message || "unknown");
  console.log("err : ", req.app.get('env') === 'development' ? err : {});
  console.log("-------------------------------------------------------------------------");

  res.render('error');
});

module.exports = app;
