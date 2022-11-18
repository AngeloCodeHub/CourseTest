/**
 * Created by king on 15-5-18.
 *
 * ch10.udp_server.js
 */
console.info("------   UDP ServerClient   ------");
console.info();
var dgram = require('dgram');   // TODO: 引入網路(UDP)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 12345;       // TODO: 定義端口號
/**
 * 建立UDP服務器
 */
console.info('Now create UDO Server...');
console.info();
/**
 * 使用dgram.createSocket()函數方法建立一個UPD服務器
 */
var server = dgram.createSocket('udp4');
/**
 * 為UDP服務器新增一個"listening"事件處理函數
 */
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
    console.info();
});
/**
 * 為UDP服務器新增一個"message"事件處理函數
 */
server.on('message', function (message, remote) {
    console.log("UDP Server received from " + remote.address + ':' + remote.port);
    console.log(" - " + message);
    console.info();
    server.close();
});
/**
 * 為UDP服務器新增一個"error"事件處理函數
 */
server.on('error', function(err) {
    console.log("server error:\n" + err.stack);
    server.close();
});
/**
 * 為UDP服務器新增一個"close"事件處理函數
 */
server.on('close', function() {
    console.log('server closed');
    console.info();
});
/**
 * 為UDP服務器鎖定主機和端口
 */
server.bind(PORT, HOST);