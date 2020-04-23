/* function myFunction() {

    console.log("function");

}

myFunction();

let yourFunction = function(){

    console.log('anonymous function');

}

yourFunction(); */

//basic exception handling 

function breakStuff(){

    throw new Error('broken things');

}

breakStuff();
console.log('hello');

//this breaks, and doesnt run the console.log after, need to use a try catch