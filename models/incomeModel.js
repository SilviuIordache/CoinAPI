const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'An income must have a name']
  },
  amount: {
    type: Number,
    required: [true, 'An income must have an amount'],
  }
});

const Income = mongoose.model('Income', IncomeSchema);

module.exports = { Income, IncomeSchema};