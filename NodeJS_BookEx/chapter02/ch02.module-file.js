/**
 * Created by king on 15-2-12.
 */
如果按檔案名沒有查詢到，那么node會新增 .js和 .json副檔名名，再嘗試加載，如果還是沒有找到，最後會加上.node的副檔名名再次嘗試加載。

.js 會被解析為Javascript純文本檔案，.json 會被解析為JSON格式的純文本檔案. .node 則會被解析為編譯後的插件模組，由dlopen進行加載。

模組以'/'為前綴，則表示絕對路徑。例如，require('/home/marco/foo.js') ，加載的是/home/marco/foo.js這個檔案。

模組以'./'為前綴，則路徑是相對於使用require()的檔案。 也就是說，circle.js必須和foo.js在同一目錄下，require('./circle')才能找到。

當沒有以'/'或者'./'來指向一個檔案時，這個模組要么是"核心模組"，要么就是從node_modules檔案夾加載的。

如果指定的路徑不存在，require()會拋出一個code屬性為'MODULE_NOT_FOUND'的錯誤。