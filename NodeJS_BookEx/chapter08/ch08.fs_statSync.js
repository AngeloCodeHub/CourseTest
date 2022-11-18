/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_statSync.js
 */
console.info("------   fs statSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var statSync = fs.statSync('txt/statSync.txt'); // TODO: 取得檔案訊息(同步方法)
console.info('txt/statSync.txt file info: ');
console.info(statSync); // TODO: 列印輸出檔案訊息
console.info();
console.info('fs.statSync() Done.');
console.info();