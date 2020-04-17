const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {

    console.log(`Requesting: ${file}`);

    // your promise implementation here

    return new Promise((resolve, reject) => {
        requestFileFromServer(file, text => {
            try{
            if (text) {
                resolve(text);
            }
                reject('It failed');
        }
            catch {
                reject('It failed');
                }
            
        })
    })
    

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');
let promise4 = retrieveFile('file4');

// Hmmmm, what to do down here?

promise1.then(result => {
    console.log(result);
    return promise2;
})
.then(result => {
    console.log(result);
    return promise3;
})
.then(result => {
    console.log(result);
    return promise4;
})
.then(result => {
    console.log(result);
    console.log('Complete');
})