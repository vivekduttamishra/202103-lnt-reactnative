
import {combineReducers, createStore, applyMiddleware} from 'redux';

import {booksReducer,favoriteBooksRequest} from './book-reducers';
import reduxThunk from 'redux-thunk';


let reducer=combineReducers({
    books: booksReducer, 
    favorites: favoriteBooksRequest
});


let store = createStore(reducer, applyMiddleware(reduxThunk));

export default store; //this redux store will be used by react
