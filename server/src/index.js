const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const useJwtAuth = require('./auth');
const User = require('./db/user.model');
const validate = require('tcomb-validation-middleware');
const Todo = require('./todo');
require('./db/init');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());

const { auth, protection } = useJwtAuth(passport, User);

app.use('/auth', auth);

app.get('/user', protection(), (req, res) => {
  res.send(`<h1> Hello ${req.user.username} </h1>`);
});

app.post('/todo', protection(), validate(Todo.createSchema), Todo.create);

app.get('/todo', protection(), validate(Todo.getSchema), Todo.get);

app.put('/todo', protection(), validate(Todo.updateSchema), Todo.update);

app.delete('/todo/:id', protection(), validate(Todo.removeSchema), Todo.remove);
app.listen(4000, () => {
  console.log('server started on port 4000');
});
