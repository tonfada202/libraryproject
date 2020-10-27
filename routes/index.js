var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BK Library 2' });
});

router.get('/index2', function(req, res, next) {
  res.render('index', { title: 'BK Library 5' });
});


module.exports = router;
