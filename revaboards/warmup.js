// single line comment

/* 
    multiline 
    comment
*/

/**
 * Documentation comments (used to indicate offical docs)
 */

 function myFunction() {
     console.log('this is a fucnction declaration');
     if (5 > 0) {
        let x = 1;

     }

 }

 myFunction();

 let yourFunction = function() {
     console.log('this is an anonymous fucntion, and can be assigned to a var')
 }

 yourFunction();

 console.log(yourFunction);
 
 /*
 JS Type System
    -number
    -string
    -boolean
    -object
        -array
        -function

    -non-value types
        -undefined (declared, but not defined)
        -null (lack of obj value)

Declarative Keywords
    -var (pre-ES6)
    -let (ES6+)
    -const (ES6+)

Scopes
    -global
    -function
    -block
    -lexical (closures-declare a function inside a function)
*/

//creating a JS "class"
fucntion Car(model) {
    this.model = model;
    this.color = 'silver';
    this.year = '2017';
    
    //closures = fucntions encapsulated in functions
    //provide a implementation of "encapsulation"
    //this.toString = function() {
    //    console.log(this.model + ', ' + this.color + ', ' +this.year);
    //}
}

Car.prototype.toString = function() {
    //templete literals allows for string interpolation)
    return `${this.model}, ${this.color}, ${this.year} `; 
}

let myCar = new Car('Nissan Rogue');
//  console.log(myCar);
//  console.log(myCar.color);
console.log(myCar.toString());

let yourCar = new Car('Toyota Camry');
console.log(yourCar.toString());

/*
    More on Scopes (hoisting)
*/

function hoistTest1(){
    console.log(x); //Creates a ReferenceError (x is not defined)
}
//hoistTest1();
fucntion hoistTest2() {
    var x;
    console.log(x); // undefined
}
hoistTest2();

fucntion hoistTest3() {
    var x = 5;   
    console.log(x); // undefined
    
}
hoistTest3();

fucntion hoistTest4() {
    console.log(x); //undefined ( var delc is hoisted, but not the assignment)
    var x = 5;   
}
hoistTest4();

hoistTest5(); //executes without issue bc the declaration is ran first
fucntion hoistTest5() {
    var x = 5;  
    console.log(x);
}

fucntion hoistTest6() {
    console.log(x); //ReferenceError (let and const declarations are not hoisted)
    let x = 5;
}
hoistTest6();

let hoistTest7 = function() {
    console.log('should not work');
}
//console.log(typeof NaN); //not a number