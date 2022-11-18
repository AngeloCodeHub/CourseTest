/**
 * Created by king on 15-6-5.
 *
 * ch11.stream_readable_unpipe.js
 */
console.info("------   stream pipe write file   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
/**
 * 使用檔案系統（fs）模組的createReadStream()方法建立可讀（Readable）流
 */
var readable = fs.createReadStream('data/srcUnFile.txt');
/**
 * 使用檔案系統（fs）模組的createWriteStream()方法建立可寫（Writable）流
 */
var writable = fs.createWriteStream('data/destUnFile.txt');
/**
 * 所有來自readable的資料會被寫入到'data/destUnFile.txt'文字檔案中
 */
readable.pipe(writable);
/**
 * 通過setTimeout()方法設定1ms時間延遲
 * 並通過unpipe()方法解除pipe()方法設定的流
 * 最後自行關閉檔案流
 */
setTimeout(function() {
    console.log('停止寫入到 data/destUnFile.txt');
    console.info();
    readable.unpipe(writable);  // TODO: 解除設定的流
    console.log('自行關閉檔案流');
    console.info();
    writable.end();     // TODO: 關閉檔案流
}, 1);