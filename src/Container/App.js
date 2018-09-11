import React, { Component } from 'react';  
import axios from 'axios';
import './App.css';
import Header from '../pageSections/header/Header';
import Content from '../pageSections/content/Content';
import Footer from '../pageSections/footer/Footer';
import Product from '../Modules/Product/Product';

import books from '../data/books.json';
import categories from '../data/categories.json';
 

class App extends Component { 
    
    constructor(props) {
    'use strict';
        super(props);
        this.state = {
            searchedValue: '',
            //books: [],
            //categories: [],
            books: books,
            categories: categories,
            booksCount: 0
        }
    }
    
    /*componentDidMount() {
        axios.get('https://fakerestapi.azurewebsites.net/api/Books')
            .then(response => {
                this.setState({
                    books: response.data
                });
                console.log("books", this.state.books);
            })
            .catch((error) => {
                console.log(error);
            });
    }*/
    
    searchHandler = (event) => {
        this.setState({searchedValue: event.target.value}, function () {
            console.log(this.state.searchedValue);
        }); 
    }
    
    add = (function () {
        let counter = 0;
        return function () {
            counter += 1; 
            return counter;
        }
    })();
    
    addToBasket = (id, title, author, price) => {
        this.setState({booksCount: this.add()}, function () {
                console.log("this.state.booksCount", this.state.booksCount);
            });   
    }

    
    render () {
        console.log('books', books);
        console.log('categories', categories);
        
        let books = this.state.books.filter(
            (book, index, array) => {
                const indexOfTitle = book.title.toLowerCase().indexOf(this.state.searchedValue.toLowerCase()) !== -1;
                const indexOfAuthor = book.author.toLowerCase().indexOf(this.state.searchedValue.toLowerCase()) !== -1;
                
                if (this.state.searchedValue) {
                    if(indexOfTitle) {
                       return indexOfTitle;
                   }    
                    if(indexOfAuthor) {
                       return indexOfAuthor;
                   }       
                } else {
                    return book;
                }
            }
        );
        
        let booksList = books.map( (book) => {          
            return (
                <Product 
                    key={book.id}
                    cover={book.cover}
                    title={book.title} 
                    author={book.author}
                    year={book.year}
                    description={book.description} 
                    price={book.price}
                    click={this.addToBasket.bind(this, book.id, book.title, book.author, book.price)}/>
            );  
        }); 

        console.log('booksList', booksList);

        return ( 
            <div className='Container'>
            
                <Header searchedValue={this.state.searchedValue} searchHandler={this.searchHandler.bind(this)} basketCount={this.state.booksCount}/>

                <Content booksList={booksList} />

                <Footer />

            </div>
        );
    }
    
}

export default App;