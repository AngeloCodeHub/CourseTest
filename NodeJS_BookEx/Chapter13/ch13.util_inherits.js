/**
 * Created by king on 15-6-24.
 *
 * ch13.util_inherits.js
 */
console.info("------   util inherits()   ------");
console.info();
var util = require('util'); // TODO: 引入常用工具（Util）模組
/**
 * 定義原型基類別別別 Base
 * @constructor
 */
function Base() {
    this.name = 'base';
    this.year = 2015;
    this.sayHello = function() {
        console.log('Hello ' + this.name + ',' + 'this is ' + this.year + '.');
    };
}
/**
 * 定義基類別別別 Base 的函數方法 showName()
 */
Base.prototype.showName = function() {
    console.log(this.name);
};
/**
 * 定義基類別別別 Base 的函數方法 showYear()
 */
Base.prototype.showYear = function() {
    console.log(this.year);
};
/**
 * 定義原型子類別別別 Child
 * @constructor
 */
function Child() {
    this.name = 'child';
}
/**
 * 使用util.inherits()函數方法實現原型對象繼承
 */
util.inherits(Child, Base);
/**
 * 定義基類別別別 Base 對象
 * @type {Base}
 */
var objBase = new Base();
objBase.showName();
objBase.showYear();
objBase.sayHello();
console.log(objBase);
/**
 * 定義子類別別別 Child 對象
 * @type {Child}
 */
var objChild = new Child();
objChild.showName();
objChild.showYear();
//objChild.sayHello();
console.log(objChild);