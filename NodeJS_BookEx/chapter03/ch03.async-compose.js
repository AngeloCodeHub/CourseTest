/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-compose.js
 */
var async = require('async');
function fn1(n, callback) {
    setTimeout(function () {
        callback(null, n + 1);
    }, 1000);
}
function fn2(n, callback) {
    setTimeout(function () {
        callback(null, n * 3);
    }, 1000);
}
var demo = async.compose(fn1, fn2);
demo(4, function (err, result) {
    // result now equals 15
});
//compose(fn1, fn2...);
//建立一個包括一組非同步函數的函數集合，每個函數會消費上一次函數的返回值。把f(),g(),h()非同步函數，組合成f(g(h()))的形式，通過callback得到返回值。
//執行範例程式碼，將result結果輸出到控制臺，觀察執行消耗的時間。
//compose和waterfall作用相仿，不過compose更加靈活，可以自定義傳入參數。