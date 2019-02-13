const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const removeSchema = tcomb.struct(
  {
    id: tcomb.String
  },
  { strict: true }
);

async function remove(req, res) {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    return res.send({ id: result._id, status: 'Todo Deleted' });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  remove,
  removeSchema
};
