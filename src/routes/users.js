
const express = require('express')
const users = require('../usecases/users')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const { body } = request
    const newUser = await users.create(body)

    response.json({
      message: 'User created',
      success: true,
      data: {
        user: newUser
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

router.get('/', async (request, response) => {
  try {
    const allUsers = await users.getAll()

    response.json({
      message: 'All users',
      success: true,
      data: {
        users: allUsers
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

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const deletedUser = await users.deleteById(id)

    response.json({
      message: 'User deleted',
      success: true,
      data: {
        user: deletedUser
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

router.patch('/:id', async (request, response) => {
  try {
    const { body, params } = request
    const { id } = params
    const updatedUser = await users.updateById(id, body)
    response.json({
      message: 'User updated',
      success: true,
      data: {
        user: updatedUser
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

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await users.login(email, password)

    response.json({
      message: 'User logged in',
      success: true,
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      message: 'Invalid data',
      success: false,
      data: {
        isLoggedIn: false
      }
    })
  }
})

module.exports = router
