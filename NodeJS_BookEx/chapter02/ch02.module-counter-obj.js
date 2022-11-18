/**
 * Created by king on 15-2-12.
 *
 * ch02.module-counter-obj.js
 */
var outputVal  = 0;     //輸出值
var increment = 1;    //增量
/**
 * 設定輸出值
 */
exports.seOutputVal = function(val) {
    outputVal = val;
}
/**
 * 設定增量值
 */
exports.setIncrement = function(incrementVal) {
    increment = incrementVal;
}
/**
 * 增量列印輸出
 */
exports.printNextCount = function() {
    outputVal += increment;
    console.log(outputVal) ;
}
/**
 * 自動清零
 */
exports.autoSetZero = function() {
    if(outputVal >= 100) {
        outputVal = 0;
    }
    console.log(outputVal);
}