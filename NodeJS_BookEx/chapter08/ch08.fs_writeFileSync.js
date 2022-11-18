/**
 * Created by king on 15-4-29.
 *
 * ch08.fs_writeFileSync.js
 */
console.info("------   fs writeFileSync()   ------");
console.info();
var file_path = "txt/writeFileSync.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組
if(fs.existsSync(file_path)) {
    var file_contents_pre = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
    console.info('read txt/writeFileSync.txt contents: ');
    console.info(file_contents_pre);    // TODO: 列印輸出檔案內容
    console.log('fs.readFileSync() Done.');
    console.info();
    console.info('write to txt/writeFileSync.txt : ');
    fs.writeFileSync(file_path, 'fs.writeFileSync()');  // TODO: 寫檔案（同步方式）
    console.log('fs.writeFileSync() Done.');
    console.info();
    var file_contents_suf = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
    console.info('read txt/writeFileSync.txt contents: ');
    console.info(file_contents_suf);    // TODO: 列印輸出檔案內容
    console.log('fs.readFileSync() Done.');
    console.info();
} else {
    console.log(file_path + 'is not exists.');
    console.info();
}