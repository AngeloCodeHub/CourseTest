/**
 * Created by king on 15-4-22.
 *
 * ch08.fs_fchmodSync.js
 */
console.info("------   fs fchmodSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_txt_pre = spawn('ls', ['-lh', 'txt/fchmodSync.txt']);  // TODO: 定義命令行‘ls -lh /txt’
/**
 * 捕獲控制臺輸出對象stdout,輸出捕獲資料
 */
ls_txt_pre.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    var fd = fs.openSync('txt/fchmodSync.txt', 'a'); // TODO: 打開檔案（同步方式）
    fs.fchmodSync(fd, 777); // TODO: 更改檔案權限(同步方法)
    console.info('fchmodSync() Done.');
    console.info();
    fs.closeSync(fd); // TODO: 關閉檔案（同步方式）
    var ls_txt_suf = spawn('ls', ['-lh', 'txt/fchmodSync.txt']);  // TODO: 定義命令行‘ls -lh /txt’
    /**
     * 捕獲控制臺輸出對象stdout,輸出捕獲資料
     */
    ls_txt_suf.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    /**
     * 鎖定系統‘error’事件
     */
    ls_txt_suf.on('error', function (code) {
        console.log('child process error with code ' + code);
        console.info();
    });
    /**
     * 鎖定系統‘close’事件
     */
    ls_txt_suf.on('close', function (code) {
        console.log('child process closed with code ' + code);
        console.info();
    });
});
/**
 * 鎖定系統‘error’事件
 */
ls_txt_pre.on('error', function (code) {
    console.log('child process error with code ' + code);
    console.info();
});
/**
 * 鎖定系統‘close’事件
 */
ls_txt_pre.on('close', function (code) {
    console.log('child process closed with code ' + code);
    console.info();
});