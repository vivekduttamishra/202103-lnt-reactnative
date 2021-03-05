import books from '../data/books';
import * as Actions from './book-actions';

//I am assuming we will get a list of books
export const booksReducer = (initialState=[], action)=>{

    switch(action){
        case Actions.BOOK_ADD:
            //add book to current list in immutable way
            return [...intialState, action.payload]; 
            
        case Actions.BOOK_GET_ALL:
            //normally here we should be calling http request
            return [...books]; 

        case Actions.BOOK_DELETE:
            return intialState.filter( book=> book.isbn!=payload.id);
            
        case Actions.BOOK_EDIT:
            return initState.map( book=> book.id==payload.id?payload:book);

    }

    return intialState;
};


export const favoriteBooksReducer = (initialState=[], action)=>{

    switch(action){
        case Actions.FAVORITE_ADD:
            //add book to current list in immutable way
            return [...intialState, action.payload]; 
            
        case Actions.FAVORITE_GET_ALL:
            //normally here we should be calling http request
            return [...books]; 

        case Actions.FAVORITE_DELETE:
            return intialState.filter( book=> book.isbn!=payload.id);
       
    }

    return intialState;
};
