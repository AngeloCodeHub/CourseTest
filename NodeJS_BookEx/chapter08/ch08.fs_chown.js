/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_chown.js
 */
console.info("------   fs chown()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 取得檔案訊息(異步方法)
 */
fs.stat('txt/chown.txt', function (err, stats) {
    if (err) {
        throw err;
    } else {
        console.info('txt/chown.txt file info: ');
        console.info(stats);    // TODO: 列印輸出檔案訊息
        console.info();
        console.info('fs.stat() Done.');
        console.info();
        /**
         * 更改檔案所有權(異步方法)
         */
        fs.chown('txt/chown.txt', 1001, 1001, function(err) {
            if(err){
                console.log(err);
            }else{
                console.log("fs.chown() Done");
                console.info();
                /**
                 * 取得檔案訊息(異步方法)
                 */
                fs.stat('txt/chown.txt', function (err, stats) {
                    if (err) {
                        throw err;
                    } else {
                        console.info('txt/chown.txt file info: ');
                        console.info(stats);    // TODO: 列印輸出檔案訊息
                        console.info();
                        console.info('fs.stat() Done.');
                        console.info();
                    }
                });
            }
        });
    }
});
console.info();