
//js arrays are like java array list. 
//they are dynamic

let list=[1,2,3,4,5];  //an array 

console.log('list',list); //[ 1, 2, 3, 4, 5 ]

console.log('list.length',list.length);

console.log('list[2]',list[2]);

list.push(40); //new item added at the end

console.log('list',list);

console.log('list[100]',list[100]);  //no exception. just undefined return

list[10]=100; //list auto expanded to 10 item size.

console.log('list',list);

for(let i=0;i<list.length;i++)
    console.log(i, list[i]);


//an array can hold different data types

let values=[2,2.5,'Hello world', new Date()];

console.log('values',values);

//we can remove a given item from a list

let list2=[1,2,3,4,5];

list2.splice(2,2); //remove 3 and 4

console.log('list2',list2);


console.log('list2.length',list2.length);


console.log('list2.push(15)',list2.push(15));


//ES2015 for-of loop
for(let value of list)
    console.log(value);





