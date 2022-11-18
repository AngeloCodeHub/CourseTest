/**
 * Created by king on 15-4-10.
 *
 * ch06.child_process_exec_last.js
 */
console.info("------   child_process exec last   ------");
console.info();
/**
 * 建立子處理序統計系統登錄次數
 * @type {exports.exec|*}
 */
var exec = require('child_process').exec;
var last = exec('last | wc -l');
/**
 * 捕獲控制臺輸出對象stdout的‘data’事件
 */
last.stdout.on('data', function (data) {
    console.log('系統登錄次數統計: ' + data);
});
/**
 * 鎖定系統‘exit’事件
 */
last.on('exit', function (code) {
    console.log('子處理程序已關閉,程式碼: ' + code);
});