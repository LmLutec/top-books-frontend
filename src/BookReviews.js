import React, { Component } from 'react';


class BookReviews extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        };
    }
    

    async componentDidMount(){
        const response = await fetch("https://api.nytimes.com/svc/books/v3/reviews.json?title=57+Chicago&api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q");
        const json = await response.json();
        console.log(json);
    }

    render(){
        return(
            <div>
                <h3>Reviews!</h3>
            </div>
        )
    }
}

export default BookReviews;