const crypto = require('crypto')
const { SECRET } = require('../../server/constants')

module.exports = {
  generate
}

function generate (text) {
  return crypto.createHmac('sha256', SECRET)
                   .update(text)
                   .digest('hex')
}