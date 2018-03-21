
module.exports = healthCheck

function healthCheck (ctx) {
  ctx.body = { 'health': 'ok' }
}
