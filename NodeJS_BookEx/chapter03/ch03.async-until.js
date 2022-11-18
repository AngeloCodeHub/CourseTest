/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-until.js
 */
var async = require('async');
var count = 5;
async.until(
    function () { return count < 0; },
    function (callback) {
        count--;
        setTimeout(callback, 1000);
    },
    function (err) {
        console.log();
    }
);
//until(test, fn, callback)
//until與whilst正好相反，當test條件函數返回值為false時繼續循環，與true時跳出。其它特性一致。
//和whilst類別別別別似的效果，根據實際需要選擇until或whilst。