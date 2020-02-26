const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;
const IncomeSchema = require('./incomeModel').IncomeSchema;
const ExpenseSchema = require('./expenseModel').ExpenseSchema;

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
  }
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
module.exports = User;