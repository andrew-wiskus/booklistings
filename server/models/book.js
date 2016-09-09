var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment').schema;


var bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  publishDate: Date,
  comments: [Comment]
});


var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
