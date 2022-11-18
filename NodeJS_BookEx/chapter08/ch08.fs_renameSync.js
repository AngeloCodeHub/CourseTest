/**
 * Created by king on 15-4-17.
 *
 * ch08.fs_renameSync.js
 */
console.info("------   fs rename()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
console.time('fs-rename-syn');  // TODO: 定義時間開始標記
fs.renameSync('txt/helloworld-syn.txt', 'txt/helloworld-syn-rename.txt');  // TODO: 檔案重命名
console.timeEnd('fs-rename-syn');   // TODO: 定義時間結束標記
console.info();
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/helloworld-syn.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/helloworld-syn.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
    });
console.info();
var child_suf = exec('cat txt/helloworld-syn-rename.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/helloworld-syn-rename.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stdout
    });