import React, { Component } from 'react'
import SearchBar from './SearchBar/searchBar'
import './app.css'

export default class App extends Component {
    onSearchImage = (deger)=>
    {
        console.log("App: "+deger);
    }
    render() {
        return (
            <div className="app-container"> 
               <SearchBar onSearchImage={this.onSearchImage}/> 
            </div>
        )
    }
}
