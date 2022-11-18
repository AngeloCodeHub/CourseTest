/**
 * Created by king on 15-4-14.
 *
 * ch07.os_tmpdir.js
 */
console.info("------   OS tmpdir()   ------");
console.info();
var os = require('os');
var type = os.type();
var tmpdir = os.tmpdir();
console.info('現在' + type + '系統臨時目錄: ' + tmpdir);
console.info();
console.info("------   OS tmpdir()   ------");