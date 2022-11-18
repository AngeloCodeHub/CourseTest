/**
 * Created by KING on 2015/2/25.
 *
 * ch03.async-apply.js
 */
apply(function, arguments..)
apply是一個非常好用的函數，可以讓我們給一個函數預鎖定多個參數並產生一個可直接使用的新函數，簡化程式碼。範例如下：

function(callback) {
    test(3, callback);
};
用apply改寫：
async.apply(test, 3);
log是通過為console.log函數預設了一個參數'> '而得到的新函數，其輸出格式為'> ****'，請實現log函數，並使用它輸出'> good';

//apply是個非常實用的函數，運用得當會減少很多基礎工作。