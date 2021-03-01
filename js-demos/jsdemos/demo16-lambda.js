

function calculator( operator, value1, value2 ){

    let result=operator(value1,value2); //operator is a function

    //a function is an object that has a name property
    console.log(`${value1} ${operator.name} ${value2} = ${result}`);

}

function plus(x,y){
    return x+y;
}
calculator(plus, 50,15); //we can pass plus function to calculator function


//I want to calculate factorial(x) / factorial(y)

let custom= (x,y)=>{

    let fx=1;
    while(x>1)
        fx*=x--;

    let fy=1;
    while(y>1)
        fy*=y--;

    return fx/fy;
}

calculator(custom, 5, 3); //120/6 => 20


let multiply = (x,y) => x*y ;

calculator(multiply,5,50);


//we can easily write the lambda expression inside method 


calculator((a,b)=> a*a+b*b,  5,10);



