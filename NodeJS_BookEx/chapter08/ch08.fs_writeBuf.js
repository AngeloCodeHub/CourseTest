/**
 * Created by king on 15-4-29.
 *
 * ch08.fs_writeBuf.js
 */
console.info("------   fs write()   ------");
console.info();
var file_path = "txt/write.txt";
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
        console.info('read txt/write.txt contents: ');
        console.info(file_contents_pre);    // TODO: 列印輸出檔案內容
        console.log('fs.readFileSync() Done.');
        console.info();
        console.info('write to txt/write.txt : ');
        var buf = new Buffer('fs.write(fd, buffer, offset, length[, position], callback)\n');
        /**
         * 寫檔案（異步方法）
         */
        fs.write(fd, buf, 0, buf.length, 0, function (err, bytesWritten, buffer) {
            if (err) {
                throw err;
            } else {
                console.log('寫入資料的字元數: ' + bytesWritten);
                console.log('寫入的資料: ' + buffer);
                /**
                 * 讀檔案（異步方法）
                 */
                fs.readFile(file_path, 'utf-8', function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        console.info('read txt/write.txt contents: ');
                        console.info(data);    // TODO: 列印輸出檔案內容
                        console.log('fs.readFile() Done.');
                        console.info();
                    }
                });
            }
            console.log('fs.write() Done.');
            console.info();
        });
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