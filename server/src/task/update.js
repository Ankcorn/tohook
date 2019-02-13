const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const updateTaskSchema = tcomb.struct(
  {
    taskid: tcomb.String,
    description: tcomb.maybe(tcomb.String),
    done: tcomb.maybe(tcomb.String),
    order: tcomb.maybe(tcomb.Number)
  },
  { strict: true }
);

async function updateTask(req, res) {
  try {
    await Todo.findOneAndUpdate(
      { 'tasks._id': req.params.taskid },
      {
        $set: Object.entries(req.body).reduce((sum, el) => ({ ...sum, ...{ [`tasks.$.${el[0]}`]: el[1] } }), {})
      }
    );
    return res.send({ status: 'Task Updated' });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  updateTask,
  updateTaskSchema
};
