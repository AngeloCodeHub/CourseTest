/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-waterfall.js
 */
console.info('------   Node.js非同步程式設計: Async waterfall   ------');
console.info();
var async = require('async');   // TODO: 引用'async'包
/**
 * TODO: 使用waterfall函數方法
 */
async.waterfall([
    function(callback) {
        callback(null, 1);    // TODO: 當回調函數的第一個參數為非空值時，waterfall會停止執行剩余任務
    },
    function(data, callback) {
        console.info(data);
        callback('test', 2);
    },
    function(data, callback) {
        console.info(data);
        callback(null, 3);
    }
],function(err, results) {
    console.log(results);
});
console.info();
console.info('------   Node.js非同步程式設計: Async waterfall   ------');