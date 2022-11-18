/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-auto.js
 */
var async = require('async');
async.auto({
    getData: function(callback){
        callback(null, 'data', 'converted to array');
    },
    makeFolder: function(callback){
        callback(null, 'folder');
    },
    writeFile: ['getData', 'makeFolder', function(callback, results){
        callback(null, 'filename');
    }],
    emailLink: ['writeFile', function(callback, results){
        callback(null, {'file':results.writeFile, 'email':'user@example.com'});
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});
//auto(tasks, [callback]);
//用來處理有依賴關系的多個任務的執行。
//範例中writeFile依賴getData和makeFolder,emailLink依賴writeFile。
//執行範例程式碼，將所有的results輸出到控制臺，觀察輸出順序和內容。
//存在多個依賴關系的時候，auto讓程式碼變得簡單了不少。