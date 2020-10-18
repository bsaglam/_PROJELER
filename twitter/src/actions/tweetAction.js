import firebase from 'firebase'
import 'firebase/database'
import _ from 'lodash'
import history from '../history'
export const SEND_TWEET = "SEND_TWEET"
export const FETCH_ALL_TWEETS = "FETCH_ALL_TWEETS" 
export const FETCH_MY_TWEETS = "FETCH_ALL_TWEETS"
export const sendTweet = (tweet) => {

    return dispatch =>{
        const email = firebase.auth().currentUser.email;
        const date = new Date().toString();
        firebase.database().ref('/tweets')
        .push({email,date,tweet})
        .then(()=>{
            dispatch({type : SEND_TWEET})
        })
    }
     
}


export const fetchAllTweets = () =>{

    return dispatch =>{

        firebase.database().ref('/tweets')
        .on('value', snapshot =>{
            const result = _.map(snapshot.val(),(val,uid)=>{
                return {...val, uid};
            })
            dispatch({type : FETCH_ALL_TWEETS , payload : result})
        })
    }
}



export const updateTweet = ({ tweet, uid, date, email }) => {

    return dispatch => {
        firebase.database().ref('/tweets/' + uid)
        .set({date, email, tweet})
        .then(()=>{
            history.push('/');
            dispatch( { type : "UPDATE_TWEET" })
        })
    }

}

export const deleteTweet = (uid) => {
    return dispatch =>{
        firebase.database().ref('/tweets/' + uid)
        .remove()
        .then(() => {
            history.push('/');
            dispatch({ type : 'DELETE_TWEET'})
        })
    }
}


export const fetchMyTweet = (email) => {
    return dispatch => {
      firebase.database().ref('/tweets')
      .orderByChild('email').equalTo(email) 
      .on('value', snapshot =>{
        const result = _.map(snapshot.val(),(val,uid)=>{
            return {...val, uid};
        })
        dispatch({type : FETCH_MY_TWEETS , payload : result})
    })
    }
}