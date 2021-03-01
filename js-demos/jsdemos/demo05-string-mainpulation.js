//string interpolation of ES2015

let bookTitle="The Accursed God";

let author="Vivek Dutta Mishra";

let price=336;
//I want to create a string like --> The Author of 'The Accursed God' is 'Vivek Dutta Mishra'

//ES5 style

var output="The Author of '"+bookTitle+"' is '"+author+"'";

console.log(output);

//ES2015 support string interpolation using backquoted string

let output2 = `The Author of '${bookTitle}' is '${author}'`;

console.log(output2);



//back tick string can be multiline

let output3= `
    Title: ${bookTitle.toUpperCase()}
    Author: ${author}
    Price: ${price} - 20% discount = ${Math.floor(price*0.8)}

`;


console.log(output3);







