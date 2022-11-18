/**
 * Created by king on 15-3-4.
 *
 * random-c.js
 */
var c;
console.info('隨機產生100以內的整數...');
/**
 * exports random c
 * @returns {number}
 */
exports.generate_c = function() {
    c = Math.round(Math.random() * 100);    // TODO: 隨機產生100以內的整數
    return c.toString();
}