import React, { Component } from 'react'
import './newTweet.css'
import { connect } from 'react-redux'
import { sendTweet, updateTweet, deleteTweet } from '../actions/tweetAction'


class NewTweet extends Component {

    constructor(props) {
        super(props)

        const tweet = props.location.state ? props.location.state.tweet : null;
        console.log(props.location)
        this.state = {
            tweet: tweet ? tweet : ''
        }

        this.renderButton = this.renderButton.bind(this);
    }
    handleNewTweet = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.tweet)

    }

    renderButton() {

        const tweet = this.props.location.state ? this.props.location.state : null;
         
        return tweet ? (
                        <div>
                            <button className="red ui button"
                                            onClick={
                                                () => this.props.deleteTweet(tweet.uid)
                                                }>SİL
                            </button>
                            <button className="green ui button"
                                    onClick={()=>this.props.updateTweet({
                                        tweet : this.state.tweet,
                                        uid :  tweet.uid,
                                        email : tweet.email,
                                        date : tweet.date
                                    })}>GÜNCELLE
                            </button>
                        </div>
                        ) : (
                        <button className="positive ui button"
                                onClick={() => this.props.sendTweet(this.state.tweet)}>Positive Button
                        </button>);
    }
    render() {
        return (
            <div className="new-tweet-container">
                <div className="tweet-wrapper">
                    <div className="field tweet-item">
                        <textarea className="field tweet-item" value={this.state.tweet} placeholder="teeetinizi girin"
                            onChange={this.handleNewTweet}
                            name="tweet" />
                    </div>
                    {this.renderButton()}
                </div>
            </div>

        )
    }
}

export default connect(null, { sendTweet, updateTweet, deleteTweet  })(NewTweet)