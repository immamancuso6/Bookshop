import React, { Component } from 'react';
import './Header.css';
import logo from '../../Assets/Images/logo.png';
import basket from '../../Assets/Images/basket_purple.png';
import Logo from '../../Modules/Logo/Logo';
import Search from '../../Modules/Search/Search';
import Basket from '../../Modules/Basket/Basket';
  

class Header extends Component { 
    
    constructor(props) {
    'use strict';
        super(props);
        this.state = {
            logoTagline: 'BookShop'
        }
    }
    
    render () {           
        return (             
          <div className='Header'> 
            
            <div>
                <Logo 
                    src={logo} 
                    alt={'Logo'} 
                    logoTagline={this.state.logoTagline} />
            </div>
            
            
            <div>
                <Search 
                    searchedValue={this.props.searchedValue} 
                    searchHandler={this.props.searchHandler} />
            </div>

            
            <div>
                <Basket 
                    src={basket}
                    basketCount={this.props.basketCount}/>
            </div>
            
            
            <div>
                user
            </div>
            
          </div>
        );
    } 
    
}

export default Header;