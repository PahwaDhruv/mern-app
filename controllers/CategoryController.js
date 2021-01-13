const CategoryModel = require('../models/CategoryModel');
const TodoModel = require('../models/TodoModel');

module.exports = {
    getCategories : (req,res) => {
        CategoryModel
        .find()
        .populate('todos')
        .sort({date : -1})
        .then(categories => res.status(200).json({
            records : categories
        }))
    },
    addCategory : (req,res) => {
        const newCategory = new CategoryModel({
            name : req.body.name
        });
        newCategory.save()
        .then(category => res.status(201).json({
            records : category
        }))
    },
    deleteCategory : async (req, res) => {
        const {id} = req.params;
        console.log(id);
        try{
            const category = await CategoryModel.findById(id).populate('todos');
            console.log(category);
            await TodoModel.deleteMany({category : category._id})
            await category.remove();
            res.status(200).json({
                success : true
            })
        }
        catch(err){
            console.log(err);
            res.status(404).json({
                success : false
            })
        }
    },
    getTodos : async (req, res) => {
        try{
            const todos = await TodoModel.find().sort({date : -1});
            res.status(200).json({
                records : todos
            })
        }
        catch(err){
            console.log(err);
        } 
    },
    getTodoById : async (req,res) => {
        const {todoId} = req.params;
        try{
            const todo = await TodoModel.findById(todoId);
            console.log(todo);
            res.status(200).json({
                records : [todo]
            })
        }
        catch(err){
            console.log(err);
            res.status(404).json({
                success : false
            })
        }
    },
    addTodo : async (req, res) => {
        const {categoryId} = req.body;
        const todo = new TodoModel({
            title : req.body.title
        })
        try{
            const category = await CategoryModel.findById(categoryId);
            todo.category = category;
            await todo.save()
            category.todos.push(todo);
            await category.save();
            res.status(201).json({
                records : todo
            });
        }
        catch(err){
            console.log(err.message);
        }
    },
    getTodosByCategory : async (req, res) => {
        // console.log('Request Body',req.body);
        const {categoryId} = req.body;
        try{
            const category = await CategoryModel.findById(categoryId).populate('todos');
            console.log('Categories',category);
            res.status(200).json({
                records : category.todos
            })
        } catch(err){
            console.log(err);
        }
    },
    deleteTodo : async (req, res) => {
        const {todoId} = req.params;
        try{
            const todo = await TodoModel.findById(todoId);
            console.log(todo);
            await todo.remove();
            res.status(200).json({
                success : true
            })
        }
        catch(err){
            console.log(err);
            res.status(404).json({
                success : false,
                message : err.message
            })
        }
    },
    updateTodo : async (req, res) => {
        const {todoId} = req.params;
        const payload = req.body;
        console.log('p -> ',payload);
        try{
            const todo = await TodoModel.findByIdAndUpdate(todoId, payload)
            console.log('todo ->',todo);
            res.status(200).json({
                success : true
            })
        }
        catch(err){
            res.status(404).json({
                success : false,
                message : err.message
            })
        }
    }
};