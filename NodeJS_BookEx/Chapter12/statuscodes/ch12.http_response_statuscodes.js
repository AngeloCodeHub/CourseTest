/**
 * Created by king on 15-6-10.
 *
 * ch12.http_response_statuscodes.js
 */
console.info("------   http STSTUS_CODES   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
console.log("Now start HTTP server...");
console.info();
/**
 * 使用http.createServer()函數方法建立服務器
 */
http.createServer(function(req, res) {
    var status = req.url.substr(1);     // TODO: 取得url查詢字段
    var status_codes = status.substring(12); // TODO: 取得HTTP.STATUS_CODES
    /**
     * 判斷http.STATUS_CODES響應狀態碼集合是否有效
     */
    if(!http.STATUS_CODES[status_codes]) {
        status_codes = '404';
    }
    /**
     * 通過res.writeHeader()函數方法寫HTTP檔案頭
     */
    res.writeHeader(status_codes, {'Content-Type':'text/plain'});
    /**
     * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
     */
    res.end(http.STATUS_CODES[status_codes]);
}).listen(6868);    // TODO: 監聽6868端口號