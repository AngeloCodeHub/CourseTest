/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_chownSync.js
 */
console.info("------   fs chownSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var statSync_pre = fs.statSync('txt/chownSync.txt'); // TODO: 取得檔案訊息(同步方法)
console.info('txt/chownSync.txt file info: ');
console.info(statSync_pre); // TODO: 列印輸出檔案訊息
console.info();
console.info('fs.chownSync() Done.');
console.info();
fs.chownSync('txt/chownSync.txt', 1001, 1001); // TODO: 更改檔案所有權(同步方法)
console.info('fs.chownSync() Done.');
console.info();
var statSync_suf = fs.statSync('txt/chownSync.txt'); // TODO: 取得檔案訊息(同步方法)
console.info('txt/chownSync.txt file info: ');
console.info(statSync_suf); // TODO: 列印輸出檔案訊息
console.info();