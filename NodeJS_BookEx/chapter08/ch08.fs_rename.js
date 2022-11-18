/**
 * Created by king on 15-4-17.
 *
 * ch08.fs_rename.js
 */
console.info("------   fs rename()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
console.time('fs-rename-asyn'); // TODO: 定義時間開始標記
/**
 * 檔案重命名
 */
fs.rename('txt/helloworld-asyn.txt', 'txt/helloworld-asyn.txt', function (err) {
    console.time('time-10000x10000');   // TODO: 定義時間開始標記
    for (var i=0; i<10000; i++) {
        for (var j=0; j<10000; j++) {
            ;
        }
    }
    console.timeEnd('time-10000x10000');    // TODO: 定義時間結束標記
    if (err) throw err;
    console.log('renamed complete');
});
console.timeEnd('fs-rename-asyn');  // TODO: 定義時間結束標記
console.info();
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/helloworld-asyn.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/helloworld-asyn.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
    });
console.info();
var child_suf = exec('cat txt/helloworld-asyn.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/helloworld-asyn.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stdout
    });