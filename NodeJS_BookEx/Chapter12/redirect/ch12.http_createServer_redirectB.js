/**
 * Created by king on 15-6-14.
 *
 * ch12.http_createServer_redirectA.js
 */
console.info("------   http - create redirect server   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
console.log("Now start HTTP server on port 8686...");
console.info();
/**
 * 使用http.createServer()函數方法建立服務器
 */
http.createServer(function(req, res) {
    /**
     * 通過res.writeHeader()函數方法寫HTTP檔案頭
     */
    res.writeHead(200, {'Content-type' : 'text/html'});
    /**
     * 通過res.write()函數方法寫頁面內容
     */
    res.write('<h3>Node.js --- HTTP</h3>');
    /**
     * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
     */
    res.end('<p>Create Redirect HTTP Server on Port 8686!</p>');
}).listen(8686);    // TODO: 監聽8686端口號