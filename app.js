const express = require('express');
const morgan = require('morgan');

const app = express();
const expenseRouter = require('./routes/expenseRoutes');
const userRouter = require('./routes/userRoutes');

// MIDDLEWEARS
if (process.env.NODE_ENV === 'development') {
  // enable logging only for development mode
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middlewear ');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/expenses', expenseRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
