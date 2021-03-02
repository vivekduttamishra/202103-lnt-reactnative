
let list=[2,9,11,8,4,12,21];


//what if I want first 3 values in variable a,b,c?

//standard option (ES5)
// let a=list[0];
// let b=list[1];
// let c=list[2];

//ES2015 destructing an array
//create variables a,b,c and copy first 3 values from the array

let [a,b,c] = list;    

console.log(a,b,c);

//to get index 0, 1, 2, 5  (not 3, 4) to variable w,x,y,z
let [w,x,y,,,z] = list;    //two empty commas exclude those values

console.log(w,x,y,z);


