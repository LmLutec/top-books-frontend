import React, { useState } from 'react';




const TopBooks = () => {

    // const [books, setBooks] = useState([]);
    let books = [];

    function getTopBooks(){
        fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q")
            .then(response => {
                return response.json();
            })
            .then(json => {
                addBooksToArray(json.results);
            });
    }

    function addBooksToArray (arr){
        arr.map((element) => {
            books.push(element)
        }); 
        
        
        console.log(books)
    }


        return(
            <div>
                <h1>Top Books</h1>
                {getTopBooks()}
            </div>
        )
};

export default TopBooks;