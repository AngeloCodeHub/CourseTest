/**
 * Created by king on 15-6-25.
 *
 * ch15.mongodb_conn_createCollection.js
 */
console.info("------   mongodb connnection createCollection   ------");
console.info();
var http = require("http"); // TODO: 引入HTTP模組
var mongodb = require('/usr/local/lib/node_modules/mongodb');   // TODO: 引入 mongodb 模組
console.log("Now start HTTP server on port 6868...");
console.info();
/**
 * 建立資料庫服務器連接
 */
var server = new mongodb.Server(
    'localhost',    // TODO: 主機位址
    27017,          // TODO: 端口號
    {
        auto_reconnect: true    // TODO: 自動重連
    }
);
/**
 * 建立資料庫連接
 */
var db = new mongodb.Db(
    'nodejs',   // TODO: 資料庫名稱
    server,     // TODO: 資料庫服務器
    {
        safe: true
    }
);
/**
 * 測試資料庫連接
 */
db.open(function(err, db){
    if(!err) {
        console.log('log - connect mongdb successfully!');
    } else {
        console.log('log - ' + err);
    }

});
/**
 * 建立HTTP服務器
 */
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf8" });
    res.write("<h3>測試 Node.js - MongoDB 資料庫操作!</h3><br/>");
    /**
     * 測試資料庫連接
     */
    db.open(function(err, db) {
        if(!err) {
            res.write('<p>Connected MongoDB:nodejs successfully!</p>');
            /**
             * 連接資料集合
             */
            db.createCollection('userinfo', { safe: true }, function(errcollection, collection) {
                if(!errcollection) {
                    res.write('<p>createCollection MongoDB:nodejs:userinfo successfully!</p>');
                } else {
                    console.log('log - ' + err);
                }
            });
        } else {
            res.write('<p>Error Connected to MySQL!</p>');
            console.log('log - ' + err);
        }
        //res.end("<h5>------ end operations ------</h5><br/>");
    });
}).listen(6868);    // TODO: 監聽6868端口號