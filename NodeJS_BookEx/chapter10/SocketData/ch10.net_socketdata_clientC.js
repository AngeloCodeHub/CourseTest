/**
 * Created by king on 15-5-20.
 *
 * ch10.net_socketdata_clientC.js
 */
console.info("------   net socketdata   ------");
console.info();
var net = require("net");   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 8877;            // TODO: 定義端口號
var sWriteContent = "client write : Hello Server CCC!"; // TODO: 定義字表串資料
/**
 * 使用net.connect()函數方法建立一個TCP客戶端實例
 */
var client = net.connect(PORT, HOST, function() {
    console.log('client connected');
    console.info();
    client.write(sWriteContent);
});
/**
 * 為TCP客戶端實例新增一個"data"事件處理函數
 */
client.on('data', function(data) {
    console.log(data.toString());
    console.info();
    client.end();
});
/**
 * 為TCP客戶端實例新增一個"end"事件處理函數
 */
client.on('end', function() {
    console.log('client disconnected');
    console.info();
});