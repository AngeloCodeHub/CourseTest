/**
 * Created by king on 15-3-4.
 *
 * random-a.js
 */
var a;
console.info('隨機產生100以內的整數...');
/**
 * exports random a
 * @returns {number}
 */
exports.generate_a = function() {
    a = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
    return a.toString();
}