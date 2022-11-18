/**
 * Created by king on 15-5-19.
 *
 * ch10.net_connection.js
 */
console.info("------   net connection()   ------");
console.info();
var net = require("net");   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 9696;            // TODO: 定義端口號
/**
 * 建立 TCP服務器
 */
var server = net.createServer();
/**
 * 監聽端口和主機
 */
server.listen(PORT, HOST);
console.log('Server listening on ' + server.address());
console.info();
/**
 * 通過顯式使用"connection"事件建立TCP連接
 */
server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
});