import { getQueriesForElement } from '@testing-library/dom';
import React, { Component } from 'react';
import Book from './book';
import BookReviews from './BookReviews';



class TopBooks extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: [],
            color: 'white'
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
        
    changeToRed = (e,src) => {
        // let bodyTag = document.getElementsByTagName('body')
        // bodyTag.background-color = red;
        console.log(e.target.id)
        document.body.style.background = `${e.target.id}`;
        this.setState({
            color: "green"
        });


        
        // div.changeColor = "green";
        // document.p.style.color = "white";
        // console.log(bodyTag)
    }
     
    
        

    render(){
        return(
            <div className="topBooks" style={{color: this.state.color}}>
                <div className="colors">
                    <img src="./images/purple.png" className="color" id= "#5014B8" onClick={(e) => this.changeToRed(e)}></img>
                    <img src="./images/yellow.png" className="color" id= "yellow" onClick={(e) => this.changeToRed(e)}></img>
                </div>
               
                <h1 style={{color: "white"}}>New York Times Best-Sellers</h1>
                {this.showBooks()}
                <button onClick= {this.changeToRed}>Change to Red</button>
            </div>
        )
    }
};

        


export default TopBooks;