const express = require('express');
const router = express.Router();
const booksellController = require('../controllers/booksellController');

router
.route('/')
.get(booksellController.getAllBooksells)
.post(booksellController.createBooksell);
//router.get('/',BooksellController.getAllBooksells);

router
.route('/:id')
.get(booksellController.getBooksell)
.put(booksellController.updateBooksell)
.delete(booksellController.deleteBooksell);
module.exports = router;