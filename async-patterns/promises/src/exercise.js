const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {

    console.log(`Requesting: ${file}`);

    // your promise implementation here
    let newPromise = new Promise(
        function (resolve) {
            requestFileFromServer(
                file, text => {
                    resolve(text);
                }
            )
        }
    )
    return newPromise
}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?
promise1.then(function (text) {
    console.log(text)
    return promise2;
}).then(function (text) {
    console.log(text)
    return promise3;
}).then(function (text) {
    console.log(text)
    console.log("completed")
})

