/**
 * Created by king on 15-2-12.
 */
從node_modules檔案夾中加載#

如果require()中的模組名不是一個本地模組，也沒有以'/', '../', 或是 './'開頭，那么node會從現在模組的父目錄開始，嘗試在它的/node_modules檔案夾里加載相應模組。

如果沒有找到，那么就再向上移動到父目錄，直到到達頂層目錄位置。

例如，如果位于'/home/ry/projects/foo.js'的檔案使用了require('bar.js')，那么node查詢的位置依次為：

/home/ry/projects/node_modules/bar.js
/home/ry/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js

這就要求程式員應盡量把依賴放在就近的位置，以防崩潰。