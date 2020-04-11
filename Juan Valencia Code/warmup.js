// comment
/* multi line comment
*/

/**
 * Documentation comments( used to indicate offical docs)
 */

function myFunction(){
    console.log('this is a function declaration');
}

myFunction();

let yourFunction = function(){
    console.log('Thisi s an anonymous function and can be assignes to a varibale.');
}

yourFunction();

//Go thru the docs

function Car(model) {
   this.model = model;
   this.color = 'grey';
   this.year = 2017
}

Car.prototype.toString = function(){
    return `${this.model}, ${this.color}, ${this.year}`
}

let myCar = new Car('Nissan Rogue');

console.log(myCar.toString());
