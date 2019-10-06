const fs = require('fs');
const fileName = `${__dirname}/../data/expenses.json`;
const expenses = JSON.parse(fs.readFileSync(fileName));


exports.getAllExpenses = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
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

  if (!expense) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }
  res.status(200).json({
    status: "success",
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
      status: "success",
      data: {
        expense: newExpense
      }
    });
  });
};
exports.updateExpense = (req, res) => {
  const id = req.params.id * 1;
  const expense = expenses.find(el => el.id === id);

  if (!expense) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      expense: "Updated expense here"
    }
  });
};
exports.deleteExpense = (req, res) => {
  const id = req.params.id * 1;
  const expense = expenses.find(el => el.id === id);

  if (!expense) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }
  res.status(204).json({
    status: "success",
    data: null
  });
};

