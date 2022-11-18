/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_truncateSync.js
 */
console.info("------   fs truncateSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/truncateSync.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/truncateSync.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log('length: ' + stdout.length); // TODO: 輸出資料長度
        console.log(stderr);   // TODO: 列印輸出 stderr
        console.info();
        fs.truncateSync('txt/truncateSync.txt', 6);  // TODO: 修改檔案內容長度(同步方法)
        console.log('fs.truncateSync() Done');
        var child_suf = exec('cat txt/truncateSync.txt',
            function (error, stdout, stderr) {
                console.info('cat txt/truncateSync.txt stdout: ');
                console.log(stdout);   // TODO: 列印輸出 stdout
                console.log('length: ' + stdout.length); // TODO: 輸出資料長度
                console.log(stderr);   // TODO: 列印輸出 stdout
                console.info();
            });
    });
console.info();