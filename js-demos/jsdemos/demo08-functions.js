


function calculator( operator, value1, value2 ){

    let result=operator(value1,value2); //operator is a function

    //a function is an object that has a name property
    console.log(`${value1} ${operator.name} ${value2} = ${result}`);

}

function plus(x,y){
    return x+y;
}

function minus(x,y){
    return x-y;
}

calculator(plus, 50,15); //we can pass plus function to calculator function


calculator(minus,50,15);






