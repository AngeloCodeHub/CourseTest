/**
 * Created by king on 15-4-7.
 *
 * ch06.child_process_fork_usage.js
 */
console.info("------   child_process fork usage   ------");
console.info();
/**
 * child_process fork
 * @type {exports.fork}
 */
var fork = require('child_process').fork;   // TODO: 引入child_process模組
/**
 * 取得現在機器的 CPU 核心數量
 */
var cpus = require('os').cpus();
console.info('現在機器CPU核心數量: ' + cpus.length);  // TODO: 取得 CPU 核心數量
for (var i = 0; i < cpus.length; i++) {
    /**
     * 通過fork()方法建立新的子處理序
     */
    console.log('Fork a new child_process now...');
    fork('./worker.js');    // TODO: 產生新子處理序
}