
const average=function(){

    let sum=0;
    for(let i=0;i<arguments.length;i++)
        sum+=arguments[i];

    return sum/arguments.length;
}

console.log('average(1,2,3,4)',average(1,2,3,4));


console.log('average(1,2,3,4,5)',average(1,2,3,4,5));

console.log('average(7)',average(7));

