import {combineReducers} from 'redux'
import authReducer from './authReducer'
import tweetListReducer from './tweetListReducer'
import myTweetsListReducer from './myTweetsListReducer';

export default combineReducers({
    auth : authReducer,
    tweetList : tweetListReducer,
    myTweetList : myTweetsListReducer
});