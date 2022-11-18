/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_ftruncateSync.js
 */
console.info("------   fs ftruncateSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/ftruncateSync.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/ftruncateSync.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
        var fd = fs.openSync('txt/ftruncateSync.txt', 'a'); // TODO: 打開檔案（同步方式）
        fs.ftruncateSync(fd, 10);  // TODO: 檔案內容截取
        console.info("檔案描述表: " + fd);   // TODO: 列印輸出檔案描述表
        console.info();
        console.log('fs.ftruncateSync() Done');
        fs.closeSync(fd);   // TODO: 關閉檔案（同步方式）
        var child_suf = exec('cat txt/ftruncateSync.txt',
            function (error, stdout, stderr) {
                console.info('cat txt/ftruncateSync.txt stdout: ');
                console.log(stdout);   // TODO: 列印輸出 stdout
                console.log(stderr);   // TODO: 列印輸出 stdout
            });
        console.info();
    });
console.info();