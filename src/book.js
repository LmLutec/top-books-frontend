import React from 'react';


const Book = (props) => {
    const book = props;


        return(
            <div>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                <p>{book.publisher}</p>
            </div>
        )

}

export default Book; 