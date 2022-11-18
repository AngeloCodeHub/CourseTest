/**
 * Created by king on 15-6-5.
 *
 * ch11.stream_readable_pipe.js
 */
console.info("------   stream pipe write file   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var readable = fs.createReadStream('data/srcFile.txt');
/**
 * 使用檔案系統（fs）模組的createWriteStream()方法建立可寫（Writable）流
 */
var writable = fs.createWriteStream('data/destFile.txt');
/**
 * 所有來自readable的資料會被寫入到'data/destFile.txt'文字檔案中
 */
readable.pipe(writable);