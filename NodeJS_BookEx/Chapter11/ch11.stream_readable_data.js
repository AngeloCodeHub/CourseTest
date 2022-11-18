/**
 * Created by king on 15-6-3.
 *
 * ch11.stream_readable_data.js
 */
console.info("------   stream data event   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var rs = fs.createReadStream('data/data.txt');
/**
 * 使用readable.setEncoding()函數方法設定編碼
 */
rs.setEncoding('utf8');
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
    console.info("讀取'data/data.txt'文字檔案的內容...");
    console.info();
    console.log('讀取到了 %d 字元的資料...', chunk.length);
    console.info();
    console.log('讀取到的資料: ', chunk);
    console.info();
});
/**
 * 流（Stream）模組 --- 'error'事件處理函數
 */
rs.on('error', function () {
    console.log('error event emitted.');
    console.info();
});
/**
 * 流（Stream）模組 --- 'end'事件處理函數
 */
rs.on('end', function () {
    console.log('end event emitted.');
    console.info();
});
/**
 * 流（Stream）模組 --- 'close'事件處理函數
 */
rs.on('close', function () {
    console.log('close event emitted.');
    console.info();
});