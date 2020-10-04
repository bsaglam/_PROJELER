import React, { Component } from 'react'
import SearchBar from './SearchBar/searchBar'
import './app.css'
import axios from 'axios'

export default class App extends Component {
    state=
    {
        images: []
    }
    onSearchImage = async (deger) => {
        
      const result= await axios.get("https://api.unsplash.com/search/photos",
            {
                params: { query: deger },
                headers: { Authorization: "Client-ID cJbTvZFp7dInIeH7jD_YuXXjgxHiJ5fJRi88wGUjInM" }
            })
        this.setState({images: result.data.results});
    }
    render() {
        return (
            <div className="app-container">
                <SearchBar onSearchImage={this.onSearchImage} />
                <div>{this.state.images.length} resim bulundu</div>
            </div>
        )
    }
}
