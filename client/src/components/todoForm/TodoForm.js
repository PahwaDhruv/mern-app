import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {addTodo,fetchCategories } from '../../store/actions/ActionCreator';

const TodoForm = (props) => {
    const initState = {
        title : '',
        categoryId : ''
    }
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
        props.getCategories();
    },[])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTodo({
            ...todo,
            [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(todo);
        if(todo.title !== '' && todo.categoryId !==''){
            props.addTodo(todo)
            setTodo( {
                ...todo,
                title : '',
                categoryId : ''
            })
        }
        else{
            alert('Please enter a value');
        }
    }
    const{categories} = props;
    return (
        <div>
            <h3 className="text-center">Todo Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" value={todo.title} onChange={handleChange} placeholder="Enter a title"></input>
                </div>
                <div className="form-group">
                    <select name="categoryId" value={todo.categoryId} className="form-control" onChange={handleChange}>
                        <option>Choose a Bucket</option>
                        {
                            categories.map((category,index) => (<option key={index} value={category._id}>{category.name}</option>))
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories : state.todos.categories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategories : () => dispatch(fetchCategories()),
        addTodo : (todo) => dispatch(addTodo(todo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);