import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {addBook,selectBook} from '../../actions'
import BookItem from './bookItem'
import './bookList.css'
class BookList extends Component {
    /*componentDidMount()
    {
        this.props.addBook({
            isbn : 123,
            title: 'deneme',
            description:'deneme',
            pageNumber:23
        });
       
    }*/
    render() {
        const {bookList} = this.props;
        const {selectBook}= this.props; 
        console.log("bookList içiden seçilen"+ JSON.stringify({selectBook}));
        return (
            <div className="book-list-container ui cards">
                { bookList.map(book => (<BookItem key={book.isbn} book={book}/>)) }
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    console.log(state);
    return {bookList : state.bookList,selectBook: state.selectedBook};
}

export default connect(mapStateToProps,{addBook})(BookList);
