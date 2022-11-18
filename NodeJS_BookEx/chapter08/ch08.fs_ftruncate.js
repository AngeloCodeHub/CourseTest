/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_ftruncate.js
 */
console.info("------   fs ftruncate()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/ftruncate.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/ftruncate.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
        /**
         * 打開檔案（異步方式）
         */
        fs.open('txt/ftruncate.txt', 'a', function (err, fd) {
            if (err) {
                throw err;
            }
            /**
             * 截取檔案（異步方式）
             */
            fs.ftruncate(fd, 10, function (err) {
                if (err) {
                    throw err;
                }
                console.log("檔案描述表: " + fd);    // TODO: 列印輸出檔案描述表
                /**
                 * 關閉檔案（異步方式）
                 */
                fs.close(fd, function () {
                    console.log('fs.ftruncate() Done');
                    console.info();
                });
            });
        });
        var child_suf = exec('cat txt/ftruncate.txt',
            function (error, stdout, stderr) {
                console.info('cat txt/ftruncate.txt stdout: ');
                console.log(stdout);   // TODO: 列印輸出 stdout
                console.log(stderr);   // TODO: 列印輸出 stdout
            });
    });
console.info();