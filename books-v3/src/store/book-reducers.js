import books from '../data/books';
import * as Actions from './book-actions';

//I am assuming we will get a list of books
export const booksReducer = (initialState=[], action)=>{

    console.log('reducer called with',action);
    switch(action.type){
        case Actions.BOOK_ADD:
            //add book to current list in immutable way
            return [action.payload,...initialState]; 
            
        case Actions.BOOK_GET_ALL:
            //normally here we should be calling http request
            console.log('returning a new set of books');
            return [...books]; 

        case Actions.BOOK_DELETE:
            console.log('trying to delete',action.payload);
            let result =initialState.filter( book=> book.isbn.localeCompare(action.payload)!==0);
            console.log(result.map(result=>({id:result.isbn, title:result.title})));
            return result;
        case Actions.BOOK_EDIT:
            return initialState.map( book=> book.id===action.payload.id?action.payload:book);

    }

    return initialState;
};


export const favoriteBooksReducer = (initialState=[], action)=>{

    switch(action.type){
        case Actions.FAVORITE_ADD:
            //add book to current list in immutable way
            return [...initialState, action.payload]; 
            
        case Actions.FAVORITE_GET_ALL:
            //normally here we should be calling http request
            return [...books]; 

        case Actions.FAVORITE_DELETE:
            return initialState.filter( book=> book.isbn!=action.payload.id);
       
    }

    return initialState;
};
