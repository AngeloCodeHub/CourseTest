/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_fstatSync.js
 */
console.info("------   fs fstatSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var fd = fs.openSync('txt/fstatSync.txt', 'r'); // TODO: 打開檔案（同步方式）
var fstatSync = fs.fstatSync(fd); // TODO: 取得檔案訊息(同步方法)
console.info('txt/fstatSync.txt file info: ');
console.info(fstatSync); // TODO: 列印輸出檔案訊息
console.info();
console.info('fs.fstatSync() Done.');
fs.closeSync(fd);
console.info();