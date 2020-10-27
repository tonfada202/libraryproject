var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BK Library 2' });
});

router.get('/booksells2', function(req, res, next) {
  res.render('booksells', { title: 'BK Library 5' });
});

const booksellController = require('../controllers/booksellController');

router.get('/test01', booksellController.getAllBooksells)

module.exports = router;
