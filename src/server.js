const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts')
const logger = require('./middlewares/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/posts', postsRouter)

module.exports = app
