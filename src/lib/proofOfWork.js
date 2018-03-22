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
  // to be valid the hash must have five 0 at the end
  const newHash = hash.generate(`${lastProof}${proof}`)
  
  return !newHash.split('').slice(-5).some(s => s !== '0')
}
