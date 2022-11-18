/**
 * Created by king on 15-5-20.
 *
 * ch10.net_listening.js
 */
console.info("------   net listening()   ------");
console.info();
var net = require('net');   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 7788;            // TODO: 定義端口號
/**
 * 建立TCP服務器
 */
var server = net.createServer();
/**
 * 監聽"listening"事件
 */
server.on('listening', function() {
    console.log('Server is listening on port ', PORT);
    console.info();
});
/**
 * 使用server.listen()監聽服務器端口
 */
server.listen(PORT, HOST);