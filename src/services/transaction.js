const { transactionSchema, validate } = require('../schema')

module.exports = (function chain () {
  let transactions = []

  const getTransactions = () => {
    const currentTransactions = transactions
    transactions = []
    return currentTransactions
  }

  const addTransaction = data => {
    const isDataValid = validate(data, transactionSchema)
    if (isDataValid) {
      data.index = transactions.length + 1
      transactions.push(data)
      return transactions
    }
    return {
      ...data,
      error: 'Data invalid'
    }
  }

  return {
    getTransactions,
    addTransaction
  }

})()

