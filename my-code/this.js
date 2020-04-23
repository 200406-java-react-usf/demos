const events = require('events');

console.log(this); // == {}

// function declaration
function a() {

    console.log(this); // == Object [global] {...}

}
a();

//anon func
let b = function () {

    console.log(this);

}
b();

//arrow func (doesnt create its own this)
let c = () => {

    console.log(this); // == {}, this points to what it meant outside of the func

}
c();

//constructor func - create object, and these are the values
function D() {

    this.x = 1;
    this.y = 2;
    console.log(this); // == D {...} points to D obj

}
let d = new D();

//event stuff
let e = new events.EventEmitter();

//cb using standard func
e.on('something',function(){

    console.log(this);// == EventEmitter obj

});

e.on('somethingElse',() => {

    console.log(this); // still empty obj, refers to the thing outside

});

e.emit('something');
e.emit('somethingElse');


function F() {

    this.x = 1;

    console.log(this); // == {x: 1}

    let a = this;

    const b = () => {

        console.log(this);// == {x: 1}
        console.log(a === this); // true

    }

    b();

    const c = function (){

        console.log(this); // == global obj
        console.log( a === this);// false

    }
    c();
}

let f = new F();

let fun = function() {

    console.log(this); // global obj

}

fun();

f.d = fun;
f.d(); // == F obj