/**
 * Created by king on 15-3-22.
 *
 * ch05.process-stdin.js
 */
console.info("------   Process stdin   ------");
console.info();
console.info('使用者輸入資料');
/**
 * readable - 接受控制台用戶輸入事件
 */
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    var chunk = process.stdin.read();   // TODO: process.stdin.read() 方法
    if (chunk !== null) {
        process.stdout.write('Print Data: ' + chunk + '\n');    // TODO: 列印輸出
    }
});
/**
 * end - 結束控制台輸入事件
 */
process.stdin.on('end', function() {
    process.stdout.write('end.\n');
});
console.info();
console.info("------   Process stdin   ------");