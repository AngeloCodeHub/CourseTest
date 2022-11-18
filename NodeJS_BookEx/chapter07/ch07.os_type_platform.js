/**
 * Created by king on 15-4-14.
 *
 * ch07.os_type_platform.js
 */
console.info("------   OS type() & platfrom()   ------");
console.info();
var os = require('os');
var type = os.type();
console.info('現在操作系統類型為: ' + type);
console.info();
var platform = os.platform();
console.info('現在操作系統平臺為: ' + platform);
console.info();
console.info("------   OS type() & platfrom()   ------");