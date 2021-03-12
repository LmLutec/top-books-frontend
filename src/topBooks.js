import React, { Component } from 'react';
import Book from './book';



class TopBooks extends Component {

  state = {
      books: []
  };
    
    

    componentDidMount(){
        fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.state.books.push(json.results)
                this.displayBooks()
            });
    }
        
    displayBooks = () => {
        return this.state.books.flat().map((book)=> <Book title={book.title} />) ;
    }

        

    render(){
        return(
            <div>
                <h1>Top Books</h1>
                
            </div>
        )
    }
};

        


export default TopBooks;