/**
 * Created by king on 15-4-29.
 *
 * ch08.fs_writeSyncBuf.js
 */
console.info("------   fs writeSync()   ------");
console.info();
var file_path = "txt/writeSync.txt";
var fs = require('fs'); // TODO: 引入檔案系統模組;
/**
 * 打開檔案（異步方式）
 */
fs.open(file_path, 'w', function (err, fd) {
    if(err){
        throw err;
    } else {
        console.log('fs.open() done.');
        console.info();
        var file_contents_pre = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
        console.info('read txt/writeSync.txt contents: ');
        console.info(file_contents_pre);    // TODO: 列印輸出檔案內容
        console.log('fs.readFileSync() Done.');
        console.info();
        console.info('write to txt/writeSync.txt : ');
        var buf = new Buffer('fs.writeSync(fd, buffer, offset, length[, position])\n');
        var len_buf = fs.writeSync(fd, buf, 0, buf.length, 0);  // TODO: 寫檔案（同步方式）
        console.log('fs.writeSync() Done.');
        console.info();
        console.log('寫入資料的字元數: ' + len_buf);
        console.info();
        var file_contents_suf = fs.readFileSync(file_path, 'utf-8');  // TODO: 讀檔案（同步方式）
        console.info('read txt/writeSync.txt contents: ');
        console.info(file_contents_suf);    // TODO: 列印輸出檔案內容
        console.log('fs.readFileSync() Done.');
        console.info();
        /**
         * 關閉檔案（異步方式）
         */
        fs.close(fd, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('fs.close() done.');
                console.info();
            }
        });
    }
});