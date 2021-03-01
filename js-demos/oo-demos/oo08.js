
//ES2015 class

class Person{

    //no field delcared here

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    eat(food){ 
        return `${this.name} eats ${food}`; 
    };
    
    move(from,to) { 
        return `${this.name} goes from ${from} to  ${to}`
    };
    
    writeEmail(to, subject ,message ) { 
        return `sending mail from ${this.email} to ${to} subject: ${subject} body: ${message}`
    }
  
}

let p1=new  Person('Vivek', 'vivek@gmail.com');

let p2=new  Person('Shivanshi', 'shivanshi@gmail.com');


console.log(p1.eat('Lunch'));

console.log(p2.eat('Dinner'));

console.log(p1.move('Office','Home'));
console.log(p2.move('School','Home'));


console.log(p1.writeEmail('support@web.com','webserver down','kindly check the webserver'));

