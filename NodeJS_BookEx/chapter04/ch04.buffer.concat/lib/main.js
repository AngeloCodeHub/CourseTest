/**
 * Created by KING on 2015/3/17.
 *
 * main.js
 */
console.info("------   Buffer Parse Header   ------");
console.info();
/**
 * 導入模組parse-header-buffer.js
 * 導入模組parse-header-string.js
 */
var buffer_parse = require('./parse-header-buffer').parse;
var string_parse = require('./parse-header-string').parse;
/**
 * 定義Buffer對象
 */
var data = new Buffer('POST /foo HTTP/1.1\r\nHost: foo.example.com\r\nContent-Length: 5\r\nConnection:keep-alive\r\nAccept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\nCookie:connect.sid=OY2nKGqI3obs5lYee0JKTjhf.FDtbY1Jz5Ngw5So9Jv3MUetI5ITvrIfwgCkRw%2FcXUCk\r\nUser-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.41 Safari/535.7\r\n\r\nq=bar');
/**
 * 列印輸出Buffer對象
 */
console.log("buffer_parse(data): " + buffer_parse(data));
console.info();
var n = 1000000;
/**
 * 計算Buffer操作字元流的時間
 * @type {Date}
 */
var start = new Date();
for(var i=0; i<n; i++) {
    buffer_parse(data);
}
console.log('buffer_parse take: ' + (new Date() - start) + ' ms');
console.info();
/**
 * 列印輸出String對象及其長度
 */
console.log("string_parse(data): " + string_parse(data));
console.log("data.length: " + data.length);
console.info();
/**
 * 計算String操作字元流的時間
 * @type {Date}
 */
start = new Date();
for(var i=0; i<n; i++) {
    string_parse(data);
}
console.log('string_parse take: ' + (new Date() - start) + ' ms');
console.info();
console.info("------   Buffer Parse Header   ------");