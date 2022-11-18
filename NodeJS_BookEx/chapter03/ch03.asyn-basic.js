/**
 * Created by king on 15-2-11.
 *
 * ch03.asyn-basic.js
 */
console.info('------   Node.js非同步程式設計:基礎初步!   ------');
console.info("\n");
// 使用setTimeout()非同步方法初探非同步機制
setTimeout(function(){
    console.log('asyn - print it now!');  // 在回調函數內輸出訊息
},3000);
console.log('asyn - print it 3 second later!');    // 非同步方法後輸出訊息
console.info("\n");
console.info('------   Node.js非同步程式設計   ------');
console.info("\n");