

/**
 * ES2015 variable arguments array 
 * It allows you to pass any number of argument that would be collected as an array to
 * It can be used in place of arguments
 * variable arguments are prefixed with ...
 * there can be other parameter before ... parameter
 * there can't be another after it
 */


const average=function(...numbers){

    let sum=0;
    for(let number of numbers)
        sum+=number

    return sum/numbers.length;
}

console.log('average(1,2,3,4)',average(1,2,3,4));


console.log('average(1,2,3,4,5)',average(1,2,3,4,5));

console.log('average(7)',average(7));

