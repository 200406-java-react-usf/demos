const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    // your thunk implementation here
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?
