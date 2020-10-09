

//Aksiyonlar
export const addBook=(isbn,title,description,pageNumber)=>{
  return{
    type:'ADD_BOOK',
    payload:{isbn,title,description,pageNumber}
  }
}

export const deleteBook=(book)=>{
  return{
    type:'DELETE_BOOK',
    payload:book
  }
}
export const selectBook= (book) => {
  return{
    type:'SELECT_BOOK',
    payload:book
  }
}

export const deselectBook= () => {
  return{
    type:'DESELECT_BOOK'
  }
}


