/**
 * Created by king on 15-3-4.
 *
 * calculate.js
 */
var a, b, c, sign_a, sign_b, summary;
var ra = require('./random-a');
var rb = require('./random-b');
var rc = require('./random-c');
var sign = require('./sign');
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
a = ra.generate_a();    // TODO: 隨機產生100以內的整數
b = rb.generate_b();    // TODO: 隨機產生100以內的整數
c = rc.generate_c();    // TODO: 隨機產生100以內的整數
sign_a = sign.generate_sign_a();   // TODO: 隨機選取四則運算表
sign_b = sign.generate_sign_b();   // TODO: 隨機選取四則運算表
summary = cal(a, b, c, sign_a, sign_b);
rl.on('line', function(line) {
    if(line.trim() == summary) {       // TODO: 判斷用戶給出的運算結果是否正確
        console.info("answer is right!");
    } else {
        console.info("answer is error! The correct answer is " + summary + ".");
    }
    rl.prompt();
    a = ra.generate_a();    // TODO: 隨機產生100以內的整數
    b = rb.generate_b();    // TODO: 隨機產生100以內的整數
    c = rc.generate_c();    // TODO: 隨機產生100以內的整數
    sign_a = sign.generate_sign_a();   // TODO: 隨機選取四則運算表
    sign_b = sign.generate_sign_b();   // TODO: 隨機選取四則運算表
    summary = cal(a, b, c, sign_a, sign_b);
}).on('close', function() {
    console.log('Calculate exits!');
    process.exit(0);
});
/**
 * 四則運算方法 - cal()
 * @param a
 * @param b
 * @param sign - 運算表
 * @returns {*}
 */
function cal(stra, strb, strc, signa, signb) {
    var s = "";
    var result = 0;
    s = stra + signa + strb + signb + strc;
    console.log(s);
    result = eval(s);   // TODO: 使用eval()方法計算字表串表達式
    return result;
}