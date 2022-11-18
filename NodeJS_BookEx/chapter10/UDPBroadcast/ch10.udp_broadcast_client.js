/**
 * Created by king on 15-5-18.
 *
 * ch10.udp_broadcast_client.js
 */
console.info("------   UDP broadcast   ------");
console.info();
var dgram = require('dgram');   // TODO: 引入網路(UDP)模組
var HOST = '255.255.255.255';     // TODO: 定義服務器位址
var PORT = 12345;       // TODO: 定義端口號
var message = new Buffer('UDP Client to Server : Hello Server!');
/**
 * 建立UDP客戶端
 */
console.info('Now create UDO Client...');
console.info();
/**
 * 使用dgram.createSocket函數方法建立一個UDP客戶端
 */
var client = dgram.createSocket('udp4');
/**
 * 鎖定套接字方法函數
 */
client.bind(function () {
    client.setBroadcast(true);
});
/**
 * 向服務器發送UDP資料報
 */
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    console.info();
    console.info(bytes);
    console.info();
    client.close();
});
/**
 * 為UDP客戶端新增一個"close"事件處理函數
 */
client.on('close', function() {
    console.log('client disconnected');
    console.info();
});