import React, { Component } from 'react'
import './searchBar.css'

export default class searchBar extends Component {
    constructor(props)
    {
        super(props);
        this.state={search: ""};
        this.changeText=this.changeText.bind(this);

    }
    changeText = (e) =>{
        this.setState({search: e.target.value});
        console.log(this.state.search);
    }

    searchImage = (e) =>{
        this.props.onSearchImage(this.state.search);
    }
    render() {
        return (
             
                <div className="search-bar-container ui icon input">
                    <input className="prompt" 
                           type="text" 
                           value={this.state.search}
                           placeholder="Search animals..." 
                           onChange={this.changeText}
                           onKeyPress={(e)=>{
                               if(e.key === "Enter")
                               {
                                   this.searchImage();
                               }
                           }}/>
                    <button className="ui icon button" onClick={this.searchImage}> 
                        <i className="search icon"></i>
                    </button>
                </div>
                 
             
        )
    }
}
