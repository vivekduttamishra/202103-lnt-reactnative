

function plus(x,y){
    return x+y;
}

console.log('typeof(plus)',typeof(plus));


let add=plus;  //now add is a referenc to plus function 

//add can be used in place of plus


console.log('add(2,3)',add(2,3));




