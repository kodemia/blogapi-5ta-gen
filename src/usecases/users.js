
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

const User = require('../models/user')

async function create ({ email, password, name }) {
  const hash = await bcrypt.hash(password)

  return User.create({ email, password: hash, name })
}

function deleteById (id) {
  return User.findByIdAndDelete(id)
}

function getAll () {
  return User.find()
}

function updateById (id, data) {
  return User.findByIdAndUpdate(id, data)
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('User not found')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (isPasswordCorrect) {
    return jwt.sign({ id: user._id })
  }
  throw new Error ('Invalid password')
}

module.exports = {
  create,
  deleteById,
  getAll,
  updateById,
  login
}