const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoModel = require('./TodoModel');

const CategorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    todos : [{
        type : Schema.Types.ObjectId,
        ref : TodoModel
    }]
});
const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;