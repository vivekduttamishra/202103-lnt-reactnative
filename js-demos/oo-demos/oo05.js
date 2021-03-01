


let toString = function(){
    return `${this.title} by ${this.author}`;
};

let book= {
    title: 'The Accursed God', //note: we use colon and not equals here
    author: 'Vivek Dutta Mishra',
    price:336,
    toString:toString //we can add behaviors
};


for(let property in book)
    if(typeof(book[property])!=='function')
         console.log(`${property}\t${book[property]}`);

