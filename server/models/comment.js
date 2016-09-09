var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: { type: String, required: true }
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
