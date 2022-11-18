/**
 * Created by king on 15-6-3.
 *
 * ch11.stream_readable_readableB.js
 */
console.info("------   stream readable event   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var rs = fs.createReadStream('data/createReadStream.txt');
/**
 * 流（Stream）模組 --- 'readable'事件處理函數
 */
rs.on('readable', function() {
    console.log('readable event emitted.');
    console.info();
});
/**
 * 流（Stream）模組 --- 'data'事件處理函數
 */
rs.on('data', function (chunk) {
    console.log('data event emitted.');
    console.info();
});
/**
 * 流（Stream）模組 --- 'end'事件處理函數
 */
rs.on('end', function () {
    console.log('end event emitted.');
    console.info();
});