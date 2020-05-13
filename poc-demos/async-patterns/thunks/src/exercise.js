const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    let called; // used to determine if we've already requested the file
    let response; // used to store the response from the server
    let thunkCb; // a callback to be used in case we get a file earlier than expected

    // here's the async stuff
    requestFileFromServer(file, text => {
        if(!called) {
            called = true;
            response = text;
        } else {
            thunkCb(text);
        }
    });

    // this is the thunk
    return function(cb) {
        if(!called) {
            called = true;
            thunkCb = cb
        } else {
            cb(response);
        }
    }

}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?
thunk1(text => {
    console.log(text);
    thunk2(text => {
        console.log(text);
        thunk3(text => {
            console.log(text);
            console.log('Complete!');
        })
    })
})