/**
 * Created by king on 15-6-25.
 *
 * ch14.mysql_conn.js
 */
console.info("------   mysql connnection()   ------");
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
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf8" });
    res.write("<h3>測試 Node.js - MySQL 資料庫連接!</h3><br/>");
    /**
     * 測試資料庫連接
     */
    connection.connect(function(err) {
        if(err) {
            res.end('<p>Error Connected to MySQL!</p>');
            return;
        } else {
            res.end('<p>Connected to MySQL!</p>');
        }
    });
}).listen(6868);    // TODO: 監聽6868端口號
