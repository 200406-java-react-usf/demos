// single line comment

/*
    mult line comment
*/

/**
 * Documentation comments (used to indicate official docs)
 */

//function scope
function myFunction() {
  console.log("This is a function declaration");
}

myFunction();

let yourFunction = function () {
  console.log(
    "this is a anonymous function, and can be assigned to a variable"
  );

  if (5 > 0) {
    let x = 1; // blocked scope: x cannot be seen outside the function
  }
};

yourFunction();

console.log(yourFunction);

/*
    JS Type System
     - number
     - string
     - boolean
     - object
        -array
        - function
    
    Declarative Keywords
        -var (pre-ES6)
        -let (ES6+)     
        -const (ES6+)

    Scoper
     - global
     - function
     - block
     - lexical (closures)
*/

function Car(model) {
  this.model = model;
  this.color = "silver";
  this.year = "2017";

  function toString() {
    console.log(this.model + ", " + this.color + ", " + this.year);
  }
}

let myCar = new Car("Nissan Rogue");
console.log(myCar);
console.log(myCar.color);
console.log(myCar.toString);

function Car2(model) {
  this.model = model;
  this.color = "Blue";
  this.year = "2019";

  this.toString = function () {
    console.log(this.model + ", " + this.color + ", " + this.year);
  };
}

let myCar2 = new Car2("Nissan Rogue");
myCar2.toString();

function Car3(model) {
  this.model = model;
  this.color = "Yellow";
  this.year = "2019";
  //Closures = functions encapsulated in functions
  //
  //this.toString = function() {
  // console.log(this.model + ", " + this.color + ", " + this.year);
}

Car2.prototype.toString = function () {
  //template literals (allows for string interpolation)
  return "${this.model}, ${this.color}, ${this.year}";
};

let myCar3 = new Car2("Nissan Rogue");
console.log(myCar3.toString());

let yourCar = new Car2("Jeep");
console.log(yourCar.toString());
