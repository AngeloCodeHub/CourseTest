/**
 * Created by king on 15-6-25.
 *
 * ch14.mysql_query.js
 */
console.info("------   mysql query()   ------");
console.info();
var http = require("http"); // TODO: 引入HTTP模組
var mysql = require('/usr/local/lib/node_modules/mysql');   // TODO: 引入mysql模組
console.log("Now start HTTP server on port 6868...");
console.info();
/**
 * 建立資料庫連接
 */
var connection = mysql.createConnection({
    host: "localhost",  // TODO: 主機位址
    user: "root",       // TODO: 資料庫用戶名
    password: "root",   // TODO: 資料庫密碼
    database: "nodejs", // TODO: 資料庫名稱
    port: 3306          // TODO: 端口號
});
/**
 * 建立HTTP服務器
 */
http.createServer(function (req, res) {
    connection.query('select * from userinfo;', function (error, rows, fields) {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        res.write("<h3>測試 Node.js - MySQL 資料庫查詢操作!</h3><br/>");
        res.end(JSON.stringify(rows));
    });
}).listen(6868);    // TODO: 監聽6868端口號