const mongoose = require('mongoose');

const spendingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A spending must have a name']
  },
  cost: {
    type: Number,
    required: [true, 'A spending must have a value'],
    default: 0
  }
});
const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An expense must have a name'],
    unique: [true, 'Expense name must be unique']
  },
  items: {
    type: [spendingSchema]
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
