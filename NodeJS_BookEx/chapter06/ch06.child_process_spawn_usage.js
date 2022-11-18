/**
 * Created by king on 15-4-3.
 *
 * ch06.child_process_spawn_usage.js
 */
console.info("------   child_process spawn usage   ------");
console.info();
/**
 * child_process spawn
 * @type {exports.spawn|*}
 */
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_var = spawn('ls', ['-lh', '/var']);  // TODO: 定義命令行‘ls -lh /var’
/**
 * 捕獲控制臺輸出對象stdout,輸出捕獲資料
 */
ls_var.stdout.on('data', function (data) {
    console.log('stdout: ' + data);         // TODO: 列印輸出 /var 目錄清單
});
