import React, { Component } from 'react';




class TopBooks extends Component {

  state = {};
    
    

    getTopBooks(){
        fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q")
            .then(response => {
                return response.json();
            })
            .then(json => {
                addBooksToArray(json.results);
            });
    }

    addBooksToArray (arr){
        arr.map((element) => {
            books.push(element)
        }); 

        
    function displayBooks(){
        books.forEach((book)=> {
            console.log(book);
        });
    }
        
}
    render(){
        return(
            <div>
                <h1>Top Books</h1>
                {getTopBooks()}
            </div>
        )
    }


        
};

export default TopBooks;