const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const IncomeSchema = require('./incomeModel').IncomeSchema;
const ExpenseSchema = require('./expenseModel').ExpenseSchema;
const FundSchema = require('./fundModel').FundSchema;
const TransactionSchema = require('./transactionModel').TransactionSchema;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: [true, 'A user must have a name']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'A user must have an email']
  },
  password: {
    type: String,
    required: [true, 'A user must have a password']
  },
  incomes: {
    type: [IncomeSchema],
    default: [],
  },
  expenses: {
    type: [ExpenseSchema],
    default: [],
  },
  funds: {
    type: [FundSchema],
    default: [],
  },
  transactions: {
    type: [TransactionSchema],
    default: [],
  }
}, { versionKey: false });
userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
module.exports = User;