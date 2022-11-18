/**
 * Created by king on 15-4-3.
 *
 * ch06.child_process_exec_usage.js
 */
console.info("------   child_process exec usage   ------");
console.info();
/**
 * child_process exec
 * @type {exports.exec|*}
 */
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child = exec('cat ch06.child_process_exec_usage.js',
    function (error, stdout, stderr) {
        console.info('cat ch06.child_process_exec_usage.js stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
    });