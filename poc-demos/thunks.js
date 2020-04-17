//Thunk = function that encapsulates sync/async logic inside
//      async thunks only take in cb which is used to provide the value when it is computer

//sync thunk
function multiply(a,b) {
    return a*b;
}

let thunk = function() {
    return multiply(10,20);
}

console.log(thunk());

//async thunks

function multiplyAsync(a,b,cb){
    setTimeout(() => {
        cb(a*b);
    },1000);
}

let asyncThunk = function(cb) {
    return multiplyAsync(10,20,cb);
}

asyncThunk(function(prod){
    console.log(prod);
});
