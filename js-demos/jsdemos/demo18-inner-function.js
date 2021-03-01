

let outer= function(){
    //creating a new function
    function inner(){
        console.log('I am inner function');
    }
    //returning the newly created function
    return inner;

}


let i1=outer();

let i2=outer();

//both calls returns a function named inner that does the same thing

console.log('i1.name',i1.name);

console.log('i2.name',i2.name);

i1(); //should execute inner function
i2(); //should execute inner function


//but the two inner function i1() and i2() are NOT SAME. they are two different functions that
//are created on two different calls of outer, because they are created when the outer function is called.


console.log('i1!==i2',i1!==i2);




