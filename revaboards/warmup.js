//single line comment

/*
    multi-line
    comment
*/

/**
 * Documentation comments (used to indicate official docs)
 */

 function myFunction() {
     console.log('this is a function declaration');
     if (5 >0){
         let x= 1 
         console.log(x)
     }

 }

 myFunction();
 
 let yourFunction = function() {
     console.log('this is a anonymous function, and can be assigned to a variable');
 }

 yourFunction();


 console.log(myFunction);

 /*
 JS TYpe System
    -number 
    -string
    -boolean
    -object
        -array
        -function

    -non value types
        -undefined
        -null
        -NaN

    Declarative keywords
        -var (pre-ES6)
        -let (ES6+)
        -const (ES6+)

    Scopes
        -global
        -function
        -block
        -lexical (closures)
*/

function Car(model) {
    this.model = model;
    this.color = 'silver';
    this.year = '2017';

    //closures = functions encapsulated in functions
    // provide a implementation of 'encapsulation'
    // this.toString = function() {
    //     console.log(this.model = ', ' + this.color + ', ' + this.year);
    // }
}

Car.prototype.toString = function() {
    //template literals allows for string interpolation
    return `${this.model}, ${this.color}, ${this.year}`;
}
let myCar = new Car('Nissan Rogue');
// console.log(myCar);
// console.log(myCar.color);
console.log(myCar.toString());

let yourCar = new Car('Toyota Camry');
console.log (yourCar.toString());
 
/* 
More on Scopes (hoisting)
*/
function hoistTest1(){
    console.log(x); //creates a referenceErro (x is not defined)  
}
// hoistTest1();

function hoistTest2() {
    var x;
    console.log(x); // undefined
}
hoistTest2();

function hoistTest3() {
    var x = 5;
    console.log(x);
}
hoistTest3();

function hoistTest4() {
    console.log(x);
    var x = 5;
}
hoistTest4();

hoistTest5();
function hoistTest5() {
    console.log(x); 
    var x = 5;
}

// function hoistTest6() {
//     console.log(x);// ReferenceError (let and const declarations are not hoisted)
//     let x = 5;
// }
// hoistTest6();

hoistTest7();
let hoistTest7 = function() {
    console.log(x); 
    var x = 5;
}

