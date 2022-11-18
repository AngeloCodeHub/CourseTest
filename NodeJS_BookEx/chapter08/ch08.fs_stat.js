/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_stat.js
 */
console.info("------   fs stat()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 取得檔案訊息(異步方法)
 */
fs.stat('txt/stat.txt', function (err, stats) {
    if (err) {
        throw err;
    } else {
        console.info('txt/stat.txt file info: ');
        console.info(stats);    // TODO: 列印輸出檔案訊息
        console.info();
        console.info('fs.stat() Done.');
        console.info();
    }
});
console.info();