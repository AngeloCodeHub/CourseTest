/**
 * Created by king on 15-4-27.
 *
 * ch08.fs_mkdir.js
 */
console.info("------   fs mkdir()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var mkdir = 'dir/mkdir';   // TODO: 定義目錄
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
/**
 * 建立目錄（異步方法）
 */
fs.mkdir(mkdir, 0777, function (err) {
    if (err) {
        console.log(err);
        console.info();
    } else {
        console.log("fs.mkdir() done!");
        console.info();
        var ls_dir_mkdir = spawn('ls', ['-lh', 'dir']);  // TODO: 定義命令行‘ls -lh /dir’
        /**
         * 捕獲控制臺輸出對象stdout,輸出捕獲資料
         */
        ls_dir_mkdir.stdout.on('data', function (data) {
            console.info('ls -lh /dir stdout:');
            console.log('stdout: ' + data);
            console.info();
            fs.rmdir(mkdir, function (err) {
                if (err) {
                    console.log(err);
                    console.info();
                } else {
                    console.log("fs.rmdir() done!");
                    console.info();
                    var ls_dir_rmdir = spawn('ls', ['-lh', 'dir']);  // TODO: 定義命令行‘ls -lh /dir’
                    /**
                     * 捕獲控制臺輸出對象stdout,輸出捕獲資料
                     */
                    ls_dir_rmdir.stdout.on('data', function (data) {
                        console.info('ls -lh /dir stdout:');
                        console.log('stdout: ' + data);
                        console.info();
                    });
                    /**
                     * 鎖定系統‘error’事件
                     */
                    ls_dir_rmdir.on('error', function (code) {
                        console.log('child process error with code ' + code);
                        console.info();
                    });
                    /**
                     * 鎖定系統‘close’事件
                     */
                    ls_dir_rmdir.on('close', function (code) {
                        console.log('child process closed with code ' + code);
                        console.info();
                    });
                }
            });
        });
        /**
         * 鎖定系統‘error’事件
         */
        ls_dir_mkdir.on('error', function (code) {
            console.log('child process error with code ' + code);
            console.info();
        });
        /**
         * 鎖定系統‘close’事件
         */
        ls_dir_mkdir.on('close', function (code) {
            console.log('child process closed with code ' + code);
            console.info();
        });
    }
});
console.info();