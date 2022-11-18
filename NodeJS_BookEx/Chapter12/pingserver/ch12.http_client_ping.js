/**
 * Created by king on 15-6-18.
 *
 * ch12.http_client_ping.js
 */
console.info("------   http - client ping   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
console.log("Now start ping HTTP server...");
console.info();
/**
 * 定義查詢字段
 */
var options = {
    host: 'localhost',
    port: 6868,
    path: '/'
};
/**
 * 自定義函數 ping_server()
 */
function ping_server() {
    /**
     * 發送 HTTP GET 請求
     */
    http.get(options, function(res) {
        if (res.statusCode  == 200) {
            console.log("The site is up!");
        }
        else {
            console.log("The site is down!");
        }
    }).on('error', function(e) {
        console.log("There was an error: " + e.message);
    });
}
/**
 * 通過setInterval()函數方法設定時間間隔
 */
setInterval(ping_server, 1000);