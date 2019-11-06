
const jwt = require('../lib/jwt')

function auth (request, response, next) {
  const { headers } = request
  const { authorization: token } = headers

  try {
    jwt.verify(token)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      message: 'Unauthorized',
      success: false
    })
  }

}

module.exports = auth