/**
 * Created by king on 15-4-23.
 *
 * ch08.fs_symlinkSync.js
 */
console.info("------   fs symlinkSync()   ------");
console.info();
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/symlinkSync.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/symlinkSync.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
    });
console.info();
var srcpath = "txt/symlinkSync.txt";
var dstpath = "txtlink/symlinkSync.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
fs.symlinkSync(srcpath, dstpath);  // TODO: 鏈接檔案（同步方式）
console.log('fs.symlinkSync() Done.');
console.info();
var child_suf = exec('cat txtlink/symlinkSync.txt',
    function (error, stdout, stderr) {
        console.info('cat txtlink/symlinkSync.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
        var spawn = require('child_process').spawn; // TODO: 引入child_process模組
        var ls_txt = spawn('ls', ['-lh', 'txtlink']);  // TODO: 定義命令行‘ls -lh /txtlink’
        /**
         * 捕獲控制臺輸出對象stdout,輸出捕獲資料
         */
        ls_txt.stdout.on('data', function (data) {
            console.info('ls -lh /txtlink stdout:');
            console.log('stdout: ' + data);
            console.info();
        });
        /**
         * 鎖定系統‘error’事件
         */
        ls_txt.on('error', function (code) {
            console.log('child process error with code ' + code);
            console.info();
        });
        /**
         * 鎖定系統‘close’事件
         */
        ls_txt.on('close', function (code) {
            console.log('child process closed with code ' + code);
            console.info();
        });
    });
console.info();