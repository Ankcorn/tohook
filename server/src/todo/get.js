const Todo = require('../db/todo.model');
const tcomb = require('tcomb');

const getSchema = tcomb.struct(
  {
    from: tcomb.maybe(tcomb.String),
    to: tcomb.maybe(tcomb.String),
    done: tcomb.maybe(tcomb.String)
  },
  { strict: true }
);

async function get(req, res) {
  try {
    const result = await Todo.find({
      createdBy: req.user.id,
      ...(typeof req.query.done !== 'undefined' && { done: req.query.done })
    })
      .skip(parseInt(req.query.from ? req.query.from : '0'))
      .limit(parseInt(req.query.to ? req.query.to : '10'));
    return res.send(result);
  } catch (e) {
    return res.status(500).send('An error occurred: ' + e);
  }
}

module.exports = {
  get,
  getSchema
};
