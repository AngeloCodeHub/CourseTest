/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-queue.js
 */
console.info('------   Node.js非同步程式設計: Async queue   ------');
console.info();
var async = require('async');
/**
 * 定義一個queue，設worker數量為2
 */
var q = async.queue(function(task, callback) {
    console.log('worker is processing task: ', task.name);
    callback();
}, 2);
/**
 * 獨立加入5個任務
 */
q.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});
q.push({name: 'cap'}, function (err) {
    console.log('finished processing cap');
});
q.push({name: 'egg'}, function (err) {
    console.log('finished processing egg');
});
q.push({name: 'app'}, function (err) {
    console.log('finished processing app');
});
/**
 * listen：當最後一個任務交給worker時，將使用該函數
 */
q.empty = function() {
    console.log('no more tasks wating');
}
/**
 * listen：當所有任務都執行完以後，將使用該函數
 */
q.drain = function() {
    console.log('all tasks have been processed');
}