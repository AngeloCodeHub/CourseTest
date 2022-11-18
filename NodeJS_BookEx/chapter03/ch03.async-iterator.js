/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-iterator.js
 */
var async = require('async');
var iter = async.iterator([
    function() { console.log('111') },
    function() { console.log('222') },
    function() { console.log('333') }
]);
iter();

//iterator(tasks)
將一組函數包裝成為一個iterator，可通過next()得到以下一個函數為起點的新的iterator。該函數通常由async在內部使用，但如果需要時，也可在我們的程式碼中使用它。

var iter = async.iterator([
    function() { console.log('111') },
    function() { console.log('222') },
    function() { console.log('333') }
]);
iter();
/*
直接使用()，會執行現在函數，並返回一個由下個函數為起點的新的iterator。使用next()，不會執行現在函數，直接返回由下個函數為起點的新iterator。

對於同一個iterator，多次使用next()，不會影響自己。如果只剩下一個元素，使用next()會返回null。

通過next函數獲得新的iter，並使用它，看看輸出結果。

想一想哪些場景可以用到iterator呢。

課程小結
async模組在流程控制方面給我們帶來了比較全面的解決辦法，下面我們來回顧一下都有哪幾種方案：

串行控制：
series、waterfall、compose;

並行控制：
parallel、parallelLimit、queue;

循環控制：
whilst、doWhilst、until、doUntil、forever;

其他控制：
apply‘applyEach、iterator、auto;

學習了async模組後，對一般的函數嵌套問題都能夠引刃而解，如果還有比較特別的應用需求，可以跟大家一起討論一下，看看小伙伴有沒有更好的解決辦法，歡迎繼續學習其他課程。
*/