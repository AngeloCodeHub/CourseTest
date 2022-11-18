/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_fstat.js
 */
console.info("------   fs fstat()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
fs.open('txt/fstat.txt', 'r', function (err, fd) {
    if (err) {
        throw err;
    }
    /**
     * 取得檔案訊息(異步方法)
     */
    fs.fstat(fd, function (err, stats) {
        if (err) {
            throw err;
        } else {
            console.info('txt/fstat.txt file info: ');
            console.info(stats);    // TODO: 列印輸出檔案訊息
            console.info();
            console.info('fs.fstat() Done.');
            console.info();
        }
    });
});
console.info();