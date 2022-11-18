/**
 * Created by king on 15-6-16.
 *
 * ch12.http_request_basic.js
 */
console.info("------   http - create basic client   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
/**
 * 定義服務器參數字段
 * @type {{hostname: string, port: number, path: string, method: string}}
 */
var options = {
    hostname: 'localhost',  // TODO: 定義服務器主機位址
    port: 6868,             // TODO: 定義服務器主機端口號
    path: '/',              // TODO: 定義服務器路徑
    method: 'POST'          // TODO: 定義服務器訪問方式i
};
/**
 * 通過http.request()函數方法
 * 由客戶端向HTTP服務器發起請求
 */
var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
/**
 * 監聽request對象的'error'事件
 */
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
/**
 * write data to request body
 */
req.write('data\n');
/**
 * write end to request body
 */
req.end();