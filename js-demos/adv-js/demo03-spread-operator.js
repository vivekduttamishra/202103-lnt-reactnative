
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

console.log('person',person);
console.log('employee',employee);

