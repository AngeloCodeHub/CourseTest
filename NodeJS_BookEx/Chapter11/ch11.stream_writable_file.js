/**
 * Created by king on 15-6-9.
 *
 * ch11.stream_writable_file.js
 */
console.info("------   stream writable file   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）createWriteStream()方法建立可寫（Writable）流
 */
var ws = fs.createWriteStream('data/writable.txt');
ws.write('stream - ');      // TODO: 寫資料
ws.write('writable - ');    // TODO: 寫資料
ws.write('file - ');        // TODO: 寫資料
/**
 * 通過setTimeout()方法設定1000ms時間延遲
 * 自行關閉檔案流
 */
setTimeout(function () {
    ws.end('end.\n');   // TODO: 關閉檔案流
}, 1000);