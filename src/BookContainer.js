import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Book from './book';

class BookContainer extends Component {
    render(){
        return(
            <div>
                <Book />
            </div>
        )
    }
}

export default BookContainer;