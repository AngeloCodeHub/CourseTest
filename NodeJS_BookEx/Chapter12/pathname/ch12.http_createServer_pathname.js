/**
 * Created by king on 15-6-14.
 *
 * ch12.http_createServer_pathname.js
 */
console.info("------   http - server pathname   ------");
console.info();
var http = require('http');     // TODO: 引入http模組
var url = require('url');     // TODO: 引入url模組
console.log("Now start HTTP server on port 6868...");
console.info();
/**
 * 使用http.createServer()函數方法建立服務器
 */
http.createServer(function(req, res) {
    /**
     * 取得url.pathname路徑
     * @type {pathname|*|req.pathname|parseTests.pathname|parseTestsWithQueryString.pathname|formatTests.pathname}
     */
    var pathname = url.parse(req.url).pathname;
    /**
     * Responding to multi type of request
     */
    if (pathname === '/') {
        /**
         * 通過res.writeHead()函數方法寫HTTP檔案頭
         */
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        /**
         * 通過res.write()函數方法寫頁面內容
         */
        res.write('Node.js --- HTTP\n');
        /**
         * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
         */
        res.end('Home Page\n')
    } else if (pathname === '/about') {
        /**
         * 通過res.writeHead()函數方法寫HTTP檔案頭
         */
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        /**
         * 通過res.write()函數方法寫頁面內容
         */
        res.write('Node.js --- HTTP\n');
        /**
         * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
         */
        res.end('About Us\n')
    } else if (pathname === '/redirect') {
        /**
         * 通過res.writeHead()函數方法寫HTTP檔案頭
         */
        res.writeHead(301, {
            'Location': '/'
        });
        /**
         * 通過res.write()函數方法寫頁面內容
         */
        res.write('Node.js --- HTTP\n');
        /**
         * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
         */
        res.end();
    } else {
        /**
         * 通過res.writeHead()函數方法寫HTTP檔案頭
         */
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        /**
         * 通過res.write()函數方法寫頁面內容
         */
        res.write('Node.js --- HTTP\n');
        /**
         * 通過res.end()函數方法發送響應狀態碼,並通知服務器訊息完成
         */
        res.end('Page not found\n')
    }
}).listen(6868);    // TODO: 監聽6868端口號