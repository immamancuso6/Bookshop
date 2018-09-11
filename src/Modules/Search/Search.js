'use strict';
import React from 'react';
import './Search.css';


const Search = (props) => { 
    return (
        <form className="Search">
            <input 
                className="Search__field"
                type="text" 
                value={props.searchedValue}
                placeholder="Search.."
                onChange={props.searchHandler} />
        </form>
    ); 
};
   
export default Search;