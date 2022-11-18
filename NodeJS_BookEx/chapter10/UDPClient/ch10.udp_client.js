/**
 * Created by king on 15-5-18.
 *
 * ch10.udp_client.js
 */
console.info("------   UDP Client   ------");
console.info();
var dgram = require('dgram');   // TODO: 引入網路(UDP)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 12345;       // TODO: 定義端口號
var message = new Buffer('UDP Client to Server : Hello Server!');   // TODO: 定義資料包
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
 * 向服務器發送UDP資料報
 */
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if(err) {
        throw err;
    }
    console.log('UDP message sent to...');
    console.info();
    /**
     * 關閉客戶端
     */
    client.close();
});
/**
 * 為UDP客戶端新增一個"close"事件處理函數
 */
client.on('close', function() {
    console.log('client disconnected');
    console.info();
});