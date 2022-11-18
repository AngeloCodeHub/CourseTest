/**
 * Created by king on 15-2-10.
 *
 * ch01.console-primeNum.js
 */
var i, j, iNum, strPrimeNum;
var bFlag;  // TODO: 定義該變數用于標記是否為質數
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * TODO: 用戶輸入一個整數作為上限,通過程式計算從2開始到該整數之間的全部質數
 */
rl.question("Please enter number? ", function(iNum) {
    // TODO: Calculate prime number
    strPrimeNum = " 2 ";
    for(i=3; i<=iNum; i++)  // TODO: 利用for循環計算質數
    {
        bFlag = true;
        for(j=2; j<i; j++)
        {
            if(i%j == 0)    // TODO: 通過if條件判斷是否滿足質數的條件
            {
                bFlag = false;
                break;
            }
        }
        if(bFlag == true)
        {
            strPrimeNum = strPrimeNum + i + " ";    // TODO: 將質數儲存在一個字表串變數中
        }
    }
    console.log("Prime number > ", strPrimeNum);    // TODO: 列印輸出質數序列
    rl.close();
});