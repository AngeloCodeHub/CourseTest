/**
 * Created by king on 15-4-15.
 *
 * ch07.os_mem.js
 */
console.info("------   OS mem()   ------");
console.info();
var os = require('os'); // TODO: 引入OS模組
var totalmem = os.totalmem();
console.info('作業系統記憶體總量為: ' + totalmem + ' byte.');
console.info('作業系統記憶體總量為: ' + parseInt(totalmem / 1024 / 1024) + ' Mb.');
console.info();
var freemem = os.freemem();
console.info('作業系統空閒記憶體為: ' + freemem + ' byte.');
console.info('作業系統空閒記憶體為: ' + parseInt(freemem / 1024 / 1024) + ' Mb.');
console.info();
console.info("------   OS mem()   ------");