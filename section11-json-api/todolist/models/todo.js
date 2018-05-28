const mongoose = require('mongoose');

module.exports = (function() {

    const todoSchema = mongoose.Schema({
        task: {
            type: String, 
            required: 'Task cannot be blank!'
        },
        completed: {
            type: Boolean, 
            default: false
        },
        created_date: {
            type: Date, 
            default: Date.now
        }
    });

    const Todo = mongoose.model('Todo', todoSchema);

    return Todo;
}());