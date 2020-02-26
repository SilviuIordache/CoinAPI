const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'An expense must have a name']
  },
  items: [{
    name: { 
      type: String,
      required: [true, 'An expense item must have a name']
    },
    cost: {
      type: Number,
      required: [true, 'An expense must have a value'] 
    }
  }]
});

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = {Expense, ExpenseSchema};