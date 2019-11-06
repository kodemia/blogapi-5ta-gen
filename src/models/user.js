const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100
  },
  password: {
    type: String,
    required: true,
    minLength: 1
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  }
})

module.exports = mongoose.model('User', userSchema)