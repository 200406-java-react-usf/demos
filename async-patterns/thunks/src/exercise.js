const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    let called; // determines if we req'd file
    let response; //store response from server
    let thunkCb; // a cb to be used in case we get a file earlier than expected

    //async stuff
    requestFileFromServer(file, function(text){

        if(!called){
            called = true;
            response = text;
        } else {
            thunkCb(text);
        }

    });

    return function(cb){
        if(!called){
            called = true;
            thunkCb = cb;
        } else{
            cb(response);
        }
    }
    
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

thunk1(text => {
    console.log(text);
    thunk2(text => {
        console.log(text);
        thunk3(text => {
            console.log(text);
            console.log('Complete');
        });
    });
});


// Hmmmm, what to do down here?

/*

    let output, fn;

    requestFileFromServer(file, function(text){
        output = text
        if (fn) {
            fn(output);
        }
    });
    
    return function(cb){
        if(output){
            cb(output);
        } else {
            fn = cb;
        }
    }

thunk1(function(cb){
    console.log(cb);
    thunk2(function(cb){
        console.log(cb);
        thunk3(function(cb){
            console.log(cb);
            console.log('Complete')
        });
    });
});

*/