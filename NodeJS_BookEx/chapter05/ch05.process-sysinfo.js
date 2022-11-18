/**
 * Created by king on 15-3-22.
 *
 * ch05.process-sysinfo.js
 */
console.info("------   Process System Info   ------");
console.info();
console.info('現在處理程序id:');
console.info(process.pid);
console.info();
console.info('現在處理程序名稱:');
console.info(process.title);
console.info();
console.info('Node.js版本號:');
console.info(process.version);
console.info();
console.info('Node.js版本屬性:');
console.info(process.versions);
console.info();
console.info('Node.js設定選項:');
console.info(process.config);
console.info();
console.info('現在系統平台:');
console.info(process.platform);
console.info();
console.info('現在CPU架構:');
console.info(process.arch);
console.info();
console.info('執行現在處理程序可執行檔案的絕對路徑:');
console.info(process.execPath);
console.info();
console.info('現在處理程序的命令行參數數組:');
console.info(process.argv);
console.info();
console.info('指向現在shell的環境變數:');
console.info(process.env);
console.info();
console.info("------   Process System Info   ------");