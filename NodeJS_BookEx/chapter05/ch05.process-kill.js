/**
 * Created by king on 15-3-23.
 *
 * ch05.process-kill.js
 */
console.info("------   Process kill pid   ------");
console.info();
console.info('現在處理程序id:' + process.pid);
console.info();
process.on('SIGHUP', function() {
    console.log('Got SIGHUP signal.');
});
setTimeout(function() {
    console.log('Exiting...');
    process.exit(0);
    console.info('已經退出處理程序id:' + process.pid);
}, 1000);
process.kill(process.pid, 'SIGHUP');
console.info('正在退出處理程序id:' + process.pid);
console.info();
console.info("------   Process kill pid   ------");