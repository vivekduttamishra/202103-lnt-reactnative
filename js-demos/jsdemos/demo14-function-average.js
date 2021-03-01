

//ES2015 allows you to have functions with default value for their parameter
let sum=function (number1,number2=0){

    return number1+number2;

}

console.log('sum(2,4)',sum(2,4));

console.log('sum(5)',sum(5));

//additional arguments are still ignored

console.log('sum(2,4,5,6)',sum(2,4,5,6));



let average=function (number1=0,number2=number1){
    return (number1+number2)/2;
}



console.log('average(5,20)',average(5,20));


console.log('average(12)',average(12));

console.log('average()',average());



