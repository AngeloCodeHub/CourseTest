/**
 * Created by king on 15-6-3.
 *
 * ch11.stream_readable_error.js
 */
console.info("------   stream error event   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var rs = fs.createReadStream('data/error.txt');
/**
 * 流（Stream）模組 --- 'readable'事件處理函數
 */
rs.on('readable', function() {
    console.log('readable event emitted.');
    console.info();
});
/**
 * 流（Stream）模組 --- 'error'事件處理函數
 */
rs.on('error', function () {
    console.log('error event emitted.');
    console.info();
});