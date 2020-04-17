//thunk = is a function that encapsulates sync or async logic inside 
// async thunks only take in a callback which is used to provide the values it is computed. 
// 


//synchronous thunk
function multiply(a, b) {
    return a * b;
}

let thunk = () => {
    return multiply(10, 20);
}

console.log(thunk());

//async thunks

function multiplyAsync(a, b, cb) {
    setTimeout(() => {
        cb(a * b);
    }, 1000)
}

let asyncThunk = function(cb) {
    return multiplyAsync(10, 20, cb);
}

asyncThunk((product) => {
    console.log(product);
})