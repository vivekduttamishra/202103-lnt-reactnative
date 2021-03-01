
//Step 1. Create An Object
let p1=new Object();

console.log('typeof(p1)',typeof(p1));

console.log('p1',p1);

//Step 2. Assign properites/fields
p1.name='Vivek';
p1.age=100;

console.log('p1',p1);

console.log('p1.name',p1.name);

//Step 3. associate methods/behaviors 
//   Refer the object inside behavior using this
p1.eat= function( food ) { console.log( `${this.name} eats ${food}`)};


//Step 4. invoke the method
p1.eat('Lunch');
