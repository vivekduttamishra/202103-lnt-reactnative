




function plus(x,y){  //plus is available in global context
    return x+y;
}

let sum=plus; //sum is another name added global context

console.log('plus(10,20)',plus(10,20));

console.log('sum(10,20)',sum(10,20));


//if minus is not accessible, do I need this word?
// we can create anonymous functions

//ANONYMOUS FUNCTION
let substract =function (x,y){
    return x-y;
}

//here substract is available in the context

console.log('substract(20,14)',substract(20,14));

console.log('substract.name',substract.name);












