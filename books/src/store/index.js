
import {combineReducers, createStore} from 'redux';

import {booksReducer,favoriteBooksRequest} from './book-reducers';


let reducer=combineReducers({
    books: booksReducer, 
    favorites: favoriteBooksRequest
});


let store = createStore(reducer);

export default store; //this redux store will be used by react
