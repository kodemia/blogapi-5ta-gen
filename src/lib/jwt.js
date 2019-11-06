const jwt = require('jsonwebtoken')

const secretWord = process.env.JWT_SECRET

function sign(payload = {}) {
  return jwt.sign(payload, secretWord)
}

function verify (token) {
  return jwt.verify(token, secretWord)
}

module.exports = {
  sign,
  verify
}