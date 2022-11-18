/**
 * Created by king on 15-4-22.
 *
 * ch08.fs_fchmod.js
 */
console.info("------   fs fchmod()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_txt_pre = spawn('ls', ['-lh', 'txt/fchmod.txt']);  // TODO: 定義命令行‘ls -lh /txt’
/**
 * 捕獲控制臺輸出對象stdout,輸出捕獲資料
 */
ls_txt_pre.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    /**
     * 打開檔案（異步方式）
     */
    fs.open('txt/fchmod.txt', 'a', function (err, fd) {
        if(err) {
            throw err;
        } else {
            /**
             * 更改檔案權限(異步方法)
             */
            fs.fchmod(fd, 777, function (err) {
                if(err) {
                    throw err;
                } else {
                    console.info('fchmod() Done.');
                    console.info();
                }
            });
            var ls_txt_suf = spawn('ls', ['-lh', 'txt/fchmod.txt']);  // TODO: 定義命令行‘ls -lh /txt’
            /**
             * 捕獲控制臺輸出對象stdout,輸出捕獲資料
             */
            ls_txt_suf.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });
            /**
             * 鎖定系統‘error’事件
             */
            ls_txt_suf.on('error', function (code) {
                console.log('child process error with code ' + code);
                console.info();
            });
            /**
             * 鎖定系統‘close’事件
             */
            ls_txt_suf.on('close', function (code) {
                console.log('child process closed with code ' + code);
                console.info();
            });
        }
        /**
         * 關閉檔案（異步方法）
         */
        fs.close(fd, function () {
            console.log('fs.close() Done.');
            console.info();
        });
    });
});
/**
 * 鎖定系統‘error’事件
 */
ls_txt_pre.on('error', function (code) {
    console.log('child process error with code ' + code);
    console.info();
});
/**
 * 鎖定系統‘close’事件
 */
ls_txt_pre.on('close', function (code) {
    console.log('child process closed with code ' + code);
    console.info();
});