// single line comment

/*
    multi-line
    comment
*/

/*
 *   Documentation comments (used to indicate offical docs)
*/

function myFunction(){
    console.log('this is a function declaration');
}

myFunction();

let yourFunction = function(){
    console.log('This is a anonymus function, and can be assigned to a variable');

    if(5 > 0){
        let x = 1;  // block-scope
        console.log(x);
    }
    // console.log(x);  ReferenceError: error not defined
}

yourFunction();

console.log(yourFunction);

/*
    JS Type System
    - number
    - string
    - boolean
    - object
        - array
        - function

    - non-values type
        - undefined
        - null
        - NaN

    Declarative Keywords
        - var (pre-ES6) (Global or function scope)
        - let (ES6+)    (Bound to the curly brackets they're defined within)
        - const (ES6+)  (See above)

    Scopes
        - global
        - function
        - block
        - lexical (closures) <-- Declare a function inside of a function
*/

// creating a JS "class"
function Car(model){
    this.model = model;
    this.color = 'silver';
    this.year = '2017';

    // closures = functions encapsulated in function
    // 
    //this.toString = function(){
    //    console.log(this.model + ', '  + this.color + ', ' + this.year);
    //}
}

Car.prototype.toString = function(){
    //template literals (allows for string interpolation)
    return `${this.model}, ${this.color}, ${this.year}`;
}

let myCar = new Car('Nissan Rogue');
//console.log(myCar);
//console.log(myCar.color);
console.log(myCar.toString());

let yourCar = new Car('Toyota Camry');
console.log(yourCar.toString());

/*
 * More on Scopes (hoisting)
 */

 function hoistTest1(){
     console.log(x);    // Creates a ReferenceError (x is not defined)
 }
 hoistTest1();

 function hoistTest2(){
     var x;
    console.log(x);
}
hoistTest2();

console.log(typeof NaN);    // NaN: Not a Number, is a number;


function hoistTest3(){
    var x =5;
   console.log(x);
}
hoistTest3();

function hoistTest4(){
    var x =5;
   console.log(x);  //Undefined, Decalaration is hoisted
}
hoistTest4();

function hoistTest5(){
    var x =5;   //
   console.log(x);  //Undefined
}
hoistTest5();

function hoistTest6(){
    console.log(x);  //Reference Error (let and const declarations are not hoisted)
    var x =5; 
}
hoistTest6();