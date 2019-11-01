
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 15,
    required: true
  },
  description: {
    type: String,
    maxlength: 120,
    required: false,
  },
  authorName: {
    type: String,
    maxlength: 20,
    default: 'Anonymous'
  },
  creationDate: {
    type: Date,
    required: true
  },
  readTime: {
    type: Number,
    min: 1,
    required: true
  },
  image: {
    type: String,
    required: true,
    maxlength: 300
  }
})

module.exports = mongoose.model('Post', postSchema)