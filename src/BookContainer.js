import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import TopBooks from './topBooks';


class BookContainer extends Component {
    render(){
        return(
            <div>
                <TopBooks />
            </div>
        )
    }
}

export default BookContainer;