import React, { Component } from 'react';




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
                console.log('data received')
                this.state.books.push(json.results)
                this.displayBooks()
                // this.addBooksToArray(json.results);
            });
    }

    addBooksToArray = (arr) => {
        return arr.map((element, id) => <li key={id}>{element.title}</li>); 
    };
        
    displayBooks = () => {
        console.log(this.state.books.flat())
        this.state.books.map((book)=> {
            console.log(book[0].title);
        });
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