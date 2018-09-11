import React, { Component } from 'react';
import './Footer.css';
import Copyright from '../../Modules/Copyright/Copyright';
  

class Footer extends Component { 
    
    constructor(props) {
    'use strict';
        super(props);
        this.state = {}
    }
    
    render () {           
        return (             
          <div className='Footer'> 
            <Copyright />
          </div>
        );
    } 
    
}

export default Footer;