/**
 * Created by king on 15-3-30.
 *
 * ch06.child_process_spawn_ls.js
 */
console.info("------   child_process spawn ls   ------");
console.info();
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_var = spawn('ls', ['-lh', '/usr']);  // TODO: 定義命令行‘ls -lh /usr’
/**
 * 捕獲控制臺輸出對象stdout,輸出捕獲資料
 */
ls_var.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
/**
 * 鎖定系統‘error’事件
 */
ls_var.on('error', function (code) {
    console.log('child process error with code ' + code);
});
/**
 * 鎖定系統‘close’事件
 */
ls_var.on('close', function (code) {
    console.log('child process closed with code ' + code);
});
/**
 * 鎖定系統‘exit’事件
 */
ls_var.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});