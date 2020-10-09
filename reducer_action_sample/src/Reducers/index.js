// Reducerlar 
import {combineReducers} from 'redux'
import book from './book.json'
 

const bookListReducer=(oldBookList= book ,action)=>{
  
    if(action.type === 'ADD_BOOK')
      {
        //LİSTEYE EKLE
        return [...oldBookList,action.payload];
      }
    else if(action.type==='DELETE_BOOK')
      {
        //LİSTEDEN ÇIKAr
        return oldBookList.filter(i=>i.isbn !== action.payload.isbn)
      }
    return oldBookList;
    
  }
  
  const selectBookReducer=(oldSeleckBook={},action) => {
    if(action.type === 'SELECT_BOOK')
      {
        return action.payload;
      }else if(action.type === 'DESELECT_BOOK')
        {
          return {};
        }
    return {};
  }

    
   export default  combineReducers({
      bookList : bookListReducer,
      selectedBook : selectBookReducer
  });

  