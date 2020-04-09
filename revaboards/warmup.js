// single line comment
/* 
    multi-line
    comment
*/
/**
 * Documentation comments (used to indicate official docs)
 */

 function myFunction () {
     console.log('this is a function declaration');
 }

 myFunction();

 let yourFunction = function () {
     console.log('this is an anonymous function, and can be assigned to a variable');
 }

 yourFunction();

 console.log(yourFunction);

 /*
    JS Type System
        -number
        -string
        -boolean
        -object
            -array --> is an object
            -function --> is an object
        -non-value types
            -undefined
            -null
    Declarative keywords
        -var (pre-ES6) --> global or function scoped                ES = EchmaScript
        -let (ES6+) --> block scoped
        -const (ES6+) --> block scoped (but cannot be changed)
    Scopes
        - global -- > visible everywhere
        - function --> within an entire function
        - block --> within brackets (e.g. only in an if statement)
        - lexical --> (closures)
*/

//Can declare functions within functions: "closures"
//creating a JS "class" (not REALLY a class)
function Car(model) {
    this.model = model;
    this.color = 'silver';
    this.year = '2017'
    //closure = functions encapsulated in functions
    //provide an implementation of "encapsulation"
    /*this.toString = function() {         //<------------------ closure/lexical scope
        console.log(this.model + ', ' + this.color + ', ' + this.year);
    }*/ //see line 54, identical method
}

Car.prototype.toString = function() {
    //Template literals (allows for strting interpolation)
    return `${this.color}, ${this.color}, ${this.year}`;
}

let myCar = new Car('Nissan Rogue');
console.log(myCar);
console.log(myCar.color);
console.log(myCar.toString()); //note () is required as an invocation operator for functions

let yourCar = new Car('Toyota Camry');
console.log(yourCar.toString());

/*
    More on Scopes (hoisting)
 */ 

 function hoistTest1() {
    console.log(x); //Creates a ReferenceError (x is not defined)
 }
 //hoistTest1();

function hoistTest2() {
    var x;
    console.log(x);    
}
hoistTest2();

function hoistTest3() {
    var x = 5;
    console.log(x); //undefined
}
hoistTest3();

function hoistTest4() {
    //Hoist sees var x declared here. 
    console.log(x);
    var x = 5; //Assignment is seen here
}
hoistTest4();

hoistTest5(); //executes without issue bc the declaration is ran first.
function hoistTest5() {
    //Hoist sees var x declared here.
    var x = 5;
    console.log(x);
}

function hoistTest6() {
    console.log(x);
    let x = 5; // Reference error, with let. Let and const declarations are not subject to hoisting.
}

//if you wanted to avoid function hoisting:
let hoistTest7 = function() {
}