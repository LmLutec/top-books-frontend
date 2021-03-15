import React, { Component } from 'react';
import Book from './book';
import BookReviews from './BookReviews';



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
        // add isbn numbers
        return this.state.books.map((book, id) => <Book key={id} title={book.title} author={book.author} description={book.description} publisher={book.publisher}/>);
    }
        
    changeToRed = () => {
        // let bodyTag = document.getElementsByTagName('body')
        // bodyTag.background-color = red;
        document.body.style.background = "red";
        // console.log(bodyTag)
    }
     
        

    render(){
        return(
            <div className="topBooks">
                <h1 style={{color: "white"}}>New York Times Best-Sellers</h1>
                {this.showBooks()}
                <button onClick= {this.changeToRed}>Change to Red</button>
            </div>
        )
    }
};

        


export default TopBooks;