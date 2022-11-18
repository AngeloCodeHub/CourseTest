/**
 * Created by king on 15-3-30.
 *
 * ch06.child_process_spawn_lserr.js
 */
console.info("------   child_process spawn lserr   ------");
console.info();
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_err = spawn('ls', ['-lh', '/err']);  // TODO: 定義命令行‘ls -lh /usr’
/**
 * 捕獲控制臺錯誤對象stderr,輸出捕獲資料
 */
ls_err.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
/**
 * 鎖定系統‘error’事件
 */
ls_err.on('error', function (code) {
    console.log('child process error with code ' + code);
});
/**
 * 鎖定系統‘close’事件
 */
ls_err.on('close', function (code) {
    console.log('child process closed with code ' + code);
});
/**
 * 鎖定系統‘exit’事件
 */
ls_err.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});