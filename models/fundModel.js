const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FundSchema = new Schema({
  name: {
    type: String,
    required: [true, 'An income must have a name']
  },
  current: Number,
  ceil: Number
});

const Fund = mongoose.model('Fund', FundSchema);
module.exports = {Fund, FundSchema};