


function calculator( operator, value1, value2 ){

    let result=operator(value1,value2); //operator is a function

    //a function is an object that has a name property
    console.log(`${value1} ${operator.name} ${value2} = ${result}`);

}

function plus(x,y){
    return x+y;
}
calculator(plus, 50,15); //we can pass plus function to calculator function



const  minus=function(x,y){
    return x-y;
}

calculator(minus,50,15);

//what if I want to multiply two numbers using calculator?


calculator(function(a,b){return a*b}, 50,20);


let custom= function(x,y){

    let fx=1;
    while(x>1)
        fx*=x--;

    let fy=1;
    while(y>1)
        fy*=y--;

    return fx/fy;
}

calculator(custom, 5, 3); //120/6 => 20









