/**
 * Created by king on 15-4-28.
 *
 * ch08.fs_readdir.js
 */
console.info("------   fs readdir()   ------");
console.info();
var path = "txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 讀取檔案目錄（異步方式）
 */
fs.readdir(path, function (err, files) {
    if (err) {
        // throw err;
        console.info('err: ' + err);
        console.info();
    } else {
        console.info('read directory txt: ');
        console.info(files);    // TODO: 列印輸出檔案目錄
        console.log('fs.readdir() Done.');
        console.info();
    }
});
console.info();