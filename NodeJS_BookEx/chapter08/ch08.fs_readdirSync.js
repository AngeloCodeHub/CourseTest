/**
 * Created by king on 15-4-28.
 *
 * ch08.fs_readdirSync.js
 */
console.info("------   fs readdirSync()   ------");
console.info();
var path = "txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
var files = fs.readdirSync(path);  // TODO: 讀取檔案目錄（同步方式）
console.info('read directory txt: ');
console.info(files);    // TODO: 列印輸出檔案目錄
console.log('fs.readdirSync() Done.');
console.info();