

let average=(...values)=>{

    let sum=0;
    for(let value of values) sum+=value;

    return sum/values.length;

}

let r1 = average(1,2,3,4);
console.log('average(1,2,3,4)',r1);

let numbers=[1,2,3,4];
let r2=average(numbers);
console.log('average(numbers)',r2);

let r3= average(...numbers);
console.log('average(...numbers)',r3);
