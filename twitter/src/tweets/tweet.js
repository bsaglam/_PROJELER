import React, { Component } from 'react'
import { fetchAllTweets } from '../actions'
import { connect } from 'react-redux'
import TweetItem from './tweetItem'


class Tweet extends Component {
    componentDidMount() {
        this.props.fetchAllTweets()
        console.log(this.props.tweetList)
        console.log(Array.isArray(this.props.tweetList))
         
    }
    render() {
        return (
            <div className="tweetItem-container ui feed">
                {this.props.tweetList.map(tweet=>(
                    <TweetItem key={tweet.uid} tweet={tweet}/>
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("maptostateiçi"+state);
    return { tweetList: state.tweetList }
}

export default connect(mapStateToProps, { fetchAllTweets })(Tweet)

