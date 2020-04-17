// thunk = is a function that encapstulates sync or async logic inside
//async thunks only take in a callback which is used to provide the value when it is computed


//synchrnos thunk
function multiply(a,b) {
    return a * b;
}

let thunk = function() {
    return multiply(10, 20);
}

console.log(thunk());

//async thunks
function multiplyAsync(a,b, cb) {
    setTimeout(()=> {
        cb(a * b);
    },2000);
}

let asyncthunk = function(cb) {
    return multiplyAsync(10, 20, cb);
}

asyncthunk(function(product) {
    console.log(product);
})