import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchCategories, deleteCatetogy} from '../../store/actions/ActionCreator';
const CategoryList = (props) => {
    
    useEffect(() => {
        props.getCategories();
    },[]);

    const handleDelete = (categoryId) =>{
        console.log(categoryId);
        props.deleteCatetogy(categoryId)
    }
    const {loading, categories} = props;
    return (
        <div>
            {
                loading ? (
                    <h1>{'Loading...'}</h1>
                ) : categories.length > 0 ? (
                    <ul className="list-group">
                        {
                            categories.map((category,index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{category.name}</span>
                                    <button type="button" className="btn btn-danger badge badge-pill" onClick={() => handleDelete(category._id)}>X</button>
                                </li>
                            ))
                        }
                    </ul>
                ) : <h3 className="text-center">No Buckets present</h3>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories : state.todos.categories,
        loading : state.todos.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories : () => dispatch(fetchCategories()),
        deleteCatetogy : (categoryId) => dispatch(deleteCatetogy(categoryId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);