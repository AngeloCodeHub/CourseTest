/**
 * Created by king on 15-4-30.
 *
 * ch08.fs_appendFile.js
 */
console.info("------   fs appendFile()   ------");
console.info();
var file_path = "txt/appendFile.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 判斷檔案是否存在（異步方式）
 */
fs.exists(file_path, function (exists) {
    if (exists) {
        var file_contents_pre = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
        console.info('read txt/appendFile.txt contents: ');
        console.info(file_contents_pre);    // TODO: 列印輸出檔案內容
        console.log('fs.readFileSync() Done.');
        console.info();
        console.info('write to txt/appendFile.txt : ');
        fs.writeFileSync(file_path, 'fs.appendFile(filename, data[, options], callback)\n');  // TODO: 寫檔案（同步方式）
        console.log('fs.writeFileSync() Done.');
        console.info();
        var file_contents_suf = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
        console.info('read txt/appendFile.txt contents: ');
        console.info(file_contents_suf);    // TODO: 列印輸出檔案內容
        console.log('fs.readFileSync() Done.');
        console.info();
        /**
         * 追加寫入檔案（異步方式）
         */
        fs.appendFile(file_path, 'add filename to appendFile.txt\n', function (err) {
            if (err) {
                throw err;
            } else {
                console.log('fs.appendFile() Done.');
                console.info();
                var file_contents_add = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
                console.info('read txt/appendFile.txt contents: ');
                console.info(file_contents_add);    // TODO: 列印輸出檔案內容
                console.log('fs.readFileSync() Done.');
                console.info();
            }
        });
    } else {
        console.info('err: ' + err);
        console.info();
    }
});
console.info();