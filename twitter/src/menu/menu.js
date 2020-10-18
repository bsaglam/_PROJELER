import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../actions'

class Menu extends Component {

    render() {
        const { isLoggedIn } = this.props;
        return isLoggedIn === true
            ?
            (<div className="ui secondary  menu">
                <Link to='/' className="active item">twitler</Link>
                <Link to='/myTweets' className="item">twitlerim</Link> 
                <Link to='/newTweet' className="item">yeni twet</Link> 
                <div className="right menu">
                    <Link to='/' className="right menu item" onClick={()=>this.props.logout()}>çıkış yap</Link>
                </div>
            </div>) :
            (<div className="ui secondary  menu">
                <Link to='/' className="active item">twitler</Link>
                <div className="right menu">
                    <Link to='/login' className="right menu item">giriş yap</Link>
                </div>
            </div>)


    }
}

const mapStateToProps = (state) => {
    console.log(state);
     return {
        isLoggedIn : state.auth.isLoggedIn
     }
   
}
export default connect(mapStateToProps, { logout })(Menu)