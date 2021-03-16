import { getQueriesForElement } from '@testing-library/dom';
import React, { Component } from 'react';
import Book from './book';
import BookReviews from './BookReviews';



class TopBooks extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: [],
            color: ''
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
        
    changeToRed = (e) => {
        
        document.body.style.background = `${e.target.id}`;
        this.setState({
            color: "green"
        });

    }
     
    
        

    render(){
        return(
            <div className="topBooks" style={{color: this.state.color}}>
                <div className="colors">
                    <img src="./images/purple.png" className="color" id= "#5014B8" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/yellow.png" className="color" id= "#FDDC22" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/green.png" className="color" id="#58B814" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/red.png" className="color" id="#FE2712" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/orange.png" className="color" id="#FB8604" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/blue.png" className="color" id="#1258DC" onClick={(e) => this.changeToRed(e)}></img>
                </div>
               
                <h1 style={{color: "white"}}>New York Times Best-Sellers</h1>
                {this.showBooks()}
            </div>
        )
    }
};

        


export default TopBooks;