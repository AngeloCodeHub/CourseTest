/**
 * Created by KING on 2015/1/16.
 *
 * ch01.console-write.js
 */
console.info('Node.js - readline.write() Usage');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.write('Delete me! Wait for 3 seconds...');
var timeoutLength = 5 * 1000; // three second
var timeout = setTimeout(function() {
    // 模仿 ctrl+u快捷鍵，刪除之前所寫行
    rl.write(null, {ctrl:true, name:'u'});
}, timeoutLength);
// clearTimeout(timeout);