const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const addTaskSchema = tcomb.struct(
  {
    id: tcomb.String,
    description: tcomb.String,
    order: tcomb.Number
  },
  { strict: true }
);

async function addTask(req, res) {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, {
      $push: {
        tasks: {
          ...req.body,
          done: false
        }
      }
    });
    return res.send({ id: result._id, status: 'Task Added' });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  addTask,
  addTaskSchema
};
