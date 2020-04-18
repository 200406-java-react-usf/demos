const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    // Wezley's implementation
    return new Promise(resolve => {
        requestFileFromServer(file, resolve);
    });

    // Korey and team's implementation
    // return new Promise((resolve, reject) => {

    //     requestFileFromServer(file, text => {
    //         if(text) {
    //             console.log(`${file} - text is truthy`);
    //             resolve(text);
    //         }
    //         else {
    //             console.log('text is falsy');
    //             reject('Request Failed!');
    //         }
    //     });

    // });
}

// FREEBIE: request all files in "parallel" here
// let promise1 = retrieveFile('file1').catch(reason => console.log(reason));
// let promise2 = retrieveFile('file2').catch(reason => console.log(reason));
// let promise3 = retrieveFile('file3').catch(reason => console.log(reason));
// let promise4 = retrieveFile('file4').catch(reason => console.log(reason));

// Wezley's implementation
// promise1.then(text => console.log(text))
//         .then(() => promise2)
//         .then(text => console.log(text))
//         .then(() => promise3)
//         .then(text => console.log(text))
//         .finally(() => console.log('Complete!'));

//------------------------------------------------------------------

// Alternative Solution using .map and .reduce to manage flow control

// function getFiles(...files) {

//     files.map(retrieveFile) // returns a new array of Promises

//         .reduce((chain, filePromise) => {

//             return chain.then(() => filePromise)
//                         .then(text => console.log(text));

//         }, Promise.resolve())

//         .finally(() => console.log('Complete!'));

// }

// getFiles('file1', 'file2', 'file3');

//------------------------------------------------------------------

// Alternative Solution using async/await 

async function getFiles() {
    let filePromises = [retrieveFile('file1'), retrieveFile('file2'), retrieveFile('file3')]
    for (file of filePromises) {
        console.log(await file);
    }
    console.log('Complete!');
}

getFiles();

//------------------------------------------------------------------

// Korey and team's implementation
// promise1.then(text=>{
//     console.log(text);
//     return promise2;
// }).then(text=>{
//     console.log(text);
//     return promise3;
// }).then(text=>{
//     console.log(text);
//     return promise4;
// }).then((text)=>{
//     console.log('Should not print'); 
// }).finally(()=>{
//     console.log('Complete!');
// });

//---------------------------------------------------------

// Non-Fixes (feel free to refactor to make some of these work)


// Promise.all --- Does not really solve this problem, since it waits for all files to be retrieved before printing their text
// Promise.all([retrieveFile('file1'), retrieveFile('file2'), retrieveFile('file3')])
//        .then(values => {
//            values.forEach(val => console.log(val));
//            return values;
//        })
//        .finally(() => console.log('Complete!'));