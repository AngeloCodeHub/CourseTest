/**
 * Created by king on 15-2-12.
 *
 * ch02.module-exchangerate-obj.js
 */
// 使用module模組的exports方法導出rmb2dollar函數
exports.rmb2dollar = function (m) {
    return m / 6.2467 + " US Dollar";  // 將人民幣按照最新匯率換算成美元並返回
};
// 使用module模組的exports方法導出dollar2rmb函數
exports.dollar2rmb = function (m) {
    return m * 6.2467 + " Yuan of PRC";  // 將美元按照最新匯率換算成人民幣並返回
};