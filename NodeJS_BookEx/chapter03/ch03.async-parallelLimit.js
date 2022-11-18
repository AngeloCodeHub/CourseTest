/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-parallelLimit.js
 */
console.info('------   Node.js非同步程式設計: Async parallelLimit   ------');
console.info();
var async = require('async');   // TODO: 引用'async'包
/**
 * TODO: 使用parallelLimit函數方法
 */
async.parallelLimit([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 1000);
    }
],
1,
function(err, results) {
    console.log(results);
});
console.info();
console.info('------   Node.js非同步程式設計: Async parallelLimit   ------');