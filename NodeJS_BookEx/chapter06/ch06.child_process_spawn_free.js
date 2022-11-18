/**
 * Created by king on 15-4-9.
 *
 * ch06.child_process_spawn_free.js
 */
console.info("------   child_process spawn free   ------");
console.info();
/**
 * child_process spawn
 * 利用子處理序取得系統內存使用情況
 * @type {exports.spawn|*}
 */
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var free = spawn('free', ['-m']);           // TODO: 定義命令行‘free -m’
/**
 * 捕獲標準輸出並將其列印到控制臺
 */
free.stdout.on('data', function (data) {
    console.log('標準輸出:\n' + data);
});
/**
 * 捕獲標準錯誤輸出並將其列印到控制臺
 */
free.stderr.on('data', function (data) {
    console.log('標準錯誤輸出:\n' + data);
});
/**
 * 注冊子處理序關閉事件
 */
free.on('exit', function (code, signal) {
    console.log('子處理程序已退出,程式碼: ' + code);
});