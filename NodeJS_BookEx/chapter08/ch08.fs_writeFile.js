/**
 * Created by king on 15-4-29.
 *
 * ch08.fs_writeFile.js
 */
console.info("------   fs writeFile()   ------");
console.info();
var file_path = "txt/writeFile.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 判斷檔案是否存在（異步方式）
 */
fs.exists(file_path, function (exists) {
    if (exists) {
        /**
         * 讀檔案（異步方法）
         */
        fs.readFile(file_path, 'utf-8', function (err, data) {
            if (err) {
                throw err;
                console.info();
            } else {
                console.info('read txt/writeFile.txt contents: ');
                console.info(data);    // TODO: 列印輸出檔案內容
                console.log('fs.readFile() Done.');
                console.info();
                console.info('write to txt/writeFile.txt : ');
                /**
                 * 寫檔案（異步方法）
                 */
                fs.writeFile(file_path, 'fs.writeFile()', function (err) {
                    if (err) {
                        throw err;
                    } else {
                        /**
                         * 讀檔案（異步方法）
                         */
                        fs.readFile(file_path, 'utf-8', function (err, data) {
                            if (err) {
                                throw err;
                                console.info();
                            } else {
                                console.info('read txt/writeFile.txt contents: ');
                                console.info(data);    // TODO: 列印輸出檔案內容
                                console.log('fs.readFile() Done.');
                                console.info();
                            }
                        });
                    }
                    console.log('fs.writeFile() Done.');
                    console.info();
                });
            }
        });
    } else {
        console.info('err: ' + err);
        console.info();
    }
});
console.info();