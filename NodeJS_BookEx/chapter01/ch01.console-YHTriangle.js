/**
 * Created by KING on 2015/2/9.
 *
 * ch01.console-YHTriangle.js
 */
var i, j, k, strLine;
var readline = require('readline');
rl = readline.createInterface(
    process.stdin,
    process.stdout
);
rl.question("line is：", function(iLine) {// TODO: 請輸入楊輝三角行數
    // TODO: 輸出楊輝三角第一行
    strLine = ">";
    for(i=1; i<=10*iLine; i++)
    {
        if(i == 5*iLine)
        {
            strLine = strLine + 1;
        } else {
            strLine = strLine + " ";
        }
    }
    console.info(strLine);
    // TODO: 輸出楊輝三角後續行
    strLine = ">";
    for(j=1; j<=iLine-1; j++)
    {
        for(k=1; k<5*(iLine-j-1); k++)
        {
            strLine = strLine + " ";
        }
        y = 1;
        strLine = strLine + FormatNumber(y);
        for(k=1; k<=j; k++)
        {
            y = y*(j-k+1)/k;
            strLine = strLine + FormatNumber(y);
        }
        console.info(strLine);
        strLine = ">";
    }
    rl.close();
});
/**
 * FormatNumber()方法用于格式化輸出楊輝三角
 * @param y
 * @returns {string}
 * @constructor
 */
function FormatNumber(y) {
    var strL = "";
    if(y < 10)
    {
        strL = strL + "     " + y + "    ";
    }
    else if((y >= 10) && (y < 100))
    {
        strL = strL + "    " + y + "    ";
    }
    else if(y >= 100)
    {
        strL = strL + "    " + y + "   ";
    }
    return strL;
}