/**
 * 加載依賴庫,原來這個類別別別庫都封裝在connect中,現在需要單獨加載
 * @type {*|exports}
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/**
 * 加載路由控制
 * @type {router|exports}
 */
var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var name = require('./routes/name');
var pwd = require('./routes/pwd');
/**
 * 建立項目實例
 */
var app = express();
/**
 * 定義EJS範本引擎和範本檔案位置,也可以使用jade或其他模型引擎
 * view engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/**
 * 定義icon圖標
 * uncomment after placing your favicon in /public
 */
//app.use(favicon(__dirname + '/public/favicon.ico'));
/**
 * 定義日志和輸出級別
 */
app.use(logger('dev'));
/**
 * 定義資料解析器
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * 定義cookie解析器
 */
app.use(cookieParser());
/**
 * 定義靜態檔案目錄
 */
app.use(express.static(path.join(__dirname, 'public')));
/**
 * 比對路徑和路由
 */
app.use('/', routes); // TODO: 訪問根路徑
app.use('/users', users); // TODO: 訪問路徑/users
app.get('/test', function(req, res) { // TODO: 訪問路徑/test
  res.send('Test Routes!');
});
app.get('/about', about); // TODO: 訪問路徑/about
app.get('/name', name); // TODO: 訪問路徑/name
app.get('/wildcard/*', function(req, res) { // TODO: 訪問通配表路徑/wildcard/*
  res.send(req.originalUrl); // TODO: req.originalUrl 取得現在URL
});
app.get('/pwd/:passwd', pwd); // TODO: 訪問路徑/pwd/:passwd
app.get('/next/*', function(req, res, next) {  // TODO: 訪問路徑/next/*
  req.control = "轉移控制權";
  next(); //TODO: 把權限轉移到下一個路由
});
app.get('/next/control', function(req, res) {  // TODO: 訪問路徑/next/control
  res.send('next() : ' + req.control);
});
/**
 * error handlers
 * catch 404 and forward to error handler
 * development error handler
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/**
 * 開發環境，500錯誤處理和錯誤堆疊跟蹤
 * will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
/**
 * production error handler
 * no stacktraces leaked to user
 * 生產環境，500錯誤處理
 */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
/**
 * 輸出模型app
 */
module.exports = app;
