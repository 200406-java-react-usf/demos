// example of a synchronous thunk
function multiply (a, b)
{
    return a*b;
}

let thunk = function() 
{
    return multiply(10,20);
}

console.log(thunk());

// async thunks
function multiplyAsync (a, b, cb)
{
    setTimeout(()=>
    {
        cb(a*b);
    }, 1000)
}

let asyncThunk = function (cb)
{
    return multiplyAsync(10, 20, cb)
}

asyncThunk(function(product)
{
    console.log(product);
})