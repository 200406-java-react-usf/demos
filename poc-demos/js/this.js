// const events = require('events');

// console.log(this); // this == {}

// // Function declaration
// function a() {
//     console.log(this); // this == Object [global] {...} (provided by NodeJS)
// }

// a();

// // (Standard) anonymous function
// let b = function() {
//     console.log(this); // this == Object [global] {...} 
// }

// b();

// // Arrow function (does not create it's own 'this', instead inherits it from outside)
// let c = () => {
//     console.log(this); // this == {}
// }

// c();

// // Constructor function
// function D() {
//     this.x = 1;
//     this.y = 2;
//     this.z = 3;
//     console.log(this); // this == D {...}
// }

// let d = new D();

// let e = new events.EventEmitter();

// // callback (using standard anonymous function)
// e.on('something', function() {
//     console.log(this); // this == EventEmitter {...}
// });

// e.on('arrow', () => {
//     console.log(this); // this == {}
// });

// e.emit('something');
// e.emit('arrow');

// function F() {

//     this.x = 1;

//     console.log(this); // this == F {...}

//     let a = this;
    
//     const b = () => {
//         console.log(this); // this == F {...}
//         console.log(a === this); // true!
//     }

//     b();

//     const c = function() {
//         console.log(this); // this == Object [global] {...}
//         console.log(a === this); // false!
//     }

//     c();

// }

// let f = new F();

// let fun = function() {
//     console.log(this);
// }

// fun(); // this == Object [global] {...}

// f.d = fun;
// f.d(); // this == F {...}

// let moreFun = () => {
//     console.log(this);
// }

// moreFun(); // this == {}

// f.e = moreFun;
// f.e(); // this == {}

// class G {

//     constructor() {
//         console.log(this); // this == G {...}
//     }

//     a() {
//         console.log(this); // this == G {...}
//     }
// }

// let g = new G();
// g.a();

// let h = fun.bind(g); // not super common, but helpful sometimes
// h(); // this == G {...}

// let i = moreFun.bind(g);
// i(); // this == {} 

let test = new Function('x', 'y', 'console.log(this)');
console.log(test(10, 2));

function User(un, pw) {
    this.id = 1;
    this.username = un;
    this.password = pw;

    console.log(this);

}

function getCredentials(x, y) {
    console.log(x, y);
    return `${this.username} ${this.password}`;
}

let user = new User('wsingleton', 'password');
console.log(getCredentials());

// creates a new function with the this keyword bound to the user object from ln 130
let getUserCredentials = getCredentials.bind(user); 

console.log(getUserCredentials());

let user2 = new User('bkruppa', 'react');
let user2Creds = getCredentials.call(user2, 1, 2);
console.log(user2Creds)

let user1Creds = getCredentials.apply(user, [9, 8]);

