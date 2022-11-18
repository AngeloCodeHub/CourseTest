/**
 * Created by king on 15-4-27.
 *
 * ch08.fs_mkdirSync.js
 */
console.info("------   fs mkdirSync()   ------");
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var mkdirsync = 'dir/mkdirsync';   // TODO: 定義目錄
fs.mkdirSync(mkdirsync, 0777); // TODO: 建立目錄（同步方法）
console.info('fs.mkdirSync() done!');
console.info();
var spawn = require('child_process').spawn; // TODO: 引入child_process模組
var ls_dir_mkdir = spawn('ls', ['-lh', 'dir']);  // TODO: 定義命令行‘ls -lh /dir’
/**
 * 捕獲控制臺輸出對象stdout,輸出捕獲資料
 */
ls_dir_mkdir.stdout.on('data', function (data) {
    console.info('ls -lh /dir stdout:');
    console.log('stdout: ' + data);
    console.info();
    fs.rmdirSync(mkdirsync);
    console.info('fs.rmdirSync() done!');
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
console.info();