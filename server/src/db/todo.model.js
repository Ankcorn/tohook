const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    description: String,
    deadline: Date,
    created: { type: Date, default: Date.now },
    tasks: [String],
    done: { type: Boolean, default: false },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Todo;