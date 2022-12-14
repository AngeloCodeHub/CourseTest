/**
 * Created by king on 15-6-24.
 *
 * ch13.util_inspect.js
 */
console.info("------   util inspect()   ------");
console.info();
var util = require('util'); // TODO: 引入常用工具（Util）模組
/**
 * 定義原型類別別別 Person
 * @constructor
 */
function Person() {
    this.name = 'person';
    this.toString = function() {
        return this.name;
    };
}
/**
 * 定義 Person 對象
 * @type {Base}
 */
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));