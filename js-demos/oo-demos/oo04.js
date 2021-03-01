


let toString = function(){
    return `${this.title} by ${this.author}`;
};

let b1= {
    title: 'The Accursed God', //note: we use colon and not equals here
    author: 'Vivek Dutta Mishra',
    price:336,
    toString:toString //we can add behaviors
};



console.log('b1["title"]',b1["title"]);

console.log('b1["price"]',b1["price"]);


b1['rating']=4.2;  //assigned in dictionary format


console.log('b1.rating',b1.rating); //accessed in dot format
