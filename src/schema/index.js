const blockSchema = require('./block')
const transactionSchema = require('./transaction')

module.exports = {
  validate,
  blockSchema,
  transactionSchema
}

function validate (data, schema) {
  const validFields = Object.keys(data).filter(d => schema[d])
  return validFields.length === Object.keys(schema).length
}