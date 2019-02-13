const { create, createSchema } = require('./create');
const { get, getSchema } = require('./get');
const { update, updateSchema } = require('./update');
const { remove, removeSchema } = require('./delete');

module.exports = {
  create,
  createSchema,
  get,
  getSchema,
  update,
  updateSchema,
  remove,
  removeSchema
};
