const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  operation: {
    type: String,
    required: [true, 'A transaction must have a type'],
  },
  description: {
    type: String,
    required: [true, 'A transaction must have a description']
  },
  amount: {
    type: Number,
    required: [true, 'A transaction must have an amount'],
  },
  funds: [{
    name: {
      type: String,
      required: [true, 'A transaction fund split must have a name']
    },
    percentage: {
      type: String,
      required: [true, 'A transaction fund percetage must have a name']
    }
  }]
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = { Transaction, TransactionSchema};