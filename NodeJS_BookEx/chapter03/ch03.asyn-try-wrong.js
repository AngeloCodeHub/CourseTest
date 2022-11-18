/**
 * Created by king on 15-2-12.
 *
 * ch03.asyn-try-wrong.js
 */
console.info('------   Node.js非同步程式設計:異常捕獲!   ------');
/**
 * 錯誤方式
 */
try{
    setTimeout(function(){
        var data = a/0;     // TODO: 錯誤的計算
    },1000);
}catch (e){
    console.log(e);
}
console.info();