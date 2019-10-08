const fs = require('fs');

const fileName = `${__dirname}/../data/expenses.json`;
const expenses = JSON.parse(fs.readFileSync(fileName));

exports.checkID = (req, res, next, val) => {
  console.log(`Expense id is: ${val}`);
  if (req.params.id * 1 > expenses.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id'
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  console.log(req.body);
  if (!req.body.name || !req.body.items) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or items'
    });
  }
  next();
};

exports.getAllExpenses = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: expenses.length,
    data: {
      expenses
    }
  });
};
exports.getExpense = (req, res) => {
  const id = req.params.id * 1;
  const expense = expenses.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      expense
    }
  });
};
exports.createExpense = (req, res) => {
  const newId = expenses[expenses.length - 1].id + 1;
  const newExpense = Object.assign({ id: newId }, req.body);

  expenses.push(newExpense);

  fs.writeFile(fileName, JSON.stringify(expenses), err => {
    res.status(201).json({
      status: 'success',
      data: {
        expense: newExpense
      }
    });
  });
};
exports.updateExpense = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      expense: 'Updated expense here'
    }
  });
};
exports.deleteExpense = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
