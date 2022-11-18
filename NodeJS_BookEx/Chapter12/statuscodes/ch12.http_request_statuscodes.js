/**
 * Created by king on 15-6-16.
 *
 * ch12.http_request_statuscodes.js
 */
console.info("------   http - create basic client   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
var querystring = require('querystring');   // TODO: 引入 Query String 模組
/**
 * 定義響應狀態碼數組
 */
var status_codes = new Array();
status_codes[0] = "201";
status_codes[1] = "202";
status_codes[2] = "203";
status_codes[3] = "401";
status_codes[4] = "402";
/**
 * 定義查詢字段
 */
var postData = new Array();
for(var n=0; n<5; n++) {
    postData[n] = querystring.stringify({
        statuscodes: status_codes[n]
    });
}
/**
 * 模擬HTTP客戶端向HTTP服務器端連續發送request請求
 */
for(var i=0; i<5; i++) {
/**
 * 定義服務器參數字段
 * @type {{hostname: string, port: number, path: string, method: string, headers: {Content-Type: string, Content-Length: *}}}
 */
var options = {
    hostname: 'localhost',
    port: 6868,
    path: '/' + postData[i],
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};
/**
 * 通過http.request()函數方法
 * 由客戶端向HTTP服務器發起請求
 */
var req = http.request(options, function(res) {
    console.log('STATUS_CODES: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    console.info();
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        console.info();
    });
});
/**
 * 監聽request對象的'error'事件
 */
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    console.info();
});
/**
 * write data to request body
 */
req.write("\n");
/**
 * write end to request body
 */
req.end();
}