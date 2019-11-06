 
const express = require('express')
const posts = require('../usecases/posts')

const router = express.Router()

router.use((request, response, next) => {
  console.log('posts router')
  next()
})

router.post('/', async (request, response) => {
  try {
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
  } catch ( error ) {
    response.status(400)
    response.json({
      message: error.message,
      success: false,
      error 
    })
  }
})

router.get('/', async (request, response) => {
  try {
    const allPosts = await posts.getAll()

    response.json({
      message: 'All posts',
      success: true,
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      message: error.message,
      success: false,
      error 
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedPost = await posts.deleteById(id)

    response.json({
      message: 'id',
      success: true,
      data: {
        post: deletedPost
      }
    })
  } catch ( error ) {
    response.status(400)
    response.json({
      message: error.message,
      success: false,
      error 
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const {
      params: { id },
      body: data
    } = request
  
    const updatedPost = await posts.updateById(id , data)
  
    response.json({
      message: 'Post updated',
      success: true,
      data: {
        post: updatedPost
      }
    })

  } catch (error) {
    response.status(400)
    response.json({
      message: error.message,
      success: false,
      error 
    })
  }
})

module.exports = router
