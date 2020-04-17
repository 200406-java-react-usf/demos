const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
<<<<<<< HEAD
    // your thunk implementation here
=======
    
    console.log(`Requesting: ${file}`);

    // your thunk implementation here
    
>>>>>>> 56224b1bba27db644b86c5692e9f32be1ddaa8f0
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?
