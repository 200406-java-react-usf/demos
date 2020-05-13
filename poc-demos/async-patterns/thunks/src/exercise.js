const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file, cb) {
    
    console.log(`Requesting: ${file}`);

    requestFileFromServer(file, function(text){
        cb(text);
    });

}



// FREEBIE: request all files in "parallel" here
let thunk1 = function(cb) {return (retrieveFile('file1', cb))};
let thunk2 = function(cb) {return (retrieveFile('file2', cb))};
let thunk3 = function(cb) {return (retrieveFile('file3', cb))};

// Hmmmm, what to do down here?

thunk1(text => { 
    console.log(text)
    thunk2(text => { 
        console.log(text)
        thunk3(text => { console.log(text)});
    }); 
});


