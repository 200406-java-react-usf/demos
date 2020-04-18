const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);
    
    return new Promise((resolve, reject) => {

        requestFileFromServer(file, text => {
            if(text) resolve(`Request for ${file} success! Text: ${text}`);
            else reject(`Request for ${file} failed!`);
        });

    });
    
}

//-------------------------------------------------------------------------------

// First implementation using Promises (meets minimum reqs, but does not handle errors well)


// promise1.then(text => {
//     console.log(text);
//     return promise2;
// }).then(text => {
//     console.log(text);
//     return promise3;
// }).then(text => {
//     console.log(text);
//     return promise4;
// }).then(text => {
//     console.log(`${text} - should not print`);
// }).catch(err => {
//     console.log(err);
// }).finally(() => {
//     console.log('Complete!');
// });

//--------------------------------------------------------------------------------

// Second implementation using Promises (meets minimum reqs, but does not handle errors well)

// let promise1 = retrieveFile('file1');
// let promise2 = retrieveFile('file2');
// let promise3 = retrieveFile('file3');
// let promise4 = retrieveFile('file4');

// promise1.then(text => console.log(text))
//         .then(() => promise2)
//         .then(text => console.log(text))
//         .then(() => promise3)
//         .then(text => console.log(text))
//         .then(() => promise4)
//         .then(text => console.log(text))
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));

//--------------------------------------------------------------------------------

// Using .map and .reduce to manage flow control (meets minimum reqs, but does not handle errors well)

// function getFiles(...files) {

//     files.map(retrieveFile) // returns a new array of Promises
//         .reduce((chain, filePromise) => {

//             return chain.then(() => filePromise)
//                         .then(text => console.log(text))
//                         .catch(err => console.log(err));

//         }, Promise.resolve())
//         .finally(() => console.log('Complete!'));

// }

// getFiles('file1', 'file2', 'file3', 'file4');


//-------------------------------------------------------------------------------

// Using async/await (meets minimum reqs, but does not handle errors well)

// async function getFiles(...files) {
//     try {
//         let filePromises = files.map(retrieveFile);
//         for (file of filePromises) {
//             console.log(await file);
//         }
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('Complete!');
//     }
// }

// getFiles('file1', 'file2', 'file3', 'file4');

//-------------------------------------------------------------------------------

// Promise.all -- waits for all of the Promises in a provided array to be fulfilled and returns a Promise
//                containing an array of their resolved values

// Does not really solve this problem, since it waits for all files to be retrieved before printing their text
// Does not work reliably if errors occur. 

// Promise.all([retrieveFile('file1'), retrieveFile('file2'), retrieveFile('file3'), retrieveFile('file4')])
//        .then(values => {
//             values.forEach(val => {
//                 console.log(val);
//             });
//        })
//        .finally(() => console.log('Complete!'));

//-------------------------------------------------------------------------------

// Promise.allSettled -- waits for all of the Promises in a provided array to be resolved (regardless of fate) and returns a Promise
//                       containing an array of objects indicating a status of "fulfilled" or "rejected" along with a "value" or "reason"
//                       property.

// Does not really solve this problem, since it waits for all files to be retrieved before printing their text
// Handles errors well though!
Promise.allSettled([retrieveFile('file1'), retrieveFile('file2'), retrieveFile('file3'), retrieveFile('file4')])
       .then(values => {
           
            values.forEach(val => {
                if (val.status === 'fulfilled') {
                    console.log(val.value)
                } else {
                    console.log(val.reason);
                }
            });
       })
       .finally(() => console.log('Complete!'));