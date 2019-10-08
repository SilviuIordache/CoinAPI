const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV === 'development') {
  process.env.DB = process.env.DB_LOCAL;
}
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log(`DB connection successful: ${process.env.DB}`));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started. Listening on port: ${port}.`);
});
