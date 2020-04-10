// single line comment

/* 
    multi-line
    comment
*/

/**
 * Documentation comments (used to indicate official docs)
 */

//  function myFunction() {
//      console.log('this is a function declaration');
//      if (5 > 0) {
//         let x = 1; // block-scoped (not visible outside of this if statement)
//         console.log(x);
//      }
//     //  console.log(x); ReferenceError: x is not defined
//  }

//  myFunction();

//  let yourFunction = function() {
//     console.log('this is a anonymous function, and can be assigned to a variable');
//  }

//  yourFunction();

//  console.log(yourFunction);

//  /*
//     JS Type System
//         - number
//         - string
//         - boolean
//         - object
//             - array
//             - function

//         - non-values types
//             - undefined
//             - null

//     Declarative keywords
//         - var (pre-ES6)
//         - let (ES6+)
//         - const (ES6+)

//     Scopes
//         - global
//         - function
//         - block
//         - lexical (closures)
//  */

//  // creating a JS "class"
//  function Car(model) {

//     this.model = model;
//     this.color = 'silver';
//     this.year = '2017';

//     // closures = functions encapsulated in functions
//     // provide a implementation of "encapsulation"
//     // this.toString = function() {
//     //     console.log(this.model + ', ' + this.color + ', ' + this.year);
//     // }

//  }

//  Car.prototype.toString = function() {
//      // template literals (allows for string interpolation)
//      return `${this.model}, ${this.color}, ${this.year}`;
//  }

//  let myCar = new Car('Nissan Rogue');
// //  console.log(myCar);
// //  console.log(myCar.color);
// console.log(myCar.toString());

// let yourCar = new Car('Toyota Camry');
// console.log(yourCar.toString());

// /*
//     More on Scopes (hoisting)

// */

// function hoistTest1() {
//     console.log(x); // Creates a ReferenceError (x is not defined)
// }
// // hoistTest1();

// function hoistTest2() {
//     var x;
//     console.log(x); // undefinted
// }
// hoistTest2();

// function hoistTest3() {
//     var x = 5;
//     console.log(x); // undefined
// }
// hoistTest3();

// function hoistTest4() {
//     console.log(x); // undefined (var declaration is hoisted, assignment is not)
//     var x = 5;
// }
// hoistTest4();


// hoistTest5(); // executes without issue bc the declaration is ran first
// function hoistTest5() {
//     var x = 5;
//     console.log(x);
// }

// function hoistTest6() {
//     console.log(x); // ReferenceError (let and const declarations are not hoisted)
//     const x = 5;
// }
// // hoistTest6();

// hoistTest7();
// let hoistTest7 = function() {
//     console.log('should not work');
// }

// constants cannot be reassigned EVER
// but constant objects/arrays can be mutated!


//0, '', "", NaN, null, undefined, false
//{}, [], new Object(), "  ", '0', 'null' (all truthys)



const immutableMaybe = {
    someValue: 10,
    anotherValue: 'test',
    nestedObj: {
        nestedValue: 100
    }
};

console.log(immutableMaybe);

immutableMaybe.someValue = 20;

let thisValue = immutableMaybe.someValue;
someValue = 40;

console.log(thisValue);
console.log(immutableMaybe);

let someObj = immutableMaybe.nestedObj;
console.log(someObj);

immutableMaybe.nestedObj.nestedValue = 10000;
console.log(someObj);