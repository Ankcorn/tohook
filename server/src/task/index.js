const { addTask, addTaskSchema } = require('./add');
const { deleteTask, deleteTaskSchema } = require('./delete');
const { updateTask, updateTaskSchema } = require('./update');
module.exports = {
  addTask,
  addTaskSchema,
  deleteTask,
  deleteTaskSchema,
  updateTask,
  updateTaskSchema
};
