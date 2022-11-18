/**
 * Created by king on 15-2-10.
 *
 * ch01.console-factorial.js
 */
console.info("\n");
console.info("------階乘計算------");
console.info("\n");
var iNum, iFactorial=1;     // TODO: 定義並初始化變數
var strFactorial;       // TODO: 定義字表串變數,用于階乘運算結果輸出
// TODO: 從控制臺讀取用戶輸入
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("請輸入階乘運算起始數值:\nn = ", function(iNum) {
    // TODO: 計算階乘結果
    strFactorial = iNum + "! = " + factorial(iNum);
    console.info(strFactorial);     // 輸出計算結果
    console.info("\n");
    rl.close();
});
/**
 * 定義階乘運算的遞歸方法
 */
function factorial(n) {
    if(n > 0)
    {
        if(n == 1)
        {
            iFactorial = 1;
        }
        else
        {
            iFactorial = n * factorial(n-1);
        }
    }
    return iFactorial;
}
