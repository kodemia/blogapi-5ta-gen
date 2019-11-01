const Post = require('../models/post')

function create (title, description, authorName, creationDate, readTime, image) {
  const post = new Post({ title, description, authorName, creationDate, readTime, image })
  return post.save()
}

function getAll () {
  return Post.find()
}

module.exports = {
  create,
  getAll
}