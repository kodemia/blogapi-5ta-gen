const Post = require('../models/post')

function create (title, description, authorName, creationDate, readTime, image) {
  const post = new Post({ title, description, authorName, creationDate, readTime, image })
  return post.save()
}

function getAll () {
  return Post.find()
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function updateById (id, data) {
  return Post.findByIdAndUpdate(id, data)
}

module.exports = {
  create,
  getAll,
  deleteById,
  updateById
}