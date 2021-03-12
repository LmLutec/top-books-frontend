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
            return this.state.books.map((book) => <Book />);
        }
        
        
        
        
        // .then(response => {
            //     return response.json();
            // })
            // .then(json => {
            //     this.state.books.push(json.results)
            //     // this.displayBooks()
            // });
    

    // showBooks = () => {
    //     console.log('called');
    //     // let books = this.state.books.flat();
    //     console.log(this.state.books);
    //     // return books.map((book,id)=> console.log(book));
    // }
    // <Book key={id} book={book}/>
    // displayBooks() {
    //     return this.state.books.flat().map((book,id)=> ( <Book key={id} book={book}/>));
    //         // console.log(`${id}, ${book.title}`));
    //         // <Book info={book} test={'testing'} key={id} />);
    // }

     
    
  
  

    // const renderItems = () => {
    //     return this.props.food.map((items) => {
    //         return items.map((i, id) => <MenuItem deleteFood={this.props.deleteFood} key={id} item={i}/>)
    //     })
            
    // }
        

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