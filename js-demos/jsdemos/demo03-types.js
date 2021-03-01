
//Note let and const are introduced in ES2015. ES5 supports only var

var a=20;
let b=30.5;  //javascript has number type. no int or double

// strings can be quoted using single quote ('), double quote (") and backquote(`)
// quotes are interchangeable (except backquote has a special meaning)
const c= "Hello"
const d='World'
const e='x'



console.log('typeof(a)',typeof(a));
console.log('typeof(b)',typeof(b));
console.log('typeof(c)',typeof(c));
console.log('typeof(d)',typeof(d));
console.log('typeof(e)',typeof(e));
console.log('typeof(true)',typeof(true));
console.log('typeof(7>8)',typeof(7>8));


a='hello'; // a was referring to a number. now a refers to a string. it is valid

console.log('typeof(a)',typeof(a)); //variables have no type. data (object) has a type









const f=[]  //an empty array 

const g=new Object(); //an object with

const h=new Date();   //another object

const i= null; //null is an object
const j=undefined;  //j is a variable whose value is undefined explicitly

var k;  //k is  variable whose value is undefined implictly

console.log();
console.log('typeof(f)',typeof(f));
console.log('typeof(g)',typeof(g));
console.log('typeof(h)',typeof(h));
console.log('typeof(i)',typeof(i));
console.log('typeof(j)',typeof(j));
console.log('typeof(k)',typeof(k));
console.log('typeof(l)',typeof(l));  //l is an undefined variable. it doesn't exist


