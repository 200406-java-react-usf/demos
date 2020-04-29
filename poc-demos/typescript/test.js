var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventEmitter } from 'events';
let hello = (name) => {
    let message = `Hello, ${name}`;
    return message;
};
let x = 5;
let emitter = new EventEmitter();
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
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let sum = yield addAsync(4, 5);
        console.log(sum);
    });
})();
// a concrete implementation of Calculator
class MyCalculator {
    add(x, y) {
        return x + y;
    }
    double(x) {
        return x * 2;
    }
}
let myCalc = new MyCalculator();
console.log(myCalc.add(2, 3));
console.log(myCalc.double(5));
