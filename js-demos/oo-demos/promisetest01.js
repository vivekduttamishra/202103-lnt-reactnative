function f1(){
    return Promise.resolve('hello');
}

function f2(){

}


let x=f1();
console.log('typeof(x)',typeof(x));

console.log('x instanceof Promise',x instanceof Promise);

function isPromise(x){
    return x instanceof Promise 
        || x.then 
        && x.catch 
        && typeof(x.then)==='function' 
        && typeof(x.catch)==='function';
}



function checkPromise(x){
    if(isPromise(x))
        console.log(x, 'is promise');
    else
        console.log(x, 'is not promise');
}

checkPromise(Promise.resolve('hi'));

checkPromise({then: ()=>'hi', catch: ()=>'error'});

checkPromise({then:1, catch:2});
