import React from 'react';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';
import CategoryForm from '../../components/categoryForm/CategoryForm';
import CategoryList from '../../components/categoryList/CategoryList';  

const Home = () => {
    return (
        <div className="container-fluid" style={{minHeight : '500px'}}>
        <div className="row mt-2">
            <div className="col-sm-12 col-md-5 col-lg-3">
                <TodoForm />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-6">
                <TodoList />
            </div>
            <div className="col-sm-12 col-sm-5 col-lg-3">
                <CategoryForm />
                <CategoryList />
            </div>
        </div>
        </div>
    )
}

export default Home;