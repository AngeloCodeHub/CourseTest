/**
 * Created by king on 15-2-12.
 *
 * ch02.module-exchangerate-load.js
 */
console.info("\n");
console.info("------匯率換算應用------");
console.info("\n");
var exRate = require('./ch02.module-exchangerate.js');  // 加載自定義模組
var readline = require('readline');     // 加載核心模組
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter count: ", function(iMoney) {
    // TODO: 使用dollar2rmb（）方法將美元換算成人民幣
    console.info(iMoney + ' US-Dollar exchange to RMB equals ' + exRate.dollar2rmb(iMoney));
    // TODO: 使用rmb2dollar（）方法將人民幣換算成美元
    console.info(iMoney + ' RMB exchange to US-Dollar equals ' + exRate.rmb2dollar(iMoney));
    rl.close();
});