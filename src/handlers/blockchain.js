const blockchain = require('../services/blockchain')
const transaction = require('../services/transaction')
const getProofOfWork = require('../lib/proofOfWork')
const hash = require('../lib/hash')
const chain = require('../services/chain')

module.exports = {
  newTransation,
  getChain,
  mine
}

function newTransation (ctx) {
  const transactionData = ctx.request.body
  ctx.body = transaction.addTransaction(transactionData)
}

function getChain (ctx) {
  ctx.body = chain.getChain()
}

function mine (ctx) {
  const blocks = chain.getChain()
  const lastBlock = blocks[blocks.length - 1]

  // Problem computational
  const proof = getProofOfWork(lastBlock.proof)

  transaction.addTransaction({
    sender: 0,
    recipient: 'Node indentifier',
    amount: 1
  })

  const block = blockchain.newBlock(proof, hash.generate(JSON.stringify(lastBlock)))

  ctx.body = {
    message: 'New Block Forged',
    ...block
  }
}
