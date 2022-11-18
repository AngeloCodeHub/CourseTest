/**
 * Created by king on 15-4-10.
 *
 * ch06.child_process_execFile_usage.js
 */
console.info("------   child_process execFile usage   ------");
console.info();
/**
 * child_process execFile
 * 查看現在目錄內容
 * @type {exports}
 */
var child_process = require('child_process');   // TODO: 引入child_process模組
child_process.execFile('/bin/ls', ['-lh', '.'], function (error,stdout,stderr) {
    if (error !== null) {
        console.log('execFile error: ' + error);    // TODO: 列印輸出 error
        console.log('execFile stderr: ' + stderr);    // TODO: 列印輸出 error
    } else {
        console.info('現在目錄內容:');
        console.info(stdout);   // TODO: 列印輸出 stdout
    }
});