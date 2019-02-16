const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO, {
  useCreateIndex: true,
  useNewUrlParser: true
});
