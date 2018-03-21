const chain = require('./chain')
const hash = require('../lib/hash')
const { getTransactions } = require('./transaction')

module.exports = (function () {
  // Create the genesis block
  const firstBlock = newBlock(100)

  return {
    newBlock
  }
})()

function newBlock (proof, previous_hash) {
  const block = {
    timestamp: Date.now(),
    transactions: getTransactions(),
    proof,
    previous_hash: previous_hash || hash.generate('first-block')
  }

  return chain.addChain(block)
}
