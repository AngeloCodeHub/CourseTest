/**
 * Created by king on 15-4-24.
 *
 * ch08.fs_realpathSync.js
 */
console.info("------   fs realpathSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var cache = {'/james':'/home/jame'}; // TODO: 定義cache
var relpath = 'txt/realpathSync.txt';   // TODO: 定義相對路徑
var resolvedPath = fs.realpathSync(relpath, cache); // TODO: 相對路徑轉絕對路徑（同步方法）
console.info('txt/realpathSync.txt realpath is : ');
console.info(resolvedPath); // TODO: 列印輸出絕對路徑
console.info();