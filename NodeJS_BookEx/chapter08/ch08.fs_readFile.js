/**
 * Created by king on 15-4-28.
 *
 * ch08.fs_readFile.js
 */
console.info("------   fs readFile()   ------");
console.info();
var file_path = "txt/readFile.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 判斷檔案是否存在（異步方式）
 */
fs.exists(file_path, function (exists) {
    if (exists) {
        fs.readFile(file_path, 'utf-8', function (err, data) {
            if (err) {
                throw err;
                console.info();
            } else {
                console.info('read txt/readFile.txt contents: ');
                console.info(data);    // TODO: 列印輸出檔案內容
                console.info();
                console.log('fs.readFile() Done.');
                console.info();
            }
        });
    } else {
        console.info('err: ' + err);
        console.info();
    }
});
console.info();