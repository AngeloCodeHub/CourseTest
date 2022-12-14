/**
 * Created by KING on 2015/3/14.
 *
 * ch04.buffer-define.js
 */
// TODO: 定義並初始化Buffer對象 --- buffer16
var buffer16 = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]);    // TODO: 數組形式
console.log("The variable buffer16's length is " + buffer16.length + ".");
console.log("The variable buffer16 is " + buffer16 + ".");
// TODO: 使用數組下標形式讀取Buffer對象
for(var i=0; i<buffer16.length; i++)
{
    console.log("buffer16[" + i + "] is " + buffer16[i]);
    console.log("buffer16[" + i + "].toString is " + buffer16[i].toString());
}
console.log(buffer16.toString('utf8')); // TODO: utf8編碼
console.log(buffer16.toString('hex'));  // TODO: hex編碼
// TODO: 定義並初始化Buffer對象 --- bufferUTF8
var bufferUTF8 = new Buffer('nodejs', 'utf8');  // TODO: 編碼形式
console.log("The variable bufferUTF8's length is " + bufferUTF8.length + ".");
console.log("The variable bufferUTF8 is " + bufferUTF8 + ".");
// TODO: 使用數組下標形式讀取Buffer對象
for(var i=0; i<bufferUTF8.length; i++)
{
    console.log("bufferUTF8[" + i + "] is " + bufferUTF8[i]);
    console.log("bufferUTF8[" + i + "].toString is " + bufferUTF8[i].toString());
}
console.log(bufferUTF8.toString('utf8'));   // TODO: utf8編碼
console.log(bufferUTF8.toString('hex'));    // TODO: hex編碼