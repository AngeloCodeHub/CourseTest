/**
 * Created by king on 15-5-25.
 *
 * ch10.net_sockettimeout_server.js
 */
console.info("------   net socket.setTimeout()   ------");
console.info();
var net = require('net');   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 6677;            // TODO: 定義端口號
/**
 * 建立 TCP服務器
 */
var server = net.createServer();
/**
 * 監聽"listening"事件
 */
server.on('listening', function() {
    console.log('Server is listening on port', PORT);
    console.info();
});
/**
 * 監聽"connection"事件
 */
server.on('connection', function(socket) {
    console.log('Server has a new connection');
    console.info();
    /**
     * 為socket實例新增一個"data"事件處理函數
     */
    socket.on('data', function(data) {
        /**
         * 列印輸出由客戶端發來的資料
         */
        console.info('DATA ' + socket.remoteAddress + ' : "' + data + '"');
        console.info();
        /**
         * 回發該資料,客戶端將收到來自服務端的資料
         */
        socket.write('Server write : "' + data + '"');
    });
    /**
     * 關閉服務器
     */
    server.close();
});
/**
 * 監聽"close"事件
 */
server.on('close', function() {
    console.log('Server is now closed');
    console.info();
});
/**
 * 使用server.listen()監聽服務器端口
 */
server.listen(PORT, HOST);