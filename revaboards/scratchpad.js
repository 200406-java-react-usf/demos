// function myfunc(){
//     console.log('This is a function declation')
// }
// /*
// multiline comment
// */
// myfunc();

// let yourfunc = function(){
//     console.log('this is an anonymous func which can be assigned to a variable')

// }

// //functions can be return types, can be assigned to variables - first class functions


// function Car(model) {
// this.model =model;
// this.color = 'silver';

//     function toString(){
//         console.log(this.model +", "+this.color)
// }
// }

// let myCar = new Car("Jeep grand Cherokee");


// Car.prototype.toString = function(){
//     return `${this.model}, ${this.color}`
// }


// //console.log()

// //more on scopes hoisting

// function hoistTest1(){
//     console.log(x);
// }
//  //this wont work 

// function hoistTest2(){
//     var x
//     console.log(x)
// }
//  //this will print undefined 

//  function hoistTest3(){
//     var x = 5;
//     console.log(x)
// } //prints 5

// function hoistTest4(){
    
//     console.log(x)
//     var x = 5;
// }
//  //undefined b/c var is hoisted and declared before it's assigned

// //let is not subject to hoisting

function breaksthings() {
    throw new Error("haha I've broken stuff!");

}
try{
breaksthings();
} catch(error) {
    console.log("Oops!")
} finally {
    console.log("this always runs")
}


console.log("this should not print b/c of the of the error, untill try catch is implemented")


function ResourceNotFoundErr (){

}

let myError = new ResourceNotFoundErr();
myError.prototype = Error;

myError();

