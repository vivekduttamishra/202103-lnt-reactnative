import booksApi from '../api/bookapi';

export const BOOK_ADD='BOOK_ADD';
export const BOOK_SELECT='BOOK_SELECT';
export const BOOK_GET_ALL='BOOK_GET_ALL';
export const BOOK_EDIT='BOOK_EDIT';
export const BOOK_DELETE='BOOK_DELETE';
export const FAVORITE_ADD='FAVORITE_ADD';
export const FAVORITE_REMOVE='FAVORITE_REMOVE';
export const FAVORITE_GET_ALL='FAVORITE_GET_ALL';

export const HTTP_ERROR='HTTP_ERROR';


//business logic to create actions a.k.a action creators

// export const addBook=(book)=>{

//     return {type:BOOK_ADD, payload:book};
// }


export const addBook=(book)=>{
    console.log('adding book',book);
    return async dispatch=>{
        try{
            let response= await booksApi.post('/books.json',book);
            book.id= response.data.name;
            console.log('response',response.data);
            console.log('dispatching', book);
            dispatch({type:BOOK_ADD, payload:book});
        }catch(error){
            console.log('HTTP_ERROR',error);
            dispatch({type:HTTP_ERROR, payload:error});
        }
    }

    
}


export const getBookById=(id)=>{
    return {type:BOOK_SELECT, payload:id};
}

// export const getAllBooks=()=>{
//     //GET the books from the server

//     booksApi
//             .get('/books.json') //url added to the base URL
//             .then( result=> console.log('result',result.data))
//             .catch(error=> console.log('error',error));

    

//     return {type:BOOK_GET_ALL};
// }


export const getAllBooks = () =>{

    return async (dispatch) =>{
        try{
            let response= await booksApi.get('/books.json');
            let {data}= response;
            
            //data is like this { key1: book1, key2: book2, key3:book3}
            //i want the data to be [book1,book2,book3]
            //each book should include key as the id

            let books=[];
            for( let key in data){
                let book= data[key];
                book.id=key;
                books.push(book);
            }

            dispatch({type:BOOK_GET_ALL,payload:books});

        } catch(error){
            console.log('HTTP_ERROR',error);
            dispatch({type:HTTP_ERROR, payload:error});

        }


    }

};



export const deleteBook=(id)=>{

    console.log('trying to delete',id);
    return async dispatch=>{

        try{
            booksApi.delete(`/books/${id}.json`);
            console.log('trying to delete',id);
            dispatch({type:BOOK_DELETE, payload:id});

        }catch(ex){
            console.log('HTTP_ERROR',error);
            dispatch({type:HTTP_ERROR, payload:error});
        }
    }

   
}

export const editBook=(book)=>{
    return {type:BOOK_EDIT, payload:book};
}


export const addToFavorite=(book)=>{

    return {type:FAVORITE_ADD, payload:book};
}

export const deleteFromFavorite=(id)=>{
    return {type:FAVORITE_REMOVE, payload:id};
}
export const getAllFavorites=()=>{
    return {type:FAVORITE_GET_ALL};
}



