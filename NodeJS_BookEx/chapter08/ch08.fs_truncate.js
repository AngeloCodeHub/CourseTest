/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_truncate.js
 */
console.info("------   fs truncate()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/truncate.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/truncate.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log('length: ' + stdout.length); // TODO: 輸出資料長度
        console.log(stderr);   // TODO: 列印輸出 stderr
        console.info();
        /**
         * 修改檔案內容長度(異步方法)
         */
        fs.truncate('txt/truncate.txt', 6, function (err) {
            if (err) {
                throw err;
            } else {
                console.info('fs.truncate() Done.');
                console.info();
            }
        });
        var child_suf = exec('cat txt/truncate.txt',
            function (error, stdout, stderr) {
                console.info('cat txt/truncate.txt stdout: ');
                console.log(stdout);   // TODO: 列印輸出 stdout
                console.log('length: ' + stdout.length); // TODO: 輸出資料長度
                console.log(stderr);   // TODO: 列印輸出 stdout
                console.info();
            });
    });
console.info();