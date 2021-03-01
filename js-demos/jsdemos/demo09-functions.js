




function plus(x,y){  //plus is available in global context
    return x+y;
}

let sum=plus; //sum is another name added global context

console.log('plus(10,20)',plus(10,20));

console.log('sum(10,20)',sum(10,20));


//can we combine the above two steps?

let substract =function minus(x,y){
    return x-y;
}

//here substract is available in the context

console.log('substract(20,14)',substract(20,14));

console.log('substract.name',substract.name);


//minus is assigned to substract but not added to global context

console.log('minus(2,4)',minus(2,4));









