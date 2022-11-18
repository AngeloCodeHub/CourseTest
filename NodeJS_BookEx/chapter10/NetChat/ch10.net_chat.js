/**
 * Created by king on 15-5-28.
 *
 * ch10.net_chat.js
 */
console.info("------   net chat room   ------");
console.info();
var net = require('net');   // TODO: 引入網路(Net)模組
var HOST = '127.0.0.1';     // TODO: 定義服務器位址
var PORT = 6688;            // TODO: 定義端口號
var clientList = [];        // TODO: 定義客戶端列表
console.info('Now create Chat Server...');
console.info();
/**
 * 建立TCP服務器
 */
var server = net.createServer();
/**
 * 監聽"connection"事件
 */
server.on('connection', function(client) {
    clientList.push(client);    // TODO: socket入堆疊
    client.name = client.remoteAddress + ':' + client.remotePort;   // TODO: 儲存客戶端位址和端口
    broadcast('hi,' + client.name + ' join in!\r\n', client);   // TODO: 使用broadcast()方法
    client.write('hi,' + client.name + '!\r\n');    // TODO: 向客戶端發訊息
    /**
     * 監聽“data”事件
     */
    client.on('data', function(data) {
        broadcast(client.name + ' say:' + data + '\r\n', client);   // TODO: 使用broadcast()方法
    });
    /**
     * 監聽“end”事件
     */
    client.on('end', function() {
        broadcast('hi,' + client.name + ' quit!\r\n', client);  // TODO: 使用broadcast()方法
        clientList.splice(clientList.indexOf(client), 1);   // TODO: 刪除客戶端socket
    });
})
/**
 * broadcast function - 向全部客戶端發通知訊息
 * @param message
 * @param client
 */
function broadcast(message, client) {
    var cleanup = [];
    for(var i=0, len=clientList.length; i<len; i++) {
        if(client !== clientList[i]) {
            if(clientList[i].writable) {
                clientList[i].write(message);   // TODO: 向客戶端發送訊息
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy();    // TODO: 清除客戶端socket
            }
        }
    }
    for(var i=0, len=cleanup.length; i<len; i++) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1);   // TODO: 刪除客戶端socket
    }
}
/**
 * listen host and port
 */
server.listen(PORT, HOST);