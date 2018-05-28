const express = require('express');
const router = express.Router();
const helpers = require('../helpers/todo');

router.route('/')
    .get(helpers.getTodos) // SHOW ALL
    .post(helpers.createTodo); // CREATE

// SHOW ONE
router.route('/:todoId')
    .get(helpers.getOneTodo) // SHOW ONE
    .put(helpers.updateOneTodo) // UPDATE
    .delete(helpers.deleteOneTodo); // DELETE

module.exports = router;