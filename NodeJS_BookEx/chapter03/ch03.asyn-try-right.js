/**
 * Created by KING on 2015/3/18.
 *
 * ch03.asyn-try-right.js
 */
console.info('------   Node.js非同步程式設計:異常捕獲!   ------');
/**
 * 正確方式
 */
setTimeout(function(){
    try{
        var data = b/0;     // TODO: 錯誤的計算
    }catch(e){
        console.log(e);
    }
},1000);
console.info();