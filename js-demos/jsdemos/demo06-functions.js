
/*
 * Function are prefixed with keyword function
 * Paramters don't have any type -- not even var,let or const
 * You can return whatever you like 
 * If there is no return statement, function returns undefined
 */


function plus(x,y){
    return x+y;
}

let r1= plus(2,3);
console.log('r1',r1);


console.log('plus(18,12)',plus(18,12));


//You can pass more arguments to a function than it requires.
//It ignores all the additional parameters.
//Javascript doesn't complain if you pass additional parameters. It silently ignores them

console.log('plus(18,12,2,4,9,8,7)',plus(18,12,2,4,9,8,7));


//Javascript doesn't complain even if you supply less parameters
//Parameters not supplied is considered to have value == undefined

console.log('plus(18)',plus(18)); // 18+undefined => NAN <-- Not A Number






