/**
 * Created by king on 15-5-19.
 *
 * ch10.net_client.js
 */
console.info("------   net ServerClient()   ------");
console.info();
var net = require("net");   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 9696;            // TODO: 定義端口號
/**
 * 使用net.connect()函數方法建立一個TCP客戶端實例
 */
var client = net.connect(PORT, HOST, function() {
    console.log('client connected...');
    console.info();
});
/**
 * 為TCP客戶端實例新增一個"data"事件處理函數
 */
client.on('data', function(data) {
    console.info('client on data...');
    console.info();
});
/**
 * 為TCP客戶端實例新增一個"end"事件處理函數
 */
client.on('end', function() {
    console.log('client disconnected');
    console.info();
});