import React from 'react';


const Book = (props) => {
    const book = props;


        return(
            <div className="bookInfo">
                {book.title ? <h2>Title: {book.title}</h2> : <h2>Untitled</h2>}
                {book.author ? <h3>Author: {book.author}</h3> : <h3>Unknown</h3>}
                {book.description ? <p>Description: {book.description}</p> : <p>No description provided</p>}
                {book.publisher ? <p>Publisher: {book.publisher}</p> : <p>No publisher information</p>}
            </div>
        )

}

export default Book; 