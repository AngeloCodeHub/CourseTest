/**
 * Created by king on 15-4-28.
 *
 * ch08.fs_readFileSync.js
 */
console.info("------   fs readFileSync()   ------");
console.info();
var file_path = "txt/readFileSync.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
if(fs.existsSync(file_path)) {
    var file_contents = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
    console.info('read txt/readFileSync.txt contents: ');
    console.info(file_contents);    // TODO: 列印輸出檔案內容
    console.info();
} else {
    console.log(file_path + 'is not exists.');
    console.info();
}
console.log('fs.readfileSync() Done.');
console.info();