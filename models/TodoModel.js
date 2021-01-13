const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategoryModel = require('./CategoryModel');

const TodoSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    date : {
        type : Date,
        default : Date.now()
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'CategoryModel'
    }
});

const TodoModel = mongoose.model('todo',TodoSchema);
module.exports = TodoModel;