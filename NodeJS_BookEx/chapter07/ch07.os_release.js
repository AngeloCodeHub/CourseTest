/**
 * Created by king on 15-4-15.
 *
 * ch07.os_release.js
 */
console.info("------   OS release()   ------");
console.info();
var os = require('os');
var type = os.type();
console.info('操作系統類型: ' + type);
console.info();
var release = os.release();
console.info('操作系統發行版本: ' + release);
console.info();
console.info("------   OS release()   ------");