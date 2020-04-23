const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);
    return new Promise((resolve) => {
        requestFileFromServer(file, resolve(text));
    });
}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
//let promise2 = retrieveFile('file2');
//let promise3 = retrieveFile('file3');

//Hmmmm, what to do down here?

promise1.then((cb) => console.log(cb))
        .then(() => 'file2')
        .then((cb) => console.log(cb))
        .then(() => 'file3')
        .then((cb) => console.log(cb))
        .finally(() => console.log('Complete!'));