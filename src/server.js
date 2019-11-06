const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const logger = require('./middlewares/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/posts', postsRouter)
app.use('/users', usersRouter)

module.exports = app
