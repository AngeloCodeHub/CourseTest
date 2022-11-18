/**
 * Created by king on 15-2-12.
 */
/*
 一個Node.js檔案就是一個模組，這個檔案可能是Javascript程式碼、JSON或者編譯過的C/C++擴展。
 重要的兩個對象：
 require是從外部取得模組
 exports是把模組介面公開
 */
var counter = require('./1_modules_custom_counter');
console.log('第一次使用模組[1_modules_custom_counter]');
counter.seOutputVal(10);               //設定從10開始計數
counter.setIncrement (10);             //設定增量為10
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
/*
 require多次使用同一模組不會重覆加載
 */
var counter = require('./1_modules_custom_counter');
console.log('第二次使用模組[1_modules_custom_counter]');
counter.printNextCount();

執行可以發現通過exports和module.exports對外公開的方法都可以訪問！

範例中可以看到，我兩次通過require('./1_modules_custom_counter')取得模組，但是第二次引用後使用printNextCount()方法確從60開始~~~

    原因是node.js通過requirerequire多次使用同一模組不會重覆加載，Node.js會根據檔案名暫存所有加載過的檔案模組，所以不會重新加載了

注意：通過檔案名暫存是指實際檔案名，並不會因為傳入的路徑形式不一樣而認會是不同的檔案

在我建立的1_modules_custom_counter檔案中有一個printOutputVal()方法，它並沒有通過exports或module.exports提供對外公開訪問方法，

如果1_modules_load檔案中直接訪問執行會出現什么樣的情況呢？

答案是：TypeError: Object #<Object> has no method 'printOutputVal'
