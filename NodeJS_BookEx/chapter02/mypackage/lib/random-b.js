/**
 * Created by king on 15-3-4.
 *
 * random-b.js
 */
var b;
console.info('隨機產生100以內的整數...');
/**
 * exports random b
 * @returns {number}
 */
exports.generate_b = function() {
    b = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
    return b.toString();
}