const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const useJwtAuth = require('./auth');
const User = require('./db/user.model');
const validate = require('tcomb-validation-middleware');
const Todo = require('./todo');
const Task = require('./task');
require('./db/init');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());

const { auth, protection } = useJwtAuth(passport, User);

app.use('/auth', auth);

app.post('/todo', protection(), validate(Todo.createSchema), Todo.create);

app.get('/todo', protection(), validate(Todo.getSchema), Todo.get);

app.put('/todo/:id', protection(), validate(Todo.updateSchema), Todo.update);

app.delete('/todo/:id', protection(), validate(Todo.removeSchema), Todo.remove);

app.post('/todo/:id/task/', protection(), validate(Task.addTaskSchema), Task.addTask);

app.put('/todo/task/:taskid', protection(), validate(Task.updateTaskSchema), Task.updateTask);

app.delete('/todo/task/:taskid', protection(), validate(Task.deleteTaskSchema), Task.deleteTask);

app.listen(4000, () => {
  console.log('server started on port 4000');
});

module.exports = app;
