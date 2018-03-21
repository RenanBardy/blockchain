const {
  health,
  blockchain
} = require('require-all')(`${__dirname}/handlers`)

module.exports = router => {
  return [
    router.get('/', health),
    router.get('/mine', blockchain.mine),
    router.post('/transaction', blockchain.newTransation),
    router.get('/chain', blockchain.getChain)
  ]
}