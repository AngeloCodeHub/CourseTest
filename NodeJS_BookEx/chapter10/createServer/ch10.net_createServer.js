/**
 * Created by king on 15-5-19.
 *
 * ch10.net_createServer.js
 */
console.info("------   net createServer()   ------");
console.info();
var net = require('net');   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 9696;            // TODO: 定義端口號
/**
 * 使用net.ServerClient()函數方法建立一個TCP服務器實例
 * 同時使用listen()函數方法開始監聽指定端口
 * 傳入net.ServerClient()的回調函數將作為”connection“事件的處理函數
 */
console.info('Now create Server...');
console.info();
net.createServer(function(sock) {
    /**
     * 列印輸出服務器監聽提示訊息
     */
    console.log('Server listening on ' + HOST +':'+ PORT);  // TODO: 服務器已經建立連接
    console.info();
    /**
     * 為socket實例新增一個"data"事件處理函數
     */
    sock.on('data', function(data) {
       console.log('socket on data...');
    });
    /**
     * 為socket實例新增一個"close"事件處理函數
     */
    sock.on('close', function(data) {
        console.log('socket on close...');
    });

}).listen(PORT, HOST);