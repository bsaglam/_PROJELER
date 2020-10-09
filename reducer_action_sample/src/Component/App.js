import React, { Component } from 'react'
import BookList from './BookList/bookList' 
import BookDetail from './BookDetail/bookDetail'
import '../Component/app.css'
export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <BookList />
                <BookDetail />
            </div>
        )
    }
 
}

