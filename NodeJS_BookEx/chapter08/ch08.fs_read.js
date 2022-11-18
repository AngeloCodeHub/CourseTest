/**
 * Created by king on 15-4-29.
 *
 * ch08.fs_read.js
 */
console.info("------   fs read()   ------");
console.info();
var readpath = "txt/read.txt";
var fs = require('fs');
/**
 * 判斷檔案是否存在（異步方法）
 */
fs.exists(readpath, function (exists) {
    if (exists) {
        /**
         * 讀檔案內容（異步方法）
         */
        fs.readFile(readpath, 'utf-8', function (err, data) {
            if (err) {
                throw err;
                console.info();
            } else {
                console.info('read txt/read.txt contents: ');
                console.info(data);    // TODO: 列印輸出檔案內容
                console.log('fs.readFile() Done.');
                console.info();
                /**
                 * 打開檔案（異步方法）
                 */
                fs.open(readpath, 'r', function (err, fd) {
                    if(err) {
                        console.error(err);
                        console.info();
                        return;
                    } else {
                        var buf_a = new Buffer(8);
                        /**
                         * 增固定功能讀檔案資料（異步方法）
                         */
                        fs.read(fd, buf_a, 0, 8, null, function (err, bytesRead, buffer) {
                            if (err) {
                                throw err;
                            } else {
                                console.info('讀取的字元數: ' + bytesRead);
                                console.info('讀取的內容: ');
                                console.info(buffer);
                                console.info('fs.readSync() done.');
                                console.info();
                            }
                        });
                        var buf_b = new Buffer(4);
                        fs.read(fd, buf_b, 0, 4, 4, function (err, bytesRead, buffer) {
                            if (err) {
                                throw err;
                            } else {
                                console.info('讀取的字元數: ' + bytesRead);
                                console.info('讀取的內容: ');
                                console.info(buffer);
                                console.info('fs.readSync() done.');
                                console.info();
                            }
                        });
                        var buf_c = new Buffer(4);
                        fs.read(fd, buf_c, 0, 4, 2, function (err, bytesRead, buffer) {
                            if (err) {
                                throw err;
                            } else {
                                console.info('讀取的字元數: ' + bytesRead);
                                console.info('讀取的內容: ');
                                console.info(buffer);
                                console.info('fs.readSync() done.');
                                console.info();
                            }
                        });
                    }
                });
            }
        });
    } else {
        console.info('err: ' + err);
        console.info();
    }
});