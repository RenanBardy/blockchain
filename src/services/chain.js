const { blockSchema, validate } = require('../schema')

module.exports = (function () {
  const chain = []

  const getChain = () => chain
  const addChain = data => {
    const isDataValid = validate(data, blockSchema)
    if (isDataValid) {
      data.index = chain.length + 1
      chain.push(data)
      return data
    }

    return {
      ...data,
      error: 'Invalid fields'
    }
  }

  return {
    getChain,
    addChain
  }

})()
