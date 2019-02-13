const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const updateSchema = tcomb.struct(
  {
    id: tcomb.String,
    description: tcomb.maybe(tcomb.String),
    deadline: tcomb.maybe(tcomb.Date),
    done: tcomb.maybe(tcomb.Boolean)
  },
  { strict: true }
);

async function update(req, res) {
  try {
    const result = await Todo.findByIdAndUpdate(req.body.id, {
      $set: {
        ...(typeof req.body.description !== 'undefined' && { description: req.body.description }),
        ...(typeof req.body.deadline !== 'undefined' && { deadline: req.body.deadline }),
        ...(typeof req.body.done !== 'undefined' && { done: req.body.done })
      }
    });
    return res.send({ id: result._id });
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  update,
  updateSchema
};
