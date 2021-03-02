
//ES5 constructor to create book object
let Book=function(isbn,title,author,price,rating,tags){
    this.isbn=isbn;
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
    this.tags=tags;
}



//ES2015 class syntax
class BookManager{

    constructor(){
        this.books=[]; //empty array of books
    }

    addBook(book){
        this.books.push(book);
    }

    getAll(){
        return this.books;
    }

    getBookByIsbn(isbn){
        // for(let book of this.books)
        //     if(book.isbn === isbn)
        //         return book;

        // return null;

        return this.books.find( book=> book.isbn===isbn);
    }

    getBooksByAuthor(author){

        let isBookByAuthor=function(book){
            return book.author===author;
        }
        
        //return search(this.books, isBookByAuthor);
        return this.books.filter(isBookByAuthor);
    }
    getBookInPriceRange(min,max){
       
       //return search(this.books, book=> book.price>=min && book.price<max) ;
       return this.books.filter( book=> book.price>=min && book.price<max) ;
    }

    getBooksWithMinRating(minRating){
        return this.books.filter( b=> b.rating>=minRating) ;
    }
}



const listBooks=(title='',books)=>{
    console.log("isbn\tprice\trating\tauthor\title");
    for(let book of books){
        let {isbn,title,price,rating,author}=book;
        console.log(`${isbn}\t${price}\t${rating}\t${author}\t${title}`);
    }
}

let manager=new BookManager();

manager.addBook(new Book("1","The Accursed God","Vivek Dutta Mishra",336,4.6,"india, epic, mahabharata"));
manager.addBook(new Book("2","The Sons of Fortune","Jeffrey Archer",400,4.5,"england, politics"));
manager.addBook(new Book("3","Runaway Jury","John Grisham",200,4.7,"fiction, legac"));
manager.addBook(new Book("4","Sins of Father","Jeffrey Archer",350,4.6,"chronology, fiction"));
manager.addBook(new Book("5","The Firm","John Grisham",150,4.1,"legal fiction"));
manager.addBook(new Book("6","Summons","John Grisham",200,3.7,"legal fiction"));

//to display all items


//manager.getAll().forEach( console.log );  //console.log will be called with book object


//how to I find the total cost of all books


let cost= manager.getAll().reduce((runningTotal,currentBook)=>{
            //the function get last calculated value and current object from array
            console.log(runningTotal, currentBook.title, currentBook.price);
            //calculate next running total
            return runningTotal+currentBook.price; //this value will become running total for the next call
        }, 0  //this is the intial value for running total 
        ); 


console.log('cost',cost);


