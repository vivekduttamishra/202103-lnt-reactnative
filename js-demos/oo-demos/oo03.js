


let toString = function(){
    return `${this.title} by ${this.author}`;
};

let b1= {
    title: 'The Accursed God', //note: we use colon and not equals here
    author: 'Vivek Dutta Mishra',
    price:336,
    toString:toString //we can add behaviors
};

b1.rating=4.2;  //again here we use equals not colon


console.log('b1',b1);

console.log('b1.toString()',b1.toString());
