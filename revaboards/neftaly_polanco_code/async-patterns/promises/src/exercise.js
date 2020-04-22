/**
 * Solving retrieve file execise using promises
 * @param {argument} file represents the incomming file from the server
 * @param {function} cb is a callback when file is retrieved;
 */

const requestFileFromServer = require('./request-file-from-server');
let result;
function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    // your promise implementation here

    let promise = new Promise(function(resolve, reject) {
        requestFileFromServer(file, (text) => {        
               if(text)
               resolve(text);                        
               reject('Request Failed!');           
        });     
    });
    //promise.then(function)
    return promise;

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');


// Hmmmm, what to do down here?
promise1.then(text1 => {
    console.log(text1);
    return promise2;
}).then(text2 => {
    console.log(text2);
    return promise3;
}).then(text3 => {
    console.log(text3);
}).finally(() => {
    console.log('Complete!')
})

