/**
 * Created by KING on 2015/1/19.
 *
 * ch01.console-calculate.js
 */
var a, b, sign, summary;
console.info("Calculate start!");
/**
 * 模擬一個控制臺輸入界面
 * @type {exports}
 */
var readline = require('readline'); // TODO: 引入'readline'模組
rl = readline.createInterface(
    process.stdin,
    process.stdout
);
rl.setPrompt('Calculate> ');
rl.prompt();
a = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
b = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
sign = Math.round(Math.random() * 3);   // TODO: 隨機選取四則運算表
summary = switchSign(a, b, sign);
rl.on('line', function(line) {
    if(line.trim() == summary) {       // TODO: 判斷用戶給出的運算結果是否正確
        console.info("answer is right!");
    } else {
        console.info("answer is error! The correct answer is " + summary + ".");
    }
    rl.prompt();
    a = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
    b = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
    sign = Math.round(Math.random() * 3);   // TODO: 隨機選取四則運算表
    summary = switchSign(a, b, sign);
}).on('close', function() {
    console.log('Calculate exits!');
    process.exit(0);
});
/**
 * 四則運算方法 - switchSign()
 * @param a
 * @param b
 * @param sign - 運算表
 * @returns {*}
 */
function switchSign(a, b, sign) {
    var c;
    switch(sign) {
        case 0:
            c = a + b;
            console.info(a + "+" + b + "=");
            break;
        case 1:
            c = a - b;
            console.info(a + "-" + b + "=");
            break;
        case 2:
            c = a * b;
            console.info(a + "*" + b + "=");
            break;
        default:
            c = a + b;
            console.info(a + "+" + b + "=");
            break;
    }
    return c;
}