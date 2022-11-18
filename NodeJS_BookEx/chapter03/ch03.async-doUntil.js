/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-doUntil.js
 */
var async = require('async');
var count = 5;
async.doUntil(
    function (callback) {
        count--;
        setTimeout(callback, 1000);
    },
    function () { return count < 0; },
    function (err) {
        console.log();
    }
);
//doUntil(fn, test, callback)
//doUntil與doWhilst正好相反，當test為false時循環，與true時跳出。其它特性一致。
//和doWhilst類別別別別似的效果，根據實際需要選擇doUntil或doWhilst。