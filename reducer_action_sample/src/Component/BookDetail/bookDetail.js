import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deselectBook} from '../../actions'

 class BookDetail extends Component {

    renderContent()
    {
        debugger; 
        const {selectBook}= this.props; 
        console.log("detail  içiden seçilen"+ JSON.stringify({selectBook}));
        if( selectBook.isbn )
        {   console.log({selectBook});
            return (
                <div className="ui card">
                <div className="content">
                    <div className="header"> {selectBook.title}</div>
                </div>
                <div className="content">
                    <h4 className="ui sub header">{selectBook.description}</h4>
                    <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                        {selectBook.pageNumber}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="extra content">
                    <button className="ui button" onClick={() =>{this.props.deselectBook()}}>KitapSeçiminden Vazgeç</button>
                </div>
                </div>
                                
            );
        }
        return "seçili kitap yok";
    }

    render() {
        return <div>{this.renderContent()}</div>;
        
    }
}

let mapStateToProps = (state) =>{
    debugger;
    console.log(state)
    return{
        
        selectBook : state.selectedBook
    }
}
debugger;
export default connect(mapStateToProps,{deselectBook})(BookDetail);