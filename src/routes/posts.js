 
const express = require('express')
const posts = require('../usecases/posts')

const router = express.Router()

router.post('/', async (request, response) => {
  const {
    title,
    description,
    authorName,
    creationDate,
    readTime,
    image
  } = request.body
  
  const newPost = await posts.create(title, description, authorName, creationDate, readTime, image)

  response.json({
    message: 'Post created',
    success: true,
    data: {
      post: newPost
    }
  })
})

router.get('/', async (request, response) => {
  const allPosts = await posts.getAll()
  response.json({
    message: 'All posts',
    success: true,
    data: {
      posts: allPosts
    }
  })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  response.json({
    message: 'id',
    success: true,
    data: {
      id
    }
  })
})

module.exports = router
