import React, { Component } from 'react';
import Book from './book';



class TopBooks extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []
        };
    }
  
    
    

    
    async componentDidMount(){
        const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q");
        const json = await response.json();
        this.setState({books: json.results})
    };
         
        
    showBooks = () => {
        
        return this.state.books.map((book, id) => <Book key={id} title={book.title} author={book.author} description={book.description} publisher={book.publisher}/>);
    }
        
    
        

    render(){
        return(
            <div>
                <h1>Top Books</h1>
                {this.showBooks()}
            </div>
        )
    }
};

        


export default TopBooks;