import React,{useState} from 'react';
import { connect } from 'react-redux';
import {addCategory} from '../../store/actions/ActionCreator';
const CategoryForm = (props) => {
    
    const[categoryName, setCategoryName] = useState('');

    const handleChange = (e) => {
        // console.log(e.target.value)
        setCategoryName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(categoryName !== ''){
            props.addCategory(categoryName);
            setCategoryName('');
        }
        else{
            alert('Please enter a value');
        }
    }
    return (
        <div>
            <h3 className="text-center">Bucket List</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={categoryName} onChange={handleChange} placeholder="Enter Bucket Name"></input>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-success">Add a Bucket</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory : (categoryName) => dispatch(addCategory(categoryName))
    }
}
export default connect(null, mapDispatchToProps)(CategoryForm);