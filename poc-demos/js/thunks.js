// thunk = is a function that encapsulates sync or async logic inside and has access to closured state to calculate some value
// async thunks only take in a callback which is used to provide the value when it is computed


// synchronous thunk
function multiply(a, b) {
    return a * b;
}

let thunk = function() {
    return multiply(10, 20);
}

console.log(thunk());


// async thunks
function multiplyAsync(a, b, cb) {
    setTimeout(() => {
        cb(a * b);
    }, 2000);
}

let asyncThunk = function(cb) {
    return multiplyAsync(10, 20, cb);
}

asyncThunk(function(product) {
    console.log(product);
});
