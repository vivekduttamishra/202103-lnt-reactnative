
let p1=new Object();

console.log('typeof(p1)',typeof(p1));

console.log('p1',p1);


p1.name='Vivek';
p1.age=100;

console.log('p1',p1);

console.log('p1.name',p1.name);


p1.eat= function( food ) { console.log( `person eats ${food}`)};

p1.eat('Lunch');
