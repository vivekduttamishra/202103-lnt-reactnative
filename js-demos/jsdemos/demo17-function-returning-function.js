

function goodMorning(name){
    console.log(`Hello ${name}, Good Morning`);
}

function goodAfternoon(name){
    console.log(`Hello ${name}, Afternoon`);
}

function goodEvening(name){
    console.log(`Hello ${name}, Evening`);
}


function greeter(){
    let date=new Date();
    let hours=date.getHours();
    return getHourGreeter(hours);
}

let getHourGreeter = (hours)=>{
    if(hours<12)
        return goodMorning;
    else if(hours<18)
        return goodAfternoon;
    else 
        return goodEvening;
}



let greet=greeter();

//what is greet? it could be one of the three function

greet('Javascript');


let greet1=getHourGreeter(14);
let greet2=getHourGreeter(15);
let greet3=getHourGreeter(21);

console.log('greet1.name',greet1.name);
console.log('greet2.name',greet2.name);
console.log('greet3.name',greet3.name);




console.log('greet1===greet2',greet1===greet2);

console.log('greet1!==greet3',greet1!==greet3);
