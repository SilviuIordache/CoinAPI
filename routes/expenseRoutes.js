const express = require('express');
const expController = require('./../controllers/expenseController');

const router = express.Router();

// router.param('id', expController.checkID);

router
  .route('/')
  .get(expController.getAllExpenses)
  .post(expController.createExpense);

router
  .route('/:id')
  .get(expController.getExpense)
  .patch(expController.updateExpense)
  .delete(expController.deleteExpense);

module.exports = router;
