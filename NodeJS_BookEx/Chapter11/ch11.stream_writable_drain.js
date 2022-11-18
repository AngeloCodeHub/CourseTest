/**
 * Created by king on 15-6-10.
 *
 * ch11.stream_writable_drain.js
 */
console.info("------   stream writable file   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var rs = fs.createReadStream("data/srcDrain.mp3");
/**
 * 使用檔案系統（fs）模組的createWriteStream()方法建立可寫（Writable）流
 */
var ws = fs.createWriteStream("data/destDrain.mp3");
/**
 * 使用readable.setEncoding()函數方法設定編碼
 */
rs.setEncoding('utf8');
/**
 * 流（Stream）模組 --- 'data'事件處理函數
 */
rs.on('data', function(chunk) {
    console.log('data event emitted.');
    console.info();
    /**
     * 通過ws.write()函數方法返回值判斷
     * 資料是已經寫入目標
     * 還是僅僅寫入暫存中
     */
    if(ws.write(chunk) === false) {
        console.log('資料寫入暫存...');
        console.info();
        rs.pause();     // TODO: 暫停可讀（Readable）流
    }
});
ws.on('drain', function() {
    console.log('drain event emitted.');
    console.info();
    rs.resume();        // TODO: 恢復可讀（Readable）流
});
/**
 * 流（Stream）模組 --- 'end'事件處理函數
 */
rs.on('end', function() {
    console.log('end event emitted.');
    console.info();
    ws.end();
});