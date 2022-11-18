/**
 * Created by king on 15-2-23.
 *
 * ch01.console-hanoi.js
 */
var iCount = 0;     //TODO: 定義移動次數
var strMoveStep = "";   // TODO: 儲存移動步驟
console.info();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("請輸入河內塔問題的圓盤數目:\t", function(count) {
    // TODO: print user input
    console.log("輸入河內塔問題的圓盤數目為:\n", count);
    hanoi(count, "A", "B", "C");
    console.info("移動步驟如下:\t%s", strMoveStep);
    console.info("移動次數為:\t%s", iCount);
    console.info();
    rl.close();
});
/**
 * 移動圓盤的方法
 * @param x
 * @param y
 */
function move(x, y) {
    iCount++;
    //console.info("%s->%s", x, y);
    strMoveStep += x + "->" + y + "\t";
}
/**
 * 完成河內塔問題的遞歸方法
 * @param m
 * @param a
 * @param b
 * @param c
 */
function hanoi(m, a, b, c) {
    if(m == 1)
    {
        move(a, c);
    }
    else
    {
        hanoi(m-1, a, c, b);
        move(a, c);
        hanoi(m-1, b, a ,c);
    }
}