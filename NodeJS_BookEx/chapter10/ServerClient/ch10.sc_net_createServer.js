/**
 * Created by king on 15-5-18.
 *
 * ch10.sc_net_createServer.js
 */
console.info("------   net ServerClient()   ------");
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
     * 回調函數獲得一個參數,該參數自動關聯一個socket對象
     * 在每一個“connection”事件中,該回調函數接收到的socket對象是唯一的
     */
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    console.info();
    /**
     * 為socket實例新增一個"data"事件處理函數
     */
    sock.on('data', function(data) {
        /**
         * 列印輸出由客戶端發來的訊息
         */
        console.info('DATA ' + sock.remoteAddress + ' : "' + data + '"');
        console.info();
        /**
         * 回發該資料,客戶端將收到來自服務端的資料
         */
        sock.write('Server write : "' + data + '"');
    });
    /**
     * 為socket實例新增一個"close"事件處理函數
     */
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
        console.info();
    });

}).listen(PORT, HOST);