/**
 * module define
 * @type {*|exports}
 */
var express = require('express');
var router = express.Router();
/**
 * GET login page.
 */
router.post('/login', function(req, res, next) {
    res.render('login', {
        title: 'Express - Login',
        userid: req.body.userid,
        pwd: req.body.pwd
    });
});
/**
 * 輸出模型router
 */
module.exports = router;
