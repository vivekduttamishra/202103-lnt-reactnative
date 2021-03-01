

let multiplierOf=function (number) {

    function multiply(by){
        return number*by;
    }

    return multiply;

}


let m19 = multiplierOf(19);  //returns inner function that remebers number=19

let m23 = multiplierOf(23);  //returns innner function that remebers number=23


/* m19 and m23 are two different objects
    m19 remembers the value of its closure that was number=19
    m23 remembers the value of its closure that was number=23

    when you call the functions they already remebmer one parameter from the outer funciton that is called and finished
*/



console.log('m19(5)',m19(5)); //19 * 5

console.log('m23(3)',m23(3)); //23 * 3

