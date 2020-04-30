function* test() {

    yield 1;
    yield 2;
    yield 3;
    return 4;
    // yield 5; // never gets ran/called since 'return' changes done to true
}

let r1 = test.call(null);
// let r2 = test().call(null); // DOES NOT WORK! Generator objects do not have a .call/.bind/.apply
let r3 = test().next();
console.log(r1); // Object [Generator] {}
// console.log(r2); // 
console.log(r3); //  { value : 1, done: false}

//-------------------------------------------------------------

function* fibonacci(n) {
    const infinite = (!n && n !== 0);
    let current = 0;
    let next = 1;

    while(infinite || n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}

let [...firstFive] = fibonacci(5);
console.log(firstFive);
