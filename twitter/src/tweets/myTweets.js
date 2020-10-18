import React, { Component } from 'react'
import { fetchMyTweet } from '../actions'
import { connect } from 'react-redux'
import TweetItem from './tweetItem'
import './tweetItem.css'
class MyTweets extends Component {
    componentDidMount(){
        this.props.fetchMyTweet(this.props.auth.email);
    }
    render() {
        
        return (
            <div className="tweetItem-container ui feed">
                {this.props.myTweetList.map(tweet=>(
                    <TweetItem key={tweet.uid} tweet={tweet}/>
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    auth : state.auth,
    myTweetList : state.myTweetList}
}

export default connect(mapStateToProps, { fetchMyTweet })(MyTweets)