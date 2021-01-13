import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchCategories, fetchTodos, fetchTodosByCategories, deleteTodo, markTodo} from '../../store/actions/ActionCreator';

const TodoList = (props) => {
    
    useEffect(() => {
        props.getCategories();
        props.getTodos();
    },[])

    const handleChange = (e) => {
        const categoryId = e.target.value;
        console.log(categoryId);
        if(categoryId !== ''){
            props.getTodosByCategoryId(categoryId);
        }
        else{
            props.getTodos();
        } 
    }
    const hanldeDelete = (todoId) => {
        console.log(todoId);
        props.deleteTodo(todoId);
    }
    const markTodo = (todoId) => {
        props.markTodo(todoId);
    }
    const {isLoading,todos,categories} = props;
    return (
        <div>
            <h3 className="text-center">Filter Todos</h3>
            <div className="form-group mb-3">
                <select onChange={handleChange} className="form-control">
                    <option value=''>Choose a Bucket</option>
                {
                    categories.map((category,index) => (<option key={index} value={category._id}>{category.name}</option>))
                }
                </select>
            </div>
            
            {
                isLoading ? (<h1>{'Loading...'}</h1>) : todos.length ? (
                    <ul className="list-group">
                        {
                            todos.map((todo,index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <input type="checkbox" onChange={() => markTodo(todo._id)} checked={todo.completed}/>
                                    <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
                                    {/* <span>{todo.completed ? 'Completed' : 'Pending'}</span> */}
                                    <button type="button" className="btn btn-danger badge badge-pill" onClick={() => hanldeDelete(todo._id)}>X</button>
                                </li>
                            ))
                        }
                    </ul>) : (<h3 className="text-center">{'No Todos under this bucket'}</h3>)
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.todos);
    return {
        isLoading : state.todos.loading,
        todos : state.todos.todos,
        categories : state.todos.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories : () => dispatch(fetchCategories()),
        getTodos : () => dispatch(fetchTodos()),
        getTodosByCategoryId : (categoryId) => dispatch(fetchTodosByCategories(categoryId)),
        deleteTodo : (todoId) => dispatch(deleteTodo(todoId)),
        markTodo : (todoId) => dispatch(markTodo(todoId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);