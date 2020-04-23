const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    // your thunk implementation here
    
    requestFileFromServer(file, (text) => {
     
    }
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?
thunk1(callBack => {
    console.log(callBack);
    thunk2(callBack => {
        console.log(callBack);
        thunk3(callBack => {
            console.log(callBack);
            console.log('Complete!')
        });
    });
});
