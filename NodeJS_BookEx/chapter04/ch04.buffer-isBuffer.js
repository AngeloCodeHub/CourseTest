/**
 * Created by KING on 2015/3/15.
 *
 * ch04.buffer-isBuffer.js
 */
console.info("------Buffer.isBuffer()------");
console.info();
var buffer = new Buffer('nodejs', 'utf8');    // TODO: 編碼形式
// TODO: 判斷是否為Buffer物件
if(Buffer.isBuffer(buffer))
{
    console.info("The 'buffer' is a Buffer obj.");
}
else
{
    console.info("The 'buffer' is not a Buffer obj.");
}
var str = "nodejs"; // TODO: 定義字表串變數
// TODO: 判斷是否為Buffer物件
if(Buffer.isBuffer(str))
{
    console.info("The 'str' is a Buffer obj.");
}
else
{
    console.info("The 'str' is not a Buffer obj.");
}
console.info();
console.info("------Buffer.isBuffer()------");