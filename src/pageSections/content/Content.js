import React, { Component } from 'react';
import './Content.css';
 

class Content extends Component {
    'use strict';

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {    
        return ( 
            <div>
                <ul className='Content'>
                   {this.props.booksList}
                </ul>         
            </div>
        );
    }

}

export default Content;
