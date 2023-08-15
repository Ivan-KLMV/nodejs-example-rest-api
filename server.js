const mongoose = require('mongoose');

const app = require('./app');

const { PORT, MONGO_DB_URL } = process.env;

mongoose
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo DB successfully connected..');
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });

module.exports = app.listen(PORT, () => {
  console.log('Server running. Use our API on port: 3000');
});
