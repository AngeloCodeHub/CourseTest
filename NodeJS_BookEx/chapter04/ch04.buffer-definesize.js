/**
 * Created by KING on 2015/3/15.
 *
 * ch04.buffer-definesize.js
 */
// TODO: 定義並初始化Buffer物件 --- buffer
var buffer = new Buffer("This is Buffer", "utf8");  // TODO: 初始化 buffer
console.log("The variable buffer's length is " + buffer.length);
console.log("The variable buffer is " + buffer);
// TODO: 定義並初始化Buffer物件 --- buffer16
var buffer16 = new Buffer(16);
console.log("The variable buffer16's length is " + buffer16.length);
console.log("The variable buffer16 is " + buffer16);
buffer16.write("This is Buffer", 0, "utf8");    // TODO: 初始化 buffer16
console.log("The variable buffer16's length is " + buffer16.length);
console.log("The variable buffer16 is " + buffer16);