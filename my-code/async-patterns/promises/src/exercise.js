const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    return new Promise(resolve => {

        //pass in resolve, and when we call it below, we pass in the console.log(text);
        requestFileFromServer(file, resolve);

    });

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?
promise1.then(text => console.log(text))
        .then(() => promise2)
        .then(text => console.log(text))
        .then(() => promise3)
        .then(text => console.log(text))
        .finally(() => console.log('Complete')) 