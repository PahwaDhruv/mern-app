const express = require('express');
const router = express.Router();

const CategoryController = require('../../controllers/CategoryController');

// @route GET /api/category
// @desc Get all categories 
// @access Public
router.get('/category', CategoryController.getCategories);

// @route POST /api/category
// @desc Save a Category 
// @access Public
router.post('/category', CategoryController.addCategory)

// @route DELETE /api/category
// @desc Deletes a Category 
// @access Public
router.delete('/category/:id', CategoryController.deleteCategory)

// @route GET /api/todos
// @desc Get all todos
// @access Public
router.get('/todos', CategoryController.getTodos);

// @route GET /api/todos
// @desc Get a todo
// @access Public
router.get('/todos/:todoId', CategoryController.getTodoById);

// @route POST /api/todos
// @desc Save a todo
// @access Public
router.post('/todos', CategoryController.addTodo);

// @route GET /api/category/todos
// @desc Get all todos for a given category
// @access Public
router.post('/category/todos', CategoryController.getTodosByCategory);

// @route DELETE /api/todos/:todoId
// @desc Deletes a todo by an id
// @access Public
router.delete('/todos/:todoId', CategoryController.deleteTodo);

// @route DELETE /api/todos/:todoId
// @desc Deletes a todo by an id
// @access Public
router.patch('/todos/:todoId', CategoryController.updateTodo)

module.exports = router;