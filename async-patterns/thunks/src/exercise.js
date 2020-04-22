const requestFileFromServer = require('./request-file-from-server');


function retrieveFile(file, cb) {
    cb( requestFileFromServer(file)  )
    console.log(`Requesting: ${file}`)
// let called   used to determine if we've already requeted the file
// let response   used to store the response from the server
// let thunkCB    a callback to be used in case we get a file earlier than expected

// requestFileFromServer(file ,text =>{
// if (!called) {
//     called = true;
//     response =text;
// }else {
//     thunkCb(text);
//     }
// });

// return function(cb) {
//     if(!called) {
//         called = true
//     } else{
//         cb(response);
//     }

// }

// }
}




// FREEBIE: request all files in "parallel" here
let thunk1 = function(cb) {return retrieveFile('file1', cb)};
let thunk2 = function(cb) {return retrieveFile('file2', cb)};
let thunk3 = function(cb) {return retrieveFile('file3', cb)};


thunk1(function(file){
    console.log(file)
})





// function multiplyAsync(a, b, cb) {
//     setTimeout(() => {
//         cb(a * b);
//     }, 2000);
// }

// let asyncThunk = function(cb) {
//     return multiplyAsync(10, 20, cb);}

// asyncThunk(function(product) {
//     console.log(product);
// });






