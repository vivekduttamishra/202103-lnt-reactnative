
let Book=function(title,author,price,rating,tags){

    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
    this.tags=tags;
}

class BookManager{

    constructor(){
        this.books=[];
    }

    addBook(book){
        this.books.push(book);
    }

    getAll(){
        return this.books;
    }

    
}


const listBooks=(title='',books)=>{
    console.log("price\trating\tauthor\title");
    for(let book of books)
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
}

let manager=new BookManager();

manager.addBook(new Book("The Accursed God","Vivek Dutta Mishra",336,4.6,"india, epic, mahabharata"));
manager.addBook(new Book("The Sons of Fortune","Jeffrey Archer",400,4.5,"england, politics"));
manager.addBook(new Book("Runaway Jury","Jeffrey Archer",200,4.7,"fiction, legac"));
manager.addBook(new Book("Sins of Father","Jeffrey Archer",350,4.6,"chronology, fiction"));
manager.addBook(new Book("The Firm","John Grisham",150,4.1,"legal fiction"));
manager.addBook(new Book("Summons","John Grisham",200,3.7,"legal fiction"));

listBooks('All Books', manager.getAll());


let totalCost= manager.getAll().reduce( (total,{price})=>{ 
    
    return total+price;
}, 0 );
console.log('total cost',totalCost);


