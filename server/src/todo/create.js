const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const createSchema = tcomb.struct(
  {
    description: tcomb.String,
    deadline: tcomb.maybe(tcomb.Date)
  },
  { strict: true }
);

async function create(req, res) {
  try {
    const todo = new Todo({ ...req.body, createdBy: req.user.id });
    const result = await todo.save();
    return res.send({ id: result._id });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  create,
  createSchema
};
