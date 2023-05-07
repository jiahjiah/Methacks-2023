const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Post = mongoose.model('Blog', postSchema);
module.exports = Post;