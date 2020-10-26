const mongoose = require('mongoose');

const booksellSchema = new mongoose.Schema({
id: Number,
name: String,
imageURL: String,
type: String,
price: String
});

const Booksell = mongoose.model('Booksell',booksellSchema);

module.exports = Booksell;