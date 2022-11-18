/**
 * Created by king on 15-4-23.
 *
 * ch08.fs_readlink.js
 */
console.info("------   fs readlink()   ------");
console.info();
var srcpath = "txt/symlink.txt";
var linkpath = "txtlink/symlink.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 讀取鏈接檔案（異步方式）
 */
fs.readlink(srcpath, function (err, linkString) {
    if (err) {
        // throw err;
        console.info('err: ' + err);
        /**
         * 讀取鏈接檔案（異步方式）
         */
        fs.readlink(linkpath, function (err, linkString) {
            if (err) {
                throw err;
            } else {
                console.info('read linkpath: ' + linkString);
                console.log('fs.readlink() Done.');
            }
        });
        console.info();
    } else {
        console.info('read srcpath: ' + linkString);
        console.log('fs.readlink() Done.');
    }
});
console.info();