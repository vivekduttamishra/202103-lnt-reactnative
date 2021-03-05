

export const BOOK_ADD='BOOK_ADD';
export const BOOK_SELECT='BOOK_SELECT';
export const BOOK_GET_ALL='BOOK_GET_ALL';
export const BOOK_EDIT='BOOK_EDIT';
export const BOOK_DELETE='BOOK_DELETE';
export const FAVORITE_ADD='FAVORITE_ADD';
export const FAVORITE_REMOVE='FAVORITE_REMOVE';
export const FAVORITE_GET_ALL='FAVORITE_GET_ALL';


//business logic to create actions a.k.a action creators

export const addBook=(book)=>{

    return {type:BOOK_ADD, payload:book};
}

export const getBookById=(id)=>{
    return {type:BOOK_SELECT, payload:id};
}

export const getAllBooks=()=>{
    return {types:BOOK_GET_ALL};
}

export const deleteBook=(id)=>{
    return {type:BOOK_DELETE, payload:id};
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
    return {types:FAVORITE_GET_ALL};
}



