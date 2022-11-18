/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_open.js
 */
console.info("------   fs open()   ------");
console.info();
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/open.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/open.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
    });
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 打開檔案（異步方式）
 */
fs.open('txt/open.txt', 'a', function (err, fd) {
    if (err) {
        throw err;
    } else {
        console.info("檔案描述表: " + fd);
        console.log('fs.open() Done');
        console.info();
    }
    fs.close(fd, function () {
        console.info("檔案描述表: " + fd);
        console.log('fs.close() Done');
        console.info();
    });
});
console.info();