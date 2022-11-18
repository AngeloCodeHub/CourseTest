/**
 * module define
 * @type {*|exports}
 */
var express = require('express');
var router = express.Router();
/**
 * GET get page.
 */
router.get('/get', function(req, res, next) {
    res.render('get', {
        title: 'Express - GET/POST',
        name: req.query.name,
        email: req.query.email
    });
});
/**
 * 輸出模型router
 */
module.exports = router;
