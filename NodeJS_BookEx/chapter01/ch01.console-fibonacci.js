/**
 * Created by KING on 2015/2/2.
 *
 * ch01.console-fibonacci.js
 */
console.info("\n");
console.info("------Fibonacci數列應用------");
console.info("\n");
var strFibonacci;       // 定義字表串變數,用于輸出Fibonacci數列
var i=1, j=1, s=i+j;    // 初始化變數i,j
strFibonacci = "輸出Fibonacci數列>>> 1 1 ";    // 初始化Fibonacci數列
// 循環結束判斷條件
while(s <= 1000)
{
    strFibonacci = strFibonacci + s + " ";
    i = j;
    j = s;
    s = i + j;  // Fibonacci 數列：F(n) = F(n-1) + F(n-2)
}
console.info(strFibonacci);     // 列印輸出Fibonacci數列
console.info("\n");