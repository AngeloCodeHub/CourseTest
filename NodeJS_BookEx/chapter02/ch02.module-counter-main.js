/**
 * Created by king on 15-2-12.
 *
 * ch02.module-counter-main.js
 */
console.log();
var counter = require('./ch02.module-counter-obj.js');
console.log('第一次使用模組[ch02.module-counter-obj.js]');
counter.seOutputVal(10);               //設定從10開始計數
counter.setIncrement (10);             //設定增量為10
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
/**
 * require()多次使用同一模組不會重覆加載
 */
var counter = require('./ch02.module-counter-obj.js');
console.log('第二次使用模組[ch02.module-counter-obj.js]');
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
/**
 * 自動清零操作
 */
console.log('自動清零操作');
counter.autoSetZero();
console.log();