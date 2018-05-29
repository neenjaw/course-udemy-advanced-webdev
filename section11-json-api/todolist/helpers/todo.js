const Todo = require('../models/todo');

// --
// Show all
exports.getTodos = function (req, res) {
    Todo.find()
        .then((todos) => {
            res.json(createJSONReponse(todos));
        })
        .catch((error) => {
            res.json(createJSONErrorResponse(error));
        });
};

// --
// Create
exports.createTodo = function (req, res) {
    const todo = req.body.todo;

    console.log({todo});

    Todo.create(todo)
        .then((newTodo) => {
            res
                .status(201)
                .json(Object.assign(createJSONReponse(newTodo),{created:true}));
        })
        .catch((error) => {
            res.json(createJSONErrorResponse(error));
        });
};

// --
// Show one
exports.getOneTodo = function (req, res) {
    const todoId = req.params.todoId;

    Todo.findById(todoId)
        .then((foundTodo) => {
            res.json(createJSONReponse(foundTodo));
        })
        .catch((error) => {
            res.json(createJSONErrorResponse(error));
        });
};

// --
// Update
exports.updateOneTodo = function (req, res) {
    const todoId = req.params.todoId;
    const todoUpdate = req.body.todo;

    Todo.findByIdAndUpdate(todoId, todoUpdate, {new: true})
        .then((updatedTodo) => {
            res.json(createJSONReponse(updatedTodo));
        })
        .catch((error) => {
            res.json(createJSONErrorResponse(error));
        });
};

// --
// Delete
exports.deleteOneTodo = function (req, res) {
    const todoId = req.params.todoId;
    
    Todo.findByIdAndRemove(todoId)
        .then(() => {
            res.json(Object.assign(createJSONReponse(null), {deleted: true}));
        })
        .catch((error) => {
            res.json(createJSONErrorResponse(error));
        });
};

module.exports = exports;

// --
// Helpers
// --

function createJSONErrorResponse(error) {
    return {
        status: 'ok',
        error: true, 
        message: error
    };
}

function createJSONReponse(payload) {
    if (payload === null || payload === undefined) {
        payload = [];
    }
    else if (!(payload instanceof Array)) {
        payload = [ payload ];
    }

    return {
        status: 'ok',
        result: payload,
        count: payload.length
    };
}