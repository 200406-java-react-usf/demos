/*
    Task A - takes 4 secs (each second is a microtask)
    Task B - takes 3 secs (each second is a microtask)
    
    Option 1: A1 - A2 - A3 - A4 - B1 - B2 - B3 (7 seconds)

    Option 2: A1 - B1 - A2 - B2 - B3 - A3 - A4 (7 seconds)

    ...

    Asynchronous Programming == managing concurrency

    Async Pattern:
      
      - callbacks
        + pro: simple enough
        + cons: readability (callback hell), inversion of control

      - thunk
        + definition (synchronous and asynchronous)
        + relationship to closures
        + replace callbacks with thunks
    
      - Promises
        + then/catch syntax
        + async/await syntax

*/

// NOW

setTimeout(() => {
    // LATER
    console.log('callback!');
}, 1000);


// NOW

//-----------------------------------

// Callback Hell

setTimeout(() => {
    console.log('uno!');
    setTimeout(() => {
        console.log('dos!');
        setTimeout(() => {
            console.log('tres!');
            setTimeout(() => {
                console.log('quatro!');
                setTimeout(() => {
                    console.log('cinco!');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Still in callback hell (just looks better)

function one(cb) {
    console.log('one');
    setTimeout(cb, 1000);
}

function two(cb) {
    console.log('one');
    setTimeout(cb, 1000);
}

function three(cb) {
    console.log('one');
    setTimeout(cb, 1000);
}

one(function() {
    two(three);
});