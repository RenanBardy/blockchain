const crypto = require('crypto')
const hash = require('./hash')

module.exports = function getProofOfWork (lastProof) {
  let proof = 0
  while (!isValid(proof, lastProof)) {
    proof++
  }

  return proof
}

function isValid (lastProof, proof) {
  // to be valid the hash must have four 0 at the end
  const newHash = hash.generate(`${lastProof}${proof}`)
  
  return newHash.split('').slice(-4).reduce((curr, next) => curr && next == '0' , true)
}
