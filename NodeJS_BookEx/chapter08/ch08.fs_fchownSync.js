/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_fchownSync.js
 */
console.info("------   fs fchownSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var fd = fs.openSync('txt/fchownSync.txt', 'r'); // TODO: 打開檔案（同步方式）
var fstatSync_pre = fs.fstatSync(fd); // TODO: 取得檔案訊息(同步方法)
console.info('txt/fchownSync.txt file info: ');
console.info(fstatSync_pre); // TODO: 列印輸出檔案訊息
console.info();
console.info('fs.fstatSync() Done.');
fs.fchownSync(fd, 1001, 1001); // TODO: 更改檔案所有權(同步方法)
console.info('fs.fchownSync() Done.');
console.info();
var fstatSync_suf = fs.fstatSync(fd); // TODO: 取得檔案訊息(同步方法)
console.info('txt/fchownSync.txt file info: ');
console.info(fstatSync_suf); // TODO: 列印輸出檔案訊息
console.info();
console.info('fs.fstatSync() Done.');
fs.closeSync(fd);
console.info();