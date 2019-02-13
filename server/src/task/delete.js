const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const deleteTaskSchema = tcomb.struct(
  {
    id: tcomb.String,
    taskid: tcomb.String
  },
  { strict: true }
);

async function deleteTask(req, res) {
  try {
    await Todo.findOneAndUpdate(
      { 'tasks._id': req.params.taskid },
      {
        $pull: {
          tasks: { _id: req.params.taskid }
        }
      }
    );
    return res.send({ status: 'Task Removed' });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  deleteTask,
  deleteTaskSchema
};
