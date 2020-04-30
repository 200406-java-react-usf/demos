import { EventEmitter } from 'events';

let hello = (name: string): string => {
    let message = `Hello, ${name}`;
    return message;
}

let x: number = 5;


let emitter: EventEmitter = new EventEmitter();

emitter.on('test', name => {
    console.log(hello(name));
});

emitter.emit('test', 'wezley');

//----------------------------------------------------

function addAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    })
}

(async function() {

    let sum = await addAsync(4, 5);
    console.log(sum);

})();

//-----------------------------------------------------

// an abstract representation of Calculator
interface Calculator {

    add(x: number, y: number): number; // method stub (method w/o implementation)
    double(x: number): number;

}

// a concrete implementation of Calculator
class MyCalculator implements Calculator {

    add(x: number, y: number): number {
        return x + y;
    }

    double(x: number): number {
        return x * 2;
    }

}

let myCalc = new MyCalculator();
console.log(myCalc.add(2, 3));
console.log(myCalc.double(5));