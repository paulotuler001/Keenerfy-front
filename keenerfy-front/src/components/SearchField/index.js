import React from 'react';
import './SearchField.css'

const SearchField = (props) =>{
    return (
        <div className='container-search-field'>
            <input placeholder='Search...' value={props.value} onChange={props.onChange}/>
                <i className="fas fa-search"></i>
        </div>
    )
}

export default SearchField