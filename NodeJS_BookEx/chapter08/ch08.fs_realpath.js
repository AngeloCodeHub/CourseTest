/**
 * Created by king on 15-4-24.
 *
 * ch08.fs_realpath.js
 */
console.info("------   fs realpath()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var cache = {'/king':'/home/king'}; // TODO: 定義cache
var relpath = 'txt/realpath.txt';   // TODO: 定義相對路徑
/**
 * 相對路徑轉絕對路徑（異步方法）
 */
fs.realpath(relpath, cache, function (err, resolvedPath) {
    if (err) {
        throw err;
    }
    console.info('txt/realpath.txt realpath is : ');
    console.info(resolvedPath); // TODO: 列印輸出絕對路徑
});
console.info();