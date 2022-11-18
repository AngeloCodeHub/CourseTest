/**
 * Created by king on 15-2-12.
 */
var outputVal  = 0;     //輸出值
var increment = 1;    //增量
/* 設定輸出值 */
function seOutputVal (val) {
    outputVal = val;
}
/* 設定增量 */
function setIncrement(incrementVal){
    increment = incrementVal;
}
/* 輸出 */
function printNextCount()
{
    outputVal += increment;
    console.log(outputVal) ;
}
function printOutputVal() {
    console.log(outputVal);
}
exports.seOutputVal = seOutputVal;
exports.setIncrement = setIncrement;
module.exports.printNextCount = printNextCount;