const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    // your promise implementation here

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?
