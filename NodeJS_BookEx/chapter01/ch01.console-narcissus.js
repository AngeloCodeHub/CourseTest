/**
 * Created by KING on 2015/2/5.
 *
 * ch01.console-narcissus.js
 */
var m, a, b, c, sum;
for(m=100; m<1000; m++) {   // 循環判斷100~999整數中的水仙花數
    a = parseInt(m/100);    // 計算出百位數
    b = parseInt((m-a*100)/10);     // 計算出十位數
    c = parseInt(m-a*100-b*10);     // 計算出個位數
    sum = a*a*a + b*b*b + c*c*c;
    if(m == sum) {          // 判斷是否滿足水仙花規則
        console.info("%d", m);
    }
}