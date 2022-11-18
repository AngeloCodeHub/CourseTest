/**
 * Created by king on 15-6-14.
 *
 * ch12.http_response_writeheader.js
 */
console.info("------   http - server write header   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
console.log("Now start HTTP server...");
console.info();
/**
 * 使用http.createServer()函數方法建立服務器
 */
http.createServer(function(req, res) {
    /**
     * 通過res.writeHead()函數方法寫HTTP檔案頭
     */
    var body = 'write header';
    res.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    /**
     * 通過res.write()函數方法寫頁面內容
     */
    res.write("Node.js");
    res.write("HTTP");
    /**
     * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
     */
    res.end();
}).listen(6868);    // TODO: 監聽6868端口號