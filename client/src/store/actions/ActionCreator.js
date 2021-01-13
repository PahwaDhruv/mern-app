import axios from 'axios';

export const FETCH_CATEGORIES = 'fetch_categories';
export const IS_LOADING = 'is_loading';
export const FETCH_TODOS_BY_CATEGORY = 'fetch_todos_by_category';
export const FETCH_ERROR = 'fetch_error';
export const FETCH_TODOS = 'fetch_todos';
export const ADD_CATEGORY = 'add_category';
export const ADD_TODO = 'add_todo';
export const DELETE_CATEGORY = 'delete_category';
export const DELETE_TODO = 'delete_todo';
export const UPDATE_TODO = 'update_todo';

export const fetchCategories = () => async dispatch => {
    dispatch({
        type : IS_LOADING
    })
    try{
        const res = await axios.get('/api/category');
        dispatch({
            type : FETCH_CATEGORIES,
            payload : res.data.records
        })
    }
    catch(err){
        console.log(err.message)
        // dispatch({
        //     type : FETCH_ERROR,
        //     payload : err.message
        // });
    }
}
export const fetchTodosByCategories = (categoryId) => async dispatch => {
    dispatch({type : IS_LOADING});
    try{
        const payload = {
            categoryId : categoryId
        }
        const res = await axios.post('/api/category/todos',payload)
        // console.log(res.data.records);
        dispatch({
            type : FETCH_TODOS_BY_CATEGORY,
            payload : res.data.records
        })
    }
    catch(err){
        console.log(err.message);
        dispatch({
            type : FETCH_ERROR,
            payload : err.message
        });
    }
}

export const deleteCatetogy = (categoryId) => async dispatch =>{
    console.log(categoryId);
    try{
        const res = await axios.delete(`/api/category/${categoryId}`)
        // console.log(res.data);
        dispatch({
            type : DELETE_CATEGORY,
            payload : categoryId
        })
    }
    catch(err){
        console.log(err.message);
        // dispatch({
        //     type : FETCH_ERROR,
        //     payload : err.message
        // });
    }
}
export const fetchTodos = () => async dispatch => {
    dispatch({type : IS_LOADING});
    try{
        const res = await axios.get('/api/todos');
        // console.log(res.data.records);
        dispatch({
            type : FETCH_TODOS,
            payload : res.data.records
        })
    }
    catch(err){
        console.log(err.message);
        // dispatch({
        //     type : FETCH_ERROR,
        //     payload : err.message
        // });
    }
}

export const addCategory = (categoryName) => async dispatch => {
    dispatch({type : IS_LOADING});
    try{
        const payload = {
            name : categoryName
        }
        const res = await axios.post('/api/category', payload);
        // console.log(res.data);
        dispatch({
            type : ADD_CATEGORY,
            payload : res.data.records
        })
    }
    catch(err){
        console.log(err.message);
        // dispatch({
        //     type : FETCH_ERROR,
        //     payload : err.message
        // });
    }
}

export const addTodo = (todo) => async dispatch => {
    dispatch({
        type : IS_LOADING
    })
    try{
        const payload = {
            title : todo.title,
            categoryId : todo.categoryId
        }
        const res = await axios.post('/api/todos', payload);
        // console.log(res.data.records);
        dispatch({
            type : ADD_TODO,
            payload : res.data.records
        })
    }
    catch(err){
        console.log(err.message);
        // dispatch({
        //     type : FETCH_ERROR,
        //     payload : err.message
        // });
    }
}

export const deleteTodo = (todoId) => async dispatch => {
    try {
        const res = await axios.delete(`/api/todos/${todoId}`);
        // console.log(res.data);
        dispatch({
            type : DELETE_TODO,
            payload : todoId
        });
    }
    catch(err){
        console.log(err);
    }
} 

export const markTodo = (todoId) => async dispatch => {
    try{
        const res1 = await axios.get(`/api/todos/${todoId}`);
        if(res1.data.records){
            const todo = res1.data.records[0];
            const payload = {
                completed : !todo.completed
            }
            // console.log('pp ->', payload);
            const res2 = await axios.patch(`/api/todos/${todoId}`, payload)
            // console.log(res2.data);
            dispatch({
                type : UPDATE_TODO,
                payload : todoId
            })
        }
    }
    catch(err){
        console.log(err.message);
    }
}