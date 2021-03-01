


function Person(name,email){

    let person= new Object();
    
    person.name=name;
    person.email=email;
    
 
    person.eat= function(food){ return `${this.name} eats ${food}`; };
    
    person.move =function(from,to) { return `${this.name} goes from ${from} to  ${to}`};
    
    person.writeEmail= function (to, subject ,message ) { return `sending mail from ${this.email} to ${to} subject: ${subject} body: ${message}`}
    
    return person;    
  
}

let p1= Person('Vivek', 'vivek@gmail.com');

let p2= Person('Shivanshi', 'shivanshi@gmail.com');


console.log(p1.eat('Lunch'));

console.log(p2.eat('Dinner'));

console.log(p1.move('Office','Home'));
console.log(p2.move('School','Home'));


console.log(p1.writeEmail('support@web.com','webserver down','kindly check the webserver'));

