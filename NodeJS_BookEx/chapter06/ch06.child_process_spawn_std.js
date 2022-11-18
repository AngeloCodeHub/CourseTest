/**
 * Created by king on 15-4-3.
 *
 * ch06.child_process_spawn_std.js
 */
console.info("------   child_process spawn std   ------");
console.info();
var cp = require('child_process');  // TODO: 引入child_process模組
var cat = cp.spawn('cat');          // TODO: 定義命令行‘cat’
/**
 * 捕獲控制臺輸出對象stdout的‘data’事件
 */
cat.stdout.on('data', function(d) {
    console.log(d.toString());
});
/**
 * 鎖定系統‘exit’事件
 */
cat.on('exit', function() {
    console.log('cat on exit!');
});
/**
 * 鎖定系統‘close’事件
 */
cat.on('close', function() {
    console.log('cat on close!');
});
cat.stdin.write('cat on data!');    // TODO: 通過控制臺輸入對象stdin寫入資料
cat.stdin.end();    // TODO: 結束控制臺輸入對象stdin