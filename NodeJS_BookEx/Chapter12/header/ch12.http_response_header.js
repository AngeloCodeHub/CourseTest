/**
 * Created by king on 15-6-14.
 *
 * ch12.http_response_header.js
 */
console.info("------   http - create basic server   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
/**
 * 使用http.createServer()函數方法建立服務器
 */
http.createServer(function(req, res) {
    /**
     * 通過res.setHeader()函數方法設定HTTP檔案頭
     */
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Set-Cookie", ["type=king", "language=javascript"]);
    /**
     * 通過res.getHeader()函數方法取得HTTP檔案頭
     */
    var content_Type = res.getHeader('Content-Type');
    console.info(content_Type);
    var set_cookie = res.getHeader('Set-Cookie');
    console.info(set_cookie);
    /**
     * 通過res.write()函數方法寫頁面內容
     */
    res.write('<h3>Node.js --- HTTP</h3>');
    res.write('<p>' + content_Type + '</p>');
    res.write('<p>' + set_cookie + '</p>');
    /**
     * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
     */
    res.end();
}).listen(6868);    // TODO: 監聽6868端口號