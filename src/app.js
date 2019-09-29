const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const expenses = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/expenses.json`),
);

app.get('/expenses', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: expenses.length,
    data: expenses,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
