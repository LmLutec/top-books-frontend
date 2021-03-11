import React, { Component } from 'react';




class TopBooks extends Component {

    getTopBooks = () => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=pccZUGYERtQZfu94bOCqSmWa6RaGL10Q")
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
            });
    }

    // return (dispatch) => {
    //     fetch(`https://alwaysonthego.herokuapp.com/api/v1/foodtrucks/${foodtruck.id}`, formData)
    //     .then(response => {
    //         return response.json()
    // }).then(json => {
    //            dispatch({type: 'EDIT_TRUCK', truck: json})
    //     })
    // }


    render(){
        return(
            <div>
                <h1>Top Books</h1>
                {this.getTopBooks()}
            </div>
        )
    }
};

export default TopBooks;