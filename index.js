require('dotenv').config()

const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connected')
  })
  .catch(error => {
    console.error('ERROR: ', error)
  })
