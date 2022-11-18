/**
 * Created by king on 15-2-11.
 *
 * ch03.asyn-closure.js
 */
function func() {   // TODO: 定義func函數實現閉包
    var n = 1;  // TODO: 初始化局部變數
    nAdd = function () {    // TODO: 全局變數nAdd實現的匿名函數實際也是閉包函數
        n++;                // TODO: 實現局部變數 n 的自加作業
    }
    // TODO: 定義closure()顯式閉包函數
    function closure() {
        console.info(n);    // TODO: 列印變數
    }
    return closure;     // TODO: 返回閉包函數
}
var print_n = func();    // TODO: 將函數func()賦給變數 print_n
print_n();  // TODO: 列印func()函數中的局部變數 n(=1）
nAdd();     // TODO: 使用全局變數nAdd
print_n();  // TODO: 列印func()函數中的局部變數 n(=2）

/*在這段程式碼中，result實際上就是閉包f2函數。它一共執行了兩次，第一次的值是999，第二次的值是1000。這證明了，函數f1中的局部變數n一直儲存在記憶體中，並沒有在f1使用後被自動清除。
為什么會這樣呢？原因就在于f1是f2的父函數，而f2被賦給了一個全局變數，這導致f2始終在記憶體中，而f2的存在依賴于f1，因此f1也始終在記憶體中，不會在使用結束後，被垃圾回收機制（garbage collection）回收。
這段程式碼中另一個值得注意的地方，就是“nAdd=function(){n+=1}”這一行，首先在nAdd前面沒有使用var關鍵字，因此 nAdd是一個全局變數，而不是局部變數。其次，nAdd的值是一個匿名函數（anonymous function），而這個
匿名函數本身也是一個閉包，所以nAdd相當于是一個setter，可以在函數外部對函數內部的局部變數進行作業。*/
