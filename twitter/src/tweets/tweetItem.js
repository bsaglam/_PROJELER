import React from 'react'
import './tweetItem.css'
import { withRouter } from 'react-router-dom'

function TweetItem({tweet,history}) {
     
    return (
        
        <div className="event" onClick={()=>{
            history.push({
                pathname : '/editTweet',
                state : tweet
            })}
            }>
        <div className="label">
            <img alt="" src="/images/avatar/small/joe.jpg" />
        </div>
        <div className="content">
            <div className="summary">
                <div>{tweet.email}</div> posted on his page
                <div className="date">
                    {tweet.date}
                </div>
            </div>
            <div className="extra text">
                {tweet.tweet}
            </div>
        </div>
    </div>
    )
}


export default withRouter(TweetItem)