
let person={
    name:'Vivek',
    bloodGroup:'ab+',
    phone:'9036084835'
}

//now person becomes an employee
//as an employee, we need all personal details 
//along with employeeId, designation, salary

let employee={
    id:11,
    ...person, // all personal details
    designation:'corparte trainer',
    salary:1
};


console.log('employee',employee);

//what if I need id and salary from employee object?


//traditional approach (ES5 or other languages)

//let id= employee.id;
//let salary=employee.salary;

//ES2015 extraction of properties from object

let {id,salary} = employee; 

console.log('id',id);

console.log('salary',salary);

