/**
 * Created by king on 15-4-21.
 *
 * ch08.fs_fchown.js
 */
console.info("------   fs fchown()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
fs.open('txt/fchown.txt', 'r', function (err, fd) {
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
            console.info('txt/fchown.txt file info: ');
            console.info(stats);    // TODO: 列印輸出檔案訊息
            console.info();
            console.info('fs.fstat() Done.');
            console.info();
            /**
             * 更改檔案所有權(異步方法)
             */
            fs.fchown(fd, 1001, 1001, function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("fs.fchown() Done");
                    console.info();
                    /**
                     * 取得檔案訊息(異步方法)
                     */
                    fs.fstat(fd, function (err, stats) {
                        if (err) {
                            throw err;
                        } else {
                            console.info('txt/fchown.txt file info: ');
                            console.info(stats);    // TODO: 列印輸出檔案訊息
                            console.info();
                            console.info('fs.fstat() Done.');
                            console.info();
                        }
                    });
                }
            });
        }
    });
});
console.info();