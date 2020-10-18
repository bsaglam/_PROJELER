import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import Menu from './menu/menu'
import Tweet from './tweets/tweet'
import MyTweets from './tweets/myTweets';
import NewTweet from './tweets/newTweet'
import Login from './login/login'
import firebase from 'firebase'
import { isLoggedIn } from './actions'
import { connect } from 'react-redux'


class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBQ5v0fNd5vQaRuuuCV0nFolle3Ac4NXD4",
      authDomain: "twitter-2e044.firebaseapp.com",
      databaseURL: "https://twitter-2e044.firebaseio.com",
      projectId: "twitter-2e044",
      storageBucket: "twitter-2e044.appspot.com",
      messagingSenderId: "1095297003202",
      appId: "1:1095297003202:web:67d3c670c8d8fdbce8155b",
      measurementId: "G-RW2SQZH9K8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.props.isLoggedIn();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Menu />
          <Switch>
            <Route path='/' exact component={Tweet} />
            <Route path='/myTweets' exact component={MyTweets} />
            <Route path='/login' component={Login} />
            <Route path='/newTweet' component={NewTweet} />
            <Route path='/editTweet' component={NewTweet} /> 
            {/* edit tweet için ayrıca component oluşturmak istemiyorum. bunu kullanmam gerek */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect( null, {isLoggedIn})(App);
