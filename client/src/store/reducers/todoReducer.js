import {IS_LOADING, FETCH_TODOS, ADD_TODO, FETCH_TODOS_BY_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY,DELETE_TODO, UPDATE_TODO, FETCH_ERROR, FETCH_CATEGORIES} from '../actions/ActionCreator';

const initState = {
    categories : [],
    todos : [],
    loading : false,
    error : ''
}

const todoReducer = (state = initState, action) => {
    // console.log(action.payload)
    switch(action.type){
        case IS_LOADING :
            return {
                ...state,
                loading : true
            }
        case FETCH_CATEGORIES :
            return {
                ...state,
                categories : action.payload,
                loading : false
            }
        case ADD_CATEGORY : 
            return {
                ...state,
                categories : [action.payload, ...state.categories],
                loading : false
            }
        case FETCH_TODOS_BY_CATEGORY : 
            return {
                ...state,
                todos : action.payload,
                loading : false
            }
        case DELETE_CATEGORY : 
            // console.log("Before Filter: ",state.todos)
            const newTodos = state.todos.filter(todo => todo.category !== action.payload);
            // console.log('After Filter', newTodos);
            return {
                ...state,
                todos : newTodos,
                categories : state.categories.filter(category => category._id !== action.payload),
                
            }
        case FETCH_TODOS : 
            return {
                ...state,
                todos : action.payload,
                loading : false
            }
        case ADD_TODO :
                return {
                    ...state,
                    todos : [action.payload, ...state.todos],
                    loading : false
                }
        case DELETE_TODO : 
                const newTodosAfterDeletion = state.todos.filter(todo => todo._id !== action.payload);
            return {
                ...state,
                todos : newTodosAfterDeletion
            }
        case UPDATE_TODO :
            const updatedTodos = state.todos.map(todo => {
                if(todo._id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo;
            })
            console.log('updated', updatedTodos);
            return {
                ...state,
                todos : updatedTodos
            }
        case FETCH_ERROR : 
            return {
                ...state,
                error : action.payload
            }
        default :
            return state;
    }
}

export default todoReducer;