/**
 * Created by king on 15-6-4.
 *
 * ch11.stream_readable_pipe_push.js
 */
console.info("------   stream readable pipe push   ------");
console.info();
var stream = require('stream');  // TODO: 引入流(Stream)模組
var rs = new stream.Readable;   // TODO: 定義Readable對象
rs.push('Stream '); // TODO: 使用push()方法發送資料
rs.push('Readable ');   // TODO: 使用push()方法發送資料
rs.push('Push() '); // TODO: 使用push()方法發送資料
rs.push('Pipe() '); // TODO: 使用push()方法發送資料
rs.push('\n');  // TODO: 使用push()方法發送資料
rs.push(null);  // TODO: 使用push()方法通知發送資料完畢
rs.pipe(process.stdout);    // TODO: 使用pipe()方法導出資料